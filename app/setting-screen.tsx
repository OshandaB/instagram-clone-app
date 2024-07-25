// SettingsScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const settingsOptions = [
  { id: '1', title: 'Edit Profile', icon: 'person-outline' },
  { id: '2', title: 'Notifications', icon: 'notifications-outline' },
  { id: '3', title: 'Privacy', icon: 'lock-closed-outline' },
  { id: '4', title: 'Security', icon: 'shield-checkmark-outline' },
  { id: '5', title: 'Help', icon: 'help-circle-outline' },
  { id: '6', title: 'About', icon: 'information-circle-outline' },
];

const SettingsScreen = () => {
  const renderItem = ({ item }: { item: { title: string; icon: string } }) => (
    <TouchableOpacity style={styles.option}>
      <Icon name={item.icon} size={24} color="#1d7b71" />
      <Text style={styles.optionText}>{item.title}</Text>
      <Icon name="chevron-forward-outline" size={24} color="#999" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <FlatList
        data={settingsOptions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1d7b71',
    marginBottom: 16,
  },
  list: {
    marginTop: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 12,
  },
});

export default SettingsScreen;
