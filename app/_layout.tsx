import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Footer from '@/components/Footer';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
