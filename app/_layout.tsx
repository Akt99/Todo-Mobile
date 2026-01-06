import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import React from 'react'

import { useColorScheme } from '@/hooks/use-color-scheme'
import { ThemeProvider } from '@/hooks/use-theme-color'
import { ConvexProvider, ConvexReactClient } from 'convex/react'

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {unsavedChangesWarning: false,});

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ConvexProvider client={convex}>
    <NavThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </NavThemeProvider>
    </ConvexProvider>
  )
}
