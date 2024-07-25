import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import your screen components
import SettingScreen from '@/app/setting-screen';
import ProfileScreen from './profile-screen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props:any) {
  return (
    <SafeAreaView style={styles.drawerContainer}>
      <View style={styles.headerContainer}>
        <Ionicons name="person-circle" size={80} color="black" />
        <Text style={styles.headerText}>Username</Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
}

export default function DrawerLayout() {
  return (
 
      <Drawer.Navigator
        initialRouteName="Profile"
        screenOptions={{
          drawerIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />,
          drawerPosition: 'right',
          headerShown: false,
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'gray',
          drawerStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderColor: '#e5e5e5',
            paddingVertical: 20,
          },
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 16,
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
          }}
          
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Notifications" 
          component={ProfileScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Privacy" 
          component={SettingScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="lock-closed" size={24} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Security" 
          component={ProfileScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="shield-checkmark" size={24} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Help" 
          component={SettingScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="help-circle" size={24} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="About" 
          component={SettingScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} />,
          }}
        />
      </Drawer.Navigator>

  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d7b71',
  },
});
