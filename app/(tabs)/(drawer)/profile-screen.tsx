import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { router } from 'expo-router';




const ProfileScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.topBar}>
  
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>oshanda_banuka_8</Text>
            <Feather name="chevron-down" style={styles.chevronIcon} />
          </View>
          <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} >
            <Feather name="menu" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Image source={require('../../../assets/images/image.png')} style={styles.profileImage} />
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>7,582</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1,638</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.name}>Oshanda Bhanuka</Text>
          <Text style={styles.bio}>Entrepreneur</Text>
          <Text style={styles.bio}>Srilanka🇱🇰</Text>
          <Text style={styles.bio}>Undergraduate software engineer💻</Text>
          <Text style={styles.bio}>Making it happen💫✨</Text>
        </View>

        <View style={styles.dashboard}>
          <Text style={styles.dashboardText}>Professional dashboard</Text>
          <Text style={styles.dashboardSubtext}>14 accounts reached in the last 30 days.</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Share profile</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 10 }}>
          <View style={styles.highlightsContainer}>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightText}>K</Text>
              <Text style={styles.highlightLabel}>Highlights</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightText}>E</Text>
              <Text style={styles.highlightLabel}>Highlights</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightText}>V</Text>
              <Text style={styles.highlightLabel}>Highlights</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightText}>I</Text>
              <Text style={styles.highlightLabel}>Highlights</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightText}>V</Text>
              <Text style={styles.highlightLabel}>Highlights</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightText}>I</Text>
              <Text style={styles.highlightLabel}>Highlights</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  chevronIcon: {
    fontSize: 20,
    color: 'black',
    marginLeft: 5,
  },
  menuIcon: {
    fontSize: 25,
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  userInfo: {
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  bio: {
    fontSize: 14,
    color: 'black',
    marginTop: 2,
  },
  dashboard: {
    backgroundColor: '#EEEDEB',
    padding: 15,
    margin: 20,
    borderRadius: 5,
  },
  dashboardText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  dashboardSubtext: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#EEEDEB',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
  },
  highlightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 25,
  },
  highlightItem: {
    alignItems: 'center',
    paddingRight: 10,
  },
  highlightText: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  highlightLabel: {
    fontStyle: 'italic',
    color: 'black',
    marginTop: 5,
    fontSize: 12,
  },
});

export default ProfileScreen;
