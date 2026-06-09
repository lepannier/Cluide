import { useEffect, useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AmbientBackground from '@/components/AmbientBackground'
import { colors, spacing, radius, font } from '@/lib/tokens'
import { cms, GuideStep } from '@/lib/cms'

export default function Guide() {
  const router = useRouter()
  const [steps, setSteps] = useState<GuideStep[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    cms.guideSteps()
      .then(setSteps)
      .catch(() => setSteps([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <AmbientBackground />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenLabel}>dein guide.</Text>
        <Text style={styles.intro}>
          Wir begleiten dich Schritt für Schritt auf dem Weg zu deinem Klinikplatz.
        </Text>

        {loading ? (
          <ActivityIndicator color={colors.black} style={{ marginTop: spacing.xl }} />
        ) : steps.length === 0 ? (
          <Text style={styles.empty}>Inhalte werden gerade vorbereitet.</Text>
        ) : (
          <View style={styles.steps}>
            {steps.map((step) => (
              <TouchableOpacity
                key={step.id}
                style={styles.stepCard}
                activeOpacity={0.7}
                onPress={() => router.push(`/(app)/guide/${step.slug}`)}
              >
                <View style={styles.stepMeta}>
                  <View style={styles.stepDot}>
                    <Text style={styles.stepNumber}>{step.order}</Text>
                  </View>
                </View>
                <View style={styles.stepBody}>
                  <Text style={styles.stepLabel}>{step.title}</Text>
                  <Text style={styles.stepDescription}>{step.description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={colors.border} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, gap: spacing.lg },
  screenLabel: { fontFamily: font.light, fontSize: 40, letterSpacing: -1.5, color: colors.black },
  intro: { fontFamily: font.regular, fontSize: 15, color: colors.muted, lineHeight: 22 },
  empty: { fontFamily: font.regular, fontSize: 14, color: colors.muted, textAlign: 'center', marginTop: spacing.xl },
  steps: { gap: spacing.sm },
  stepCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.md, backgroundColor: colors.white, borderRadius: radius.md, paddingHorizontal: spacing.md, borderWidth: 1, borderColor: colors.border },
  stepMeta: { alignItems: 'center' },
  stepDot: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.black, alignItems: 'center', justifyContent: 'center' },
  stepNumber: { fontFamily: font.semiBold, fontSize: 13, color: colors.white },
  stepBody: { flex: 1, gap: 4 },
  stepLabel: { fontFamily: font.semiBold, fontSize: 15, color: colors.black },
  stepDescription: { fontFamily: font.regular, fontSize: 13, color: colors.muted, lineHeight: 18 },
})
