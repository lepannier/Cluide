import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import AmbientBackground from '@/components/AmbientBackground'
import { colors, spacing, radius, font } from '@/lib/tokens'

const STEPS = [
  { id: 1, label: 'Entscheidung', description: 'Verstehe, wann ein Klinikaufenthalt sinnvoll ist.', done: false },
  { id: 2, label: 'Suche & Auswahl', description: 'Finde die passende Klinik für deine Bedürfnisse.', done: false },
  { id: 3, label: 'Anmeldung', description: 'Schritt für Schritt durch den Aufnahmeprozess.', done: false },
  { id: 4, label: 'Wartezeit', description: 'Ressourcen und Unterstützung bis zum Aufenthalt.', done: false },
]

export default function Guide() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <AmbientBackground />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenLabel}>dein guide.</Text>
        <Text style={styles.intro}>
          Wir begleiten dich Schritt für Schritt auf dem Weg zu deinem Klinikplatz.
        </Text>

        <View style={styles.steps}>
          {STEPS.map((step, index) => (
            <TouchableOpacity key={step.id} style={styles.stepCard} activeOpacity={0.7}>
              <View style={styles.stepMeta}>
                <View style={[styles.stepDot, step.done && styles.stepDotDone]}>
                  {step.done
                    ? <Ionicons name="checkmark" size={14} color={colors.white} />
                    : <Text style={styles.stepNumber}>{step.id}</Text>
                  }
                </View>
                {index < STEPS.length - 1 && <View style={styles.stepLine} />}
              </View>
              <View style={styles.stepBody}>
                <Text style={styles.stepLabel}>{step.label}</Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.border} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, gap: spacing.lg },
  screenLabel: { fontFamily: font.light, fontSize: 40, letterSpacing: -1.5, color: colors.black },
  intro: { fontFamily: font.regular, fontSize: 15, color: colors.muted, lineHeight: 22 },
  steps: { gap: 0 },
  stepCard: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md, paddingVertical: spacing.md, backgroundColor: colors.white, borderRadius: radius.md, paddingHorizontal: spacing.md, marginBottom: spacing.sm, borderWidth: 1, borderColor: colors.border },
  stepMeta: { alignItems: 'center', gap: 0 },
  stepDot: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.black, alignItems: 'center', justifyContent: 'center' },
  stepDotDone: { backgroundColor: colors.black },
  stepNumber: { fontFamily: font.semiBold, fontSize: 13, color: colors.white },
  stepLine: { width: 1, height: spacing.lg, backgroundColor: colors.border, marginTop: 2 },
  stepBody: { flex: 1, gap: 4 },
  stepLabel: { fontFamily: font.semiBold, fontSize: 15, color: colors.black },
  stepDescription: { fontFamily: font.regular, fontSize: 13, color: colors.muted, lineHeight: 18 },
})
