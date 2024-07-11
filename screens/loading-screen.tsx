import React from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand.png')} 
        style={styles.logo} 
      />
      <Text style={styles.loadingText}>Loading Instagram</Text>
      <ActivityIndicator size="large" color="#3897f0" />
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
