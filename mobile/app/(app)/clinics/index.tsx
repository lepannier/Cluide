import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import AmbientBackground from '@/components/AmbientBackground'
import { colors, spacing, radius, font } from '@/lib/tokens'

type Clinic = {
  id: string
  name: string
  city: string
  beds: number
  phone?: string
}

const BASE_URL = 'https://klinikatlas.bmg.api.bund.dev'

export default function Clinics() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Clinic[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  async function handleSearch() {
    if (!query.trim()) return
    setLoading(true)
    setSearched(true)

    try {
      const params = new URLSearchParams({
        geolabel: query,
        department: 'psychiatrie',
      })
      const res = await fetch(`${BASE_URL}/searchresults/?${params}`)
      const data = await res.json()

      const clinics: Clinic[] = (data.results ?? []).map((r: any) => ({
        id: String(r.id),
        name: r.header ?? 'Unbekannte Klinik',
        city: r.address?.city ?? '',
        beds: r.content?.beds_number ?? 0,
        phone: r.content?.phone,
      }))
      setResults(clinics)
    } catch {
      setResults([])
    }

    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <AmbientBackground />
      <View style={styles.header}>
        <Text style={styles.screenLabel}>kliniken.</Text>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Stadt oder PLZ eingeben…"
            placeholderTextColor={colors.muted}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Ionicons name="search" size={18} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      {loading && <ActivityIndicator style={{ marginTop: spacing.xl }} color={colors.black} />}

      {!loading && searched && results.length === 0 && (
        <Text style={styles.empty}>Keine Kliniken gefunden. Versuche eine andere Stadt oder PLZ.</Text>
      )}

      <FlatList
        data={results}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.7}>
            <View style={styles.cardBody}>
              <Text style={styles.clinicName}>{item.name}</Text>
              <Text style={styles.clinicMeta}>{item.city}{item.beds > 0 ? ` · ${item.beds} Betten` : ''}</Text>
              {item.phone && (
                <Text style={styles.clinicPhone}>{item.phone}</Text>
              )}
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.border} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: spacing.xl, gap: spacing.md },
  screenLabel: { fontFamily: font.light, fontSize: 40, letterSpacing: -1.5, color: colors.black },
  searchRow: { flexDirection: 'row', gap: spacing.sm },
  searchInput: { flex: 1, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, paddingHorizontal: spacing.md, paddingVertical: spacing.md, fontFamily: font.regular, fontSize: 15, color: colors.black },
  searchButton: { backgroundColor: colors.black, borderRadius: radius.md, paddingHorizontal: spacing.md, alignItems: 'center', justifyContent: 'center' },
  list: { paddingHorizontal: spacing.xl, gap: spacing.sm, paddingBottom: spacing.xxl },
  card: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md, flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  cardBody: { flex: 1, gap: 4 },
  clinicName: { fontFamily: font.semiBold, fontSize: 14, color: colors.black },
  clinicMeta: { fontFamily: font.regular, fontSize: 13, color: colors.muted },
  clinicPhone: { fontFamily: font.regular, fontSize: 12, color: colors.muted },
  empty: { fontFamily: font.regular, fontSize: 14, color: colors.muted, textAlign: 'center', marginTop: spacing.xl, paddingHorizontal: spacing.xl },
})
