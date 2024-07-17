import React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableOpacity,ScrollView, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // FontAwesome5 is often used for Instagram icons
import Header from '@/components/Header';
// import { ScrollView } from 'react-native-gesture-handler';
import Story from '@/components/Story';
import Post from '@/components/Post';
import Footer from '@/components/Footer';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
<Header/>

<ScrollView

  style={{marginBottom:0}}
>
    <Story/>
     <Post/>
</ScrollView>


    </SafeAreaView>

  );
}

