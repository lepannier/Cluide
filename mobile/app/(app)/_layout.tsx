import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { colors, font } from '@/lib/tokens'

type IoniconsName = React.ComponentProps<typeof Ionicons>['name']

function TabIcon({ name, color, size }: { name: IoniconsName; color: string; size: number }) {
  return <Ionicons name={name} size={size} color={color} />
}

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingTop: 4,
        },
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: {
          fontFamily: font.medium,
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="guide/index"
        options={{
          title: 'Guide',
          tabBarIcon: ({ color, size }) => <TabIcon name="compass-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="clinics/index"
        options={{
          title: 'Kliniken',
          tabBarIcon: ({ color, size }) => <TabIcon name="search-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="documents/index"
        options={{
          title: 'Dokumente',
          tabBarIcon: ({ color, size }) => <TabIcon name="document-text-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <TabIcon name="person-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  )
}
