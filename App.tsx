import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';
import HomeDetailScreen from './screens/homeDetailScreen';
import ProfileDetailScreen from './screens/profileDetailScreen';
import LoginScreen from './screens/login'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => (
  <Tab.Navigator
    screenOptions={{
      // header: () => null,
    }}>
    <Tab.Screen name="HomeTab" component={HomeStack} />
    <Tab.Screen name="ProfileTab" component={ProfileStack} />
  </Tab.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
    <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
    <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;