'use strict'

const GUIDE_STEPS = [
  {
    title: 'Entscheidung',
    slug: 'entscheidung',
    description: 'Verstehe, wann ein stationärer Aufenthalt sinnvoll ist – und wie du diesen Schritt für dich treffen kannst.',
    order: 1,
    body: [
      { type: 'paragraph', children: [{ type: 'text', text: 'Der Schritt, eine psychiatrische oder psychosomatische Klinik in Betracht zu ziehen, ist für viele Menschen einer der schwersten überhaupt. Gleichzeitig kann er der Beginn einer echten Veränderung sein.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Eine stationäre Behandlung kann sinnvoll sein, wenn ambulante Therapie nicht ausreicht, wenn du dich in einer akuten Krise befindest oder wenn du einen geschützten Rahmen brauchst, um dich intensiv um deine psychische Gesundheit zu kümmern.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Du musst diese Entscheidung nicht alleine treffen. Sprich mit deiner Hausarztpraxis, deiner Therapeutin oder einer psychiatrischen Notaufnahme – sie können dir helfen, die richtige Einschätzung zu finden.' }] },
    ],
    articles: [
      {
        title: 'Stigma überwinden',
        slug: 'stigma-ueberwinden',
        summary: 'Warum Hilfe zu suchen keine Schwäche ist – und wie du mit den Reaktionen deines Umfelds umgehen kannst.',
        category: 'stigma',
        body: [
          { type: 'paragraph', children: [{ type: 'text', text: 'Viele Menschen zögern, weil sie befürchten, was andere denken könnten. Psychische Erkrankungen sind jedoch genauso real wie körperliche – und Behandlung ist keine Schwäche, sondern Stärke.' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Du musst deinem Umfeld nicht alles erklären. Es reicht, zu wissen, dass du das Richtige für dich tust. Mit der Zeit werden viele Menschen verstehen, dass du Hilfe gesucht und damit Verantwortung übernommen hast.' }] },
        ],
      },
      {
        title: 'Psychiatrie oder Psychosomatik?',
        slug: 'psychiatrie-oder-psychosomatik',
        summary: 'Der Unterschied zwischen beiden Kliniktypen – und welche Behandlungsform besser zu dir passen könnte.',
        category: 'practical',
        body: [
          { type: 'paragraph', children: [{ type: 'text', text: 'Psychiatrische Kliniken behandeln schwere psychische Erkrankungen wie Psychosen, schwere Depressionen oder Suchterkrankungen. Psychosomatische Kliniken fokussieren auf die Wechselwirkung von Körper und Psyche, z. B. bei Burnout, Angststörungen oder Essstörungen.' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Welcher Bereich besser passt, hängt von deiner Diagnose und deinen persönlichen Bedürfnissen ab. Dein Arzt oder deine Therapeutin kann dir dabei helfen, die richtige Wahl zu treffen.' }] },
        ],
      },
    ],
    resources: [
      {
        title: 'Telefonseelsorge',
        type: 'emergency',
        description: 'Kostenlose, anonyme Krisenhotline – rund um die Uhr erreichbar.',
        url: 'https://www.telefonseelsorge.de',
      },
      {
        title: 'Deutsche Depressionshilfe',
        type: 'community',
        description: 'Informationen, Selbsttest und Beratungsangebote rund um Depression.',
        url: 'https://www.deutsche-depressionshilfe.de',
      },
    ],
  },
  {
    title: 'Suche & Auswahl',
    slug: 'suche-auswahl',
    description: 'Finde die Klinik, die zu dir passt – mit den richtigen Kriterien und hilfreichen Werkzeugen.',
    order: 2,
    body: [
      { type: 'paragraph', children: [{ type: 'text', text: 'Nicht jede Klinik ist für jede Person geeignet. Neben dem Behandlungsschwerpunkt spielen auch Lage, Wartezeit, Behandlungskonzept und das Bauchgefühl beim ersten Kontakt eine wichtige Rolle.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Nutze den Klinik-Finder in cluide, um Einrichtungen in deiner Nähe zu finden. Notiere dir 2–3 Kliniken, die infrage kommen, und nimm telefonisch Kontakt auf, bevor du eine Entscheidung triffst.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Wichtige Fragen an die Klinik: Welche Therapiemethoden werden angewendet? Gibt es Einzel- und Gruppentherapie? Wie lange ist die durchschnittliche Wartezeit? Gibt es Spezialangebote für dein Krankheitsbild?' }] },
    ],
    articles: [
      {
        title: 'Was dich in der Klinik erwartet',
        slug: 'was-dich-erwartet',
        summary: 'Ein ehrlicher Blick auf den Alltag in einer psychiatrischen oder psychosomatischen Klinik.',
        category: 'expectation',
        body: [
          { type: 'paragraph', children: [{ type: 'text', text: 'Der Tagesablauf in einer Klinik ist strukturiert: feste Essenszeiten, Einzel- und Gruppentherapie, kreative Angebote, Ruhezeiten. Diese Struktur ist gewollt – sie gibt Halt in einer Zeit, in der alles andere vielleicht chaotisch erscheint.' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Du wirst nicht allein sein. Es gibt Mitpatienten, die ähnliches durchmachen, und ein Team aus Ärzten, Therapeuten und Pflegepersonal, das rund um die Uhr für dich da ist.' }] },
        ],
      },
      {
        title: 'Kriterien für die richtige Klinik',
        slug: 'kriterien-klinikwahl',
        summary: 'Worauf du bei der Auswahl achten solltest – von Behandlungskonzept bis Lage.',
        category: 'practical',
        body: [
          { type: 'paragraph', children: [{ type: 'text', text: 'Behandlungsschwerpunkt, Therapiemethoden, Stationsatmosphäre, Besuchsregeln, Nähe zu Zuhause – all das kann die Behandlung beeinflussen. Eine Vorabbewerbung bei mehreren Kliniken erhöht die Chancen auf einen zeitnahen Platz.' }] },
        ],
      },
    ],
    resources: [
      {
        title: 'Klinik-Finder (klinikatlas.de)',
        type: 'app',
        description: 'Offizielle Kliniksuche des Bundesministeriums für Gesundheit.',
        url: 'https://klinikatlas.de',
      },
      {
        title: 'Weisse Liste',
        type: 'community',
        description: 'Unabhängiges Klinikbewertungsportal mit Patientenerfahrungen.',
        url: 'https://www.weisse-liste.de',
      },
    ],
  },
  {
    title: 'Anmeldung',
    slug: 'anmeldung',
    description: 'Schritt für Schritt durch den Aufnahmeprozess – von der Einweisung bis zum ersten Tag.',
    order: 3,
    body: [
      { type: 'paragraph', children: [{ type: 'text', text: 'Die Aufnahme in eine psychiatrische oder psychosomatische Klinik läuft in den meisten Fällen über eine ärztliche Einweisung. Diese bekommst du von deiner Hausarztpraxis oder einer psychiatrischen Ambulanz.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Nach dem ersten Kontakt mit der Klinik folgt meist ein Vorgespräch – persönlich oder telefonisch. Dabei wird geklärt, ob die Klinik für dich geeignet ist und wie der Ablauf der Aufnahme aussieht.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Bereite dich auf die Aufnahme vor: Bring deine Krankenversicherungskarte, einen Lichtbildausweis, aktuelle Befundberichte und eine Liste deiner Medikamente mit. Je besser du vorbereitet bist, desto reibungsloser läuft die Aufnahme.' }] },
    ],
    articles: [
      {
        title: 'Die Einweisung: So funktioniert es',
        slug: 'einweisung-so-funktioniert-es',
        summary: 'Was eine ärztliche Einweisung ist, wie du sie bekommst und was sie bedeutet.',
        category: 'practical',
        body: [
          { type: 'paragraph', children: [{ type: 'text', text: 'Eine Einweisung ist keine Zwangsmaßnahme – sie ist ein medizinisches Dokument, das bestätigt, dass eine stationäre Behandlung medizinisch notwendig ist. Du entscheidest weiterhin selbst, ob und wann du die Klinik aufnimmst.' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Deine Hausarztpraxis oder eine psychiatrische Institutsambulanz kann dir eine Einweisung ausstellen. Erkläre offen, wie es dir geht – je genauer das Bild, desto besser kann die richtige Klinik empfohlen werden.' }] },
        ],
      },
      {
        title: 'Checkliste: Das musst du mitbringen',
        slug: 'checkliste-aufnahme',
        summary: 'Alle wichtigen Dokumente und Dinge, die du zur Aufnahme benötigst.',
        category: 'practical',
        body: [
          { type: 'paragraph', children: [{ type: 'text', text: 'Krankenversicherungskarte und Ausweis, ärztliche Einweisung, aktueller Medikamentenplan, frühere Befundberichte und Entlassbriefe, persönliche Gegenstände für mehrere Wochen, bequeme Kleidung.' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Lass Wertsachen wenn möglich zuhause. Viele Kliniken haben begrenzte Aufbewahrungsmöglichkeiten. Ein Notizbuch kann hilfreich sein, um Gedanken und Fragen festzuhalten.' }] },
        ],
      },
    ],
    resources: [
      {
        title: 'Moodpath',
        type: 'app',
        description: 'App zur Erfassung deiner Stimmung – hilft dir, Muster zu erkennen und bei Gesprächen mit Ärzten.',
        url: 'https://mymoodpath.com',
      },
    ],
  },
  {
    title: 'Wartezeit',
    slug: 'wartezeit',
    description: 'Ressourcen und Strategien, um die Zeit bis zum Klinikaufenthalt gut zu überbrücken.',
    order: 4,
    body: [
      { type: 'paragraph', children: [{ type: 'text', text: 'Wartezeiten auf einen Klinikplatz können mehrere Wochen oder Monate betragen. Das ist eine schwierige Zeit – besonders, wenn du dir den Aufenthalt bereits hart erkämpft hast.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Bleib in Kontakt mit deiner ambulanten Betreuung. Wenn sich dein Zustand verschlechtert, wende dich an deine Therapeutin, deine Hausarztpraxis oder eine psychiatrische Notaufnahme. Ein Klinikplatz kann in Akutsituationen auch kurzfristig möglich sein.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Nutze die Wartezeit so gut es geht: Besorge deine Dokumente, informiere dich über die Klinik, und sprich mit Menschen, denen du vertraust. Du musst das nicht alleine tragen.' }] },
    ],
    articles: [
      {
        title: 'Selbstfürsorge in der Wartezeit',
        slug: 'selbstfuersorge-wartezeit',
        summary: 'Konkrete Strategien, um die Wartezeit zu überbrücken – ohne dich zu überfordern.',
        category: 'emotional-support',
        body: [
          { type: 'paragraph', children: [{ type: 'text', text: 'Kleine Routinen helfen, den Tag zu strukturieren: Aufstehen zur gleichen Zeit, kurze Spaziergänge, gesunde Mahlzeiten. Das klingt trivial, macht aber einen echten Unterschied.' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Halte die Kontakte zu Menschen, denen du vertraust. Du musst nicht alles erklären – aber nicht allein zu sein, ist wichtig. Wenn das schwierig ist, gibt es auch telefonische und Online-Beratungsangebote.' }] },
        ],
      },
      {
        title: 'Wenn es akut wird: Wo du Hilfe findest',
        slug: 'akute-hilfe',
        summary: 'Anlaufstellen und Krisenangebote, wenn du sofort Unterstützung brauchst.',
        category: 'emotional-support',
        body: [
          { type: 'paragraph', children: [{ type: 'text', text: 'In einer akuten Krise: Ruf die 112 an oder geh in die nächste psychiatrische Notaufnahme. Die Telefonseelsorge (0800 111 0 111 oder 0800 111 0 222) ist kostenlos und rund um die Uhr erreichbar.' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Du kannst auch ambulante psychiatrische Krisenangebote nutzen – viele Städte haben psychiatrische Institutsambulanzen, die auch ohne Termin aufsuchen kann.' }] },
        ],
      },
    ],
    resources: [
      {
        title: 'Telefonseelsorge (0800 111 0 111)',
        type: 'emergency',
        description: 'Kostenlos, anonym, 24/7 erreichbar. Kein Thema ist zu klein oder zu groß.',
        url: 'https://www.telefonseelsorge.de',
      },
      {
        title: 'NAKOS – Selbsthilfegruppen',
        type: 'self-help-group',
        description: 'Nationale Kontaktstelle: Finde Selbsthilfegruppen in deiner Nähe.',
        url: 'https://www.nakos.de',
      },
      {
        title: 'Healios',
        type: 'app',
        description: 'Digitale therapeutische Unterstützung für die Überbrückungszeit.',
        url: 'https://www.healios.de',
      },
    ],
  },
]

module.exports = {
  register() {},

  async bootstrap({ strapi }) {
    const existing = await strapi.documents('api::guide-step.guide-step').findMany({})
    if (existing.length > 0) return

    strapi.log.info('[seed] Seeding guide steps...')

    for (const stepData of GUIDE_STEPS) {
      const { articles, resources, ...stepFields } = stepData

      const step = await strapi.documents('api::guide-step.guide-step').create({
        data: { ...stepFields, publishedAt: new Date().toISOString() },
      })

      for (const articleData of articles) {
        await strapi.documents('api::article.article').create({
          data: {
            ...articleData,
            guideStep: step.documentId,
            publishedAt: new Date().toISOString(),
          },
        })
      }

      for (const resourceData of resources) {
        await strapi.documents('api::health-resource.health-resource').create({
          data: {
            ...resourceData,
            guideStep: step.documentId,
            publishedAt: new Date().toISOString(),
          },
        })
      }

      strapi.log.info(`[seed] Created step: ${stepFields.title}`)
    }

    strapi.log.info('[seed] Done.')
  },
}
