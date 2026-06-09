import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator, ScrollView } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import AmbientBackground from '@/components/AmbientBackground'
import { supabase } from '@/lib/supabase'
import { colors, spacing, radius, font } from '@/lib/tokens'

export default function SignUp() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  async function handleSignUp() {
    if (!name || !email || !password) return
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    })

    if (error) {
      setError(error.message)
    } else {
      setDone(true)
    }
    setLoading(false)
  }

  if (done) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', gap: spacing.lg, paddingHorizontal: spacing.xl }]}>
        <AmbientBackground />
        <Text style={styles.wordmark}>CLUIDE</Text>
        <Text style={[styles.subtitle, { textAlign: 'center' }]}>
          Bestätige deine E-Mail-Adresse, um dein Konto zu aktivieren.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/(auth)/sign-in')}>
          <Text style={styles.buttonText}>Zur Anmeldung</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="dark" />
      <AmbientBackground />

      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
        <Text style={styles.wordmark}>CLUIDE</Text>
        <Text style={styles.subtitle}>Konto erstellen</Text>

        <View style={styles.form}>
          {error && <Text style={styles.error}>{error}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Vorname"
            placeholderTextColor={colors.muted}
            value={name}
            onChangeText={setName}
            autoComplete="given-name"
          />
          <TextInput
            style={styles.input}
            placeholder="E-Mail"
            placeholderTextColor={colors.muted}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Passwort (mind. 8 Zeichen)"
            placeholderTextColor={colors.muted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="new-password"
          />

          <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
            {loading
              ? <ActivityIndicator color={colors.white} />
              : <Text style={styles.buttonText}>Registrieren</Text>
            }
          </TouchableOpacity>
        </View>

        <Link href="/(auth)/sign-in" asChild>
          <TouchableOpacity style={styles.footerLink}>
            <Text style={styles.footerText}>Bereits registriert? <Text style={styles.footerTextBold}>Anmelden</Text></Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  inner: { flexGrow: 1, paddingHorizontal: spacing.xl, justifyContent: 'center', gap: spacing.xl, paddingVertical: spacing.xxl },
  wordmark: { fontFamily: font.light, fontSize: 56, letterSpacing: -2, color: colors.black },
  subtitle: { fontFamily: font.regular, fontSize: 15, color: colors.muted, marginTop: -spacing.lg },
  form: { gap: spacing.md },
  input: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, paddingHorizontal: spacing.md, paddingVertical: spacing.md, fontFamily: font.regular, fontSize: 15, color: colors.black },
  button: { backgroundColor: colors.black, borderRadius: radius.md, paddingVertical: spacing.md, alignItems: 'center', marginTop: spacing.xs },
  buttonText: { fontFamily: font.semiBold, fontSize: 15, color: colors.white, letterSpacing: 0.3 },
  error: { fontFamily: font.regular, fontSize: 13, color: colors.error, textAlign: 'center' },
  footerLink: { alignItems: 'center', paddingVertical: spacing.md },
  footerText: { fontFamily: font.regular, fontSize: 14, color: colors.muted },
  footerTextBold: { fontFamily: font.semiBold, color: colors.black },
})
