import React from 'react';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


import Menu from '../components/Menu';
import Cart from '../components/Cart';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();

const MainTabScreens = ()=>{
  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#f75252',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Menu}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name={'store'} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Order"
          component={Cart}
          options={{
            tabBarLabel: 'My Order',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcon name="list-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default MainTabScreens;
