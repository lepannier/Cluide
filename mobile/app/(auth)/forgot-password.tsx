import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import AmbientBackground from '@/components/AmbientBackground'
import { supabase } from '@/lib/supabase'
import { colors, spacing, radius, font } from '@/lib/tokens'

export default function ForgotPassword() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleReset() {
    if (!email) return
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) setError(error.message)
    else setDone(true)
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="dark" />
      <AmbientBackground />

      <View style={styles.inner}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <Text style={styles.backText}>← Zurück</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Passwort{'\n'}zurücksetzen</Text>

        {done ? (
          <Text style={styles.subtitle}>
            Wir haben dir einen Link geschickt. Bitte prüfe dein Postfach.
          </Text>
        ) : (
          <View style={styles.form}>
            {error && <Text style={styles.error}>{error}</Text>}
            <Text style={styles.subtitle}>
              Gib deine E-Mail-Adresse ein und wir schicken dir einen Reset-Link.
            </Text>
            <TextInput
              style={styles.input}
              placeholder="E-Mail"
              placeholderTextColor={colors.muted}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button} onPress={handleReset} disabled={loading}>
              {loading
                ? <ActivityIndicator color={colors.white} />
                : <Text style={styles.buttonText}>Link senden</Text>
              }
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  inner: { flex: 1, paddingHorizontal: spacing.xl, justifyContent: 'center', gap: spacing.lg },
  back: { position: 'absolute', top: spacing.xxl, left: spacing.xl },
  backText: { fontFamily: font.regular, fontSize: 14, color: colors.muted },
  title: { fontFamily: font.light, fontSize: 42, letterSpacing: -1.5, color: colors.black, lineHeight: 46 },
  subtitle: { fontFamily: font.regular, fontSize: 15, color: colors.muted, lineHeight: 22 },
  form: { gap: spacing.md },
  input: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, paddingHorizontal: spacing.md, paddingVertical: spacing.md, fontFamily: font.regular, fontSize: 15, color: colors.black },
  button: { backgroundColor: colors.black, borderRadius: radius.md, paddingVertical: spacing.md, alignItems: 'center' },
  buttonText: { fontFamily: font.semiBold, fontSize: 15, color: colors.white, letterSpacing: 0.3 },
  error: { fontFamily: font.regular, fontSize: 13, color: colors.error },
})
