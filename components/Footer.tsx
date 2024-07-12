import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="home-sharp" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="search-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="play-circle-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="cart-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
      <Ionicons name="person-circle-outline" size={33} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
  },
  iconContainer: {
    alignItems: 'center',
  },
});
