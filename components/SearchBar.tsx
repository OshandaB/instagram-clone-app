
import React from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="black" style={styles.searchIcon} />
        <TextInput 
          placeholder='Search'
          placeholderTextColor="black"
          style={styles.searchInput}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        height:50
      },
      searchIcon: {
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        color: 'white',
        fontSize: 18,
      },
});

