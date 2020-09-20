import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';

import {View, ActivityIndicator, StyleSheet,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RootStackScreen from './src/screens/RootStackScreen';
import MainTabScreens from './src/screens/MainTabScreens';

// import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();

const App = () => {

  const login = useSelector((state)=>state.auth.isLoggedIn);

  const [isLoading, setIsLoading ] = React.useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  }, []);

  if (isLoading){
    return (
      <View style={Styles.loading}>
        <Image source={require('./assets/logo.png')}/>
        {/* <ActivityIndicator size="large" color="pink" /> */}
      </View>
    );
  }

  return (
    <NavigationContainer>
      {login === true ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown:false}} name ="Home" component={MainTabScreens}/>
        </Stack.Navigator>
      )
      :
      <RootStackScreen/>}
    </NavigationContainer>
  );
};

const Styles = StyleSheet.create({
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default App;
