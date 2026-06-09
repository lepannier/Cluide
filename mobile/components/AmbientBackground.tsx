import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '@/lib/tokens'

export default function AmbientBackground() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient
        colors={[colors.blobGreen, 'transparent']}
        style={styles.blobGreen}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      />
      <LinearGradient
        colors={[colors.blobPurple, 'transparent']}
        style={styles.blobPurple}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0, y: 0 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  blobGreen: {
    position: 'absolute',
    top: -120,
    right: -120,
    width: 380,
    height: 380,
    borderRadius: 190,
  },
  blobPurple: {
    position: 'absolute',
    bottom: -120,
    left: -120,
    width: 360,
    height: 360,
    borderRadius: 180,
  },
})
