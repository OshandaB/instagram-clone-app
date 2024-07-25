import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
export default function RootLayout() {
  return (

      <View style={styles.container}>
        <Stack screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name='/(tabs)/drawer'/> */}
        </Stack>
      
      </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
