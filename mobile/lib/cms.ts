const BASE = process.env.EXPO_PUBLIC_STRAPI_URL ?? ''

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}/api${path}?populate=*`)
  if (!res.ok) throw new Error(`CMS ${res.status}: ${path}`)
  const json = await res.json()
  return json.data
}

export type GuideStep = {
  id: number
  title: string
  slug: string
  description: string
  body: any[]
  order: number
  icon?: string
}

export type Article = {
  id: number
  title: string
  slug: string
  summary: string
  body: any[]
  category: 'stigma' | 'expectation' | 'emotional-support' | 'practical'
}

export type HealthResource = {
  id: number
  title: string
  type: 'app' | 'book' | 'self-help-group' | 'emergency' | 'community'
  description: string
  url?: string
}

export const cms = {
  guideSteps: () =>
    get<GuideStep[]>('/guide-steps?sort=order:asc'),

  guideStep: (slug: string) =>
    get<GuideStep>(`/guide-steps?filters[slug][$eq]=${slug}`),

  articlesByStep: (stepSlug: string) =>
    get<Article[]>(`/articles?filters[guideStep][slug][$eq]=${stepSlug}`),

  resourcesByStep: (stepSlug: string) =>
    get<HealthResource[]>(`/health-resources?filters[guideStep][slug][$eq]=${stepSlug}`),
}
