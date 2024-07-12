import React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

export default function Header() {
  const [loaded, error] = useFonts({
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
  })
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true}/>
      <View style={styles.header}>
        <Text style={styles.title}>Instagram</Text>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome5 name="heart" size={24} color="black" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome5 name="paper-plane" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    
  },
  header: {
    width : '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical:10,
   
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
   
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
  
  },
  title: {
    fontFamily: 'Lobster-Regular',
    fontSize: 28,
    fontWeight: '500',
    color: 'black', 
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  notificationDot: {
    position: 'absolute',
    top: -3,
    right: -3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});
