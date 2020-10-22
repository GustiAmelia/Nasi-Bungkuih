import React from 'react';

import {useSelector} from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


import Menu from '../components/Menu';
import Cart from '../components/Cart';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();


const MainTabScreens = ()=>{

  const carts = useSelector((state)=>state.menu.carts);
  console.log(carts.length);

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
              <MaterialIcon name="storefront" color={color} size={size} />
            ),
          }}
        />
        {carts.length === 0 ? (
           <Tab.Screen
           name="Cart"
           component={Cart}
           options={{
             tabBarLabel: 'Cart',
             tabBarIcon: ({ color, size }) => (
               <Icon name="cart" color={color} size={size} />
             ),
           }}
         />
        )
        :
        (
          <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart" color={color} size={size} />
            ),
            tabBarBadge:carts.length,
          }}
        />
        )}
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
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

const ProfileStackScreen = ()=>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen options={{headerShown:false}} name="Profile" component={Profile}/>
    <ProfileStack.Screen options={{title:'Edit Profile'}} name="EditProfile" component={EditProfile}/>
  </ProfileStack.Navigator>
);
