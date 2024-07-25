import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import LoadingScreen from '@/app/loading-screen';
import LoginScreen from '@/app/login-screen';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
export default function Index() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000); 

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <View style={styles.container}>
      <LoginScreen/>
      {/* {isLoading ? <LoadingScreen /> : <LoginScreen />} */}
      {/* <HomeScreen/> */}
      {/* <SearchScreen/> */}
      {/* <ReelsScreen/> */}
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
});
