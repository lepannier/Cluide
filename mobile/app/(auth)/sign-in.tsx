import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import AmbientBackground from '@/components/AmbientBackground'
import { supabase } from '@/lib/supabase'
import { colors, spacing, radius, font } from '@/lib/tokens'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSignIn() {
    if (!email || !password) return
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="dark" />
      <AmbientBackground />

      <View style={styles.inner}>
        {/* Wordmark */}
        <Text style={styles.wordmark}>CLUIDE</Text>
        <Text style={styles.subtitle}>Dein digitaler Helfer auf dem Weg zur Klinik.</Text>

        {/* Form */}
        <View style={styles.form}>
          {error && <Text style={styles.error}>{error}</Text>}

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
            placeholder="Passwort"
            placeholderTextColor={colors.muted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="password"
          />

          <TouchableOpacity style={styles.button} onPress={handleSignIn} disabled={loading}>
            {loading
              ? <ActivityIndicator color={colors.white} />
              : <Text style={styles.buttonText}>Anmelden</Text>
            }
          </TouchableOpacity>

          <Link href="/(auth)/forgot-password" asChild>
            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>Passwort vergessen?</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Footer */}
        <Link href="/(auth)/sign-up" asChild>
          <TouchableOpacity style={styles.footerLink}>
            <Text style={styles.footerText}>Noch kein Konto? <Text style={styles.footerTextBold}>Registrieren</Text></Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  inner: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    justifyContent: 'center',
    gap: spacing.xl,
  },
  wordmark: {
    fontFamily: font.light,
    fontSize: 56,
    letterSpacing: -2,
    color: colors.black,
  },
  subtitle: {
    fontFamily: font.regular,
    fontSize: 15,
    color: colors.muted,
    lineHeight: 22,
    marginTop: -spacing.lg,
  },
  form: {
    gap: spacing.md,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontFamily: font.regular,
    fontSize: 15,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.black,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  buttonText: {
    fontFamily: font.semiBold,
    fontSize: 15,
    color: colors.white,
    letterSpacing: 0.3,
  },
  link: {
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  linkText: {
    fontFamily: font.regular,
    fontSize: 13,
    color: colors.muted,
  },
  error: {
    fontFamily: font.regular,
    fontSize: 13,
    color: colors.error,
    textAlign: 'center',
  },
  footerLink: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  footerText: {
    fontFamily: font.regular,
    fontSize: 14,
    color: colors.muted,
  },
  footerTextBold: {
    fontFamily: font.semiBold,
    color: colors.black,
  },
})
