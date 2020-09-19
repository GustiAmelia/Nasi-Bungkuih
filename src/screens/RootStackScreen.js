import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './LandingScreen';
import Login from '../components/Login';
import Register from '../components/Register';

const RootStack = createStackNavigator();

const RootStackScreen = ()=>(
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Welcome" component={LandingScreen}/>
    <RootStack.Screen name="Log In" component={Login}/>
    <RootStack.Screen name="Sign Up" component={Register}/>
  </RootStack.Navigator>
);

export default RootStackScreen;
