import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from './orgnization/tabBarIcon';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/Profile_Screen';
import SettingsScreen from '../../screens/Settings_screen';

const TabBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: props => TabBarIcon({...props, name: 'home'}),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: props => TabBarIcon({...props, name: 'person'}),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: props => TabBarIcon({...props, name: 'settings'}),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
