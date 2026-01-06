import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function About() {
  const { colors } = useTheme()

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: colors.text }]}>
        This is about screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: '#365090ff',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
})
