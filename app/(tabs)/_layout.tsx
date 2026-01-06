import useTheme from '@/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
const TabsLayout = () => {
    const {colors} = useTheme();
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textMuted,
      tabBarStyle: { 
        backgroundColor: colors.surface,
        borderTopColor: colors.border,
        borderTopWidth: 1,
        elevation: 5,
        height: 60,
        paddingBottom: 5,
        paddingTop: 5,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
        headerShown: false,
    }}>
    
      <Tabs.Screen name="index" options={{ title: 'Todos', tabBarIcon: ({color, size}) => <Ionicons name="flash-outline" size={size} color={color}/> }} /> 
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({color, size}) => <Ionicons name="settings" size={size} color={color}/> }} /> 
    </Tabs>
  )
}


export default TabsLayout