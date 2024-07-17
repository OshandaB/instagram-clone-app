import React from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/logo.png')} 
        style={styles.logo} 
      />
      {/* <Text style={styles.loadingText}>from Meta</Text> */}
      <Image 
        source={require('../assets/images/metalogo.png')} 
        style={styles.fromMetaLogo} 
      />
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
  fromMetaLogo: {
    
    position:'absolute',
    bottom:0,
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  loadingText: {
    paddingBottom:20,
    position:'absolute',
    bottom:0,
    fontSize: 16,
    color: '#aaa',
  },
});
