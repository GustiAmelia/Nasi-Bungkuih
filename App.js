import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/components/Login';
import Register from './src/components/Register';
// import MainTabScreens from './src/shared/MainTabScreens';
import LandingScreen from './src/components/LandingScreen';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name ="Welcome" component={LandingScreen}/>
        <Drawer.Screen name ="Log In" component={Login}/>
        <Drawer.Screen name ="Sign Up" component={Register}/>
        {/* <Drawer.Screen name="Log In" component={Login} />
        <Drawer.Screen name="Sign Up" component={Register}/> */}
        {/* <Drawer.Screen name ="Home" component={MainTabScreens}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Log In" component={Login} />
    //     <Stack.Screen name="Sign Up" component={Register} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
