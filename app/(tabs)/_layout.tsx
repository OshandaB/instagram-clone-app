import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Make sure you've installed this package
import Icon from 'react-native-vector-icons/Ionicons';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'black', // Active tab color
        tabBarInactiveTintColor: 'black', // Inactive tab color
        tabBarStyle: {
          backgroundColor: '#fff', // Tab bar background color
          borderTopWidth: 1, // Top border width
          borderColor: '#e5e5e5', // Top border color
          paddingVertical: 20, // Vertical padding
          paddingBottom:20
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:any;

          switch (route.name) {
            case 'home-screen':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'reels-screen':
              iconName = focused ? 'play-circle' : 'play-circle-outline';
              break;
            case 'search-screen':
              iconName = focused ? 'search' : 'search-outline';
              break;
              case '(drawer)':
                iconName = focused ? 'person-circle' : 'person-circle-outline';
                break;
            // Add more cases for other screens
            default:
              iconName = 'ellipse-outline';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home-screen" options={{ tabBarLabel: '' }} />
      <Tabs.Screen name="search-screen" options={{ tabBarLabel: '' }} />
      <Tabs.Screen name="reels-screen" options={{ tabBarLabel: '' }} />
      <Tabs.Screen name="(drawer)" options={{ tabBarLabel: '' }} />
     
    </Tabs>
    
    
  );
}
