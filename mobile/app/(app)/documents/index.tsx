import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import * as DocumentPicker from 'expo-document-picker'
import AmbientBackground from '@/components/AmbientBackground'
import { supabase } from '@/lib/supabase'
import { colors, spacing, radius, font } from '@/lib/tokens'

type Doc = {
  id: string
  name: string
  type: string
  created_at: string
}

const CHECKLIST = [
  { label: 'Einweisungsschein / Überweisung', key: 'referral' },
  { label: 'Krankenversicherungskarte', key: 'insurance' },
  { label: 'Aktuelle Medikamentenliste', key: 'medication' },
  { label: 'Vorbefunde / Arztberichte', key: 'reports' },
]

export default function Documents() {
  const [docs, setDocs] = useState<Doc[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchDocuments()
  }, [])

  async function fetchDocuments() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data } = await supabase
      .from('documents')
      .select('id, name, type, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    setDocs(data ?? [])
    setLoading(false)
  }

  async function handleUpload(type: string, label: string) {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'image/*'],
      copyToCacheDirectory: true,
    })

    if (result.canceled) return
    const file = result.assets[0]

    setUploading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const ext = file.name.split('.').pop()
    const path = `${user.id}/${Date.now()}.${ext}`

    const response = await fetch(file.uri)
    const blob = await response.blob()

    const { error: uploadError } = await supabase.storage
      .from('documents')
      .upload(path, blob, { contentType: file.mimeType ?? 'application/octet-stream' })

    if (uploadError) {
      Alert.alert('Fehler', 'Datei konnte nicht hochgeladen werden.')
      setUploading(false)
      return
    }

    await supabase.from('documents').insert({
      user_id: user.id,
      name: label,
      type,
      file_path: path,
    })

    await fetchDocuments()
    setUploading(false)
  }

  async function handleDelete(doc: Doc) {
    Alert.alert('Dokument löschen', `„${doc.name}" wirklich löschen?`, [
      { text: 'Abbrechen', style: 'cancel' },
      {
        text: 'Löschen', style: 'destructive', onPress: async () => {
          await supabase.from('documents').delete().eq('id', doc.id)
          await fetchDocuments()
        }
      },
    ])
  }

  const uploadedTypes = new Set(docs.map(d => d.type))

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <AmbientBackground />
      <View style={styles.header}>
        <Text style={styles.screenLabel}>dokumente.</Text>
        <Text style={styles.intro}>Lade deine Unterlagen hoch, damit du alles griffbereit hast.</Text>
      </View>

      {/* Checklist */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Checkliste</Text>
        {CHECKLIST.map(item => (
          <TouchableOpacity
            key={item.key}
            style={styles.checkItem}
            onPress={() => handleUpload(item.key, item.label)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkBox, uploadedTypes.has(item.key) && styles.checkBoxDone]}>
              {uploadedTypes.has(item.key) && <Ionicons name="checkmark" size={14} color={colors.white} />}
            </View>
            <Text style={[styles.checkLabel, uploadedTypes.has(item.key) && styles.checkLabelDone]}>
              {item.label}
            </Text>
            {!uploadedTypes.has(item.key) && (
              <Ionicons name="cloud-upload-outline" size={16} color={colors.muted} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Uploaded docs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hochgeladene Dateien</Text>
        {loading && <ActivityIndicator color={colors.black} />}
        {!loading && docs.length === 0 && (
          <Text style={styles.empty}>Noch keine Dokumente hochgeladen.</Text>
        )}
        {docs.map(doc => (
          <View key={doc.id} style={styles.docRow}>
            <Ionicons name="document-outline" size={18} color={colors.muted} />
            <Text style={styles.docName} numberOfLines={1}>{doc.name}</Text>
            <TouchableOpacity onPress={() => handleDelete(doc)}>
              <Ionicons name="trash-outline" size={16} color={colors.muted} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {uploading && (
        <View style={styles.uploadingOverlay}>
          <ActivityIndicator color={colors.white} />
          <Text style={styles.uploadingText}>Wird hochgeladen…</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: spacing.xl, gap: spacing.sm },
  screenLabel: { fontFamily: font.light, fontSize: 40, letterSpacing: -1.5, color: colors.black },
  intro: { fontFamily: font.regular, fontSize: 14, color: colors.muted, lineHeight: 20 },
  section: { paddingHorizontal: spacing.xl, marginBottom: spacing.lg, gap: spacing.sm },
  sectionTitle: { fontFamily: font.semiBold, fontSize: 12, color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: spacing.xs },
  checkItem: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md },
  checkBox: { width: 22, height: 22, borderRadius: 6, borderWidth: 1.5, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  checkBoxDone: { backgroundColor: colors.black, borderColor: colors.black },
  checkLabel: { flex: 1, fontFamily: font.regular, fontSize: 14, color: colors.black },
  checkLabelDone: { color: colors.muted },
  docRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md },
  docName: { flex: 1, fontFamily: font.regular, fontSize: 13, color: colors.black },
  empty: { fontFamily: font.regular, fontSize: 13, color: colors.muted },
  uploadingOverlay: { position: 'absolute', bottom: spacing.xxl, alignSelf: 'center', backgroundColor: colors.black, borderRadius: radius.full, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, flexDirection: 'row', gap: spacing.sm, alignItems: 'center' },
  uploadingText: { fontFamily: font.medium, fontSize: 13, color: colors.white },
})
