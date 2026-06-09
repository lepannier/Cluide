import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AmbientBackground from '@/components/AmbientBackground'
import { supabase } from '@/lib/supabase'
import { colors, spacing, radius, font } from '@/lib/tokens'

export default function Profile() {
  async function handleSignOut() {
    Alert.alert('Abmelden', 'Möchtest du dich wirklich abmelden?', [
      { text: 'Abbrechen', style: 'cancel' },
      { text: 'Abmelden', style: 'destructive', onPress: () => supabase.auth.signOut() },
    ])
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <AmbientBackground />
      <View style={styles.content}>
        <Text style={styles.screenLabel}>profil.</Text>

        <View style={styles.section}>
          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <Text style={styles.rowLabel}>Datenschutz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <Text style={styles.rowLabel}>Impressum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <Text style={styles.rowLabel}>Nutzungsbedingungen</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Abmelden</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, padding: spacing.xl, gap: spacing.xl },
  screenLabel: { fontFamily: font.light, fontSize: 40, letterSpacing: -1.5, color: colors.black },
  section: { borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, overflow: 'hidden', backgroundColor: colors.white },
  row: { paddingHorizontal: spacing.md, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border },
  rowLabel: { fontFamily: font.regular, fontSize: 15, color: colors.black },
  signOutButton: { paddingVertical: spacing.md, alignItems: 'center', borderWidth: 1, borderColor: colors.border, borderRadius: radius.md },
  signOutText: { fontFamily: font.medium, fontSize: 15, color: colors.error },
})
