import { useEffect, useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AmbientBackground from '@/components/AmbientBackground'
import { colors, spacing, radius, font } from '@/lib/tokens'
import { cms, GuideStep, Article, HealthResource } from '@/lib/cms'

function renderBody(body: any[]): string {
  if (!body?.length) return ''
  return body
    .map((block: any) => {
      if (block.type === 'paragraph') {
        return block.children?.map((c: any) => c.text).join('') ?? ''
      }
      if (block.type === 'heading') {
        return block.children?.map((c: any) => c.text).join('') ?? ''
      }
      return ''
    })
    .filter(Boolean)
    .join('\n\n')
}

const RESOURCE_TYPE_LABELS: Record<string, string> = {
  app: 'App',
  book: 'Buch',
  'self-help-group': 'Selbsthilfegruppe',
  emergency: 'Notfall',
  community: 'Community',
}

export default function GuideStepDetail() {
  const { slug } = useLocalSearchParams<{ slug: string }>()
  const router = useRouter()
  const [step, setStep] = useState<GuideStep | null>(null)
  const [articles, setArticles] = useState<Article[]>([])
  const [resources, setResources] = useState<HealthResource[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    Promise.all([
      cms.guideStep(slug),
      cms.articlesByStep(slug),
      cms.resourcesByStep(slug),
    ]).then(([stepData, articleData, resourceData]) => {
      const s = Array.isArray(stepData) ? stepData[0] : stepData
      setStep(s ?? null)
      setArticles(Array.isArray(articleData) ? articleData : [])
      setResources(Array.isArray(resourceData) ? resourceData : [])
    }).catch(() => {}).finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <AmbientBackground />
        <ActivityIndicator color={colors.black} style={{ marginTop: 80 }} />
      </SafeAreaView>
    )
  }

  if (!step) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <AmbientBackground />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.black} />
          </TouchableOpacity>
        </View>
        <Text style={styles.empty}>Inhalt nicht gefunden.</Text>
      </SafeAreaView>
    )
  }

  const bodyText = renderBody(step.body)

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <AmbientBackground />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.black} />
          </TouchableOpacity>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>{step.order}</Text>
          </View>
        </View>

        <Text style={styles.title}>{step.title}</Text>
        <Text style={styles.description}>{step.description}</Text>

        {!!bodyText && (
          <Text style={styles.body}>{bodyText}</Text>
        )}

        {articles.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Artikel</Text>
            <View style={styles.cards}>
              {articles.map((article) => (
                <View key={article.id} style={styles.card}>
                  <Text style={styles.cardTitle}>{article.title}</Text>
                  <Text style={styles.cardSub}>{article.summary}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {resources.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ressourcen</Text>
            <View style={styles.cards}>
              {resources.map((res) => (
                <View key={res.id} style={styles.card}>
                  <View style={styles.resourceHeader}>
                    <Text style={styles.cardTitle}>{res.title}</Text>
                    <View style={styles.tag}>
                      <Text style={styles.tagText}>{RESOURCE_TYPE_LABELS[res.type] ?? res.type}</Text>
                    </View>
                  </View>
                  <Text style={styles.cardSub}>{res.description}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, gap: spacing.lg, paddingBottom: 60 },
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  stepBadge: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.black, alignItems: 'center', justifyContent: 'center' },
  stepBadgeText: { fontFamily: font.semiBold, fontSize: 13, color: colors.white },
  title: { fontFamily: font.light, fontSize: 34, letterSpacing: -1, color: colors.black },
  description: { fontFamily: font.regular, fontSize: 15, color: colors.muted, lineHeight: 22 },
  body: { fontFamily: font.regular, fontSize: 15, color: colors.black, lineHeight: 24 },
  empty: { fontFamily: font.regular, fontSize: 14, color: colors.muted, textAlign: 'center', marginTop: spacing.xl },
  section: { gap: spacing.sm },
  sectionTitle: { fontFamily: font.semiBold, fontSize: 13, color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.8 },
  cards: { gap: spacing.sm },
  card: { backgroundColor: colors.white, borderRadius: radius.md, padding: spacing.md, borderWidth: 1, borderColor: colors.border, gap: 6 },
  cardTitle: { fontFamily: font.semiBold, fontSize: 15, color: colors.black },
  cardSub: { fontFamily: font.regular, fontSize: 13, color: colors.muted, lineHeight: 18 },
  resourceHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.sm },
  tag: { backgroundColor: colors.background, borderRadius: radius.sm, paddingHorizontal: 8, paddingVertical: 3, borderWidth: 1, borderColor: colors.border },
  tagText: { fontFamily: font.regular, fontSize: 11, color: colors.muted },
})
