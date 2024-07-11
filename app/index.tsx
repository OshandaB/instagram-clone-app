import React from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import LoadingScreen from '@/screens/loading-screen';
import LoginScreen from '@/screens/login-screen';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
        {/* <LoadingScreen/> */}
        <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3897f0',
  },
});
