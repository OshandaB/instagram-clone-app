import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false,
      tabBarActiveTintColor: '#1d7b71',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#e5e5e5',
        paddingVertical: 10,
      },
    }}
      >
      <Tabs.Screen name="home-screen"   options={{ tabBarLabel: 'Home' }} />
      <Tabs.Screen name="reel-screen"   options={{ tabBarLabel: 'Reels' }} />
      <Tabs.Screen name="search-screen"    options={{ tabBarLabel: 'Search' }}/>
    </Tabs>
  );
}
