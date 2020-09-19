import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, Dimensions, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import SafeAreaView from 'react-native-safe-area-view';

const LandingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar style ={Styles.statusBar} barStyle="light-content"/>
      <View style={Styles.header}>
        <Animatable.Image
        animation="bounceIn"
        duraton="3000"
        style={Styles.logo}
        resizeMode="stretch"
        source={require('../../assets/logo.png')}/>
      </View>
      <Animatable.View
      animation="fadeInUpBig"
      style={Styles.footer}>
        <Text style={Styles.title}>Happy Meals</Text>
        <Text style={Styles.text}>Sign in with account</Text>
        <TouchableOpacity style={Styles.wrapperButton} onPress={()=>navigation.navigate('Log In')}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>Get Started</Text>
            <MaterialIcons name="navigate-next" color="white" size={20}/>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};


const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f75252',
  },
  statusBar:{
    backgroundColor:'#f75252',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignContent:'center',
  },
  logo: {
    alignSelf:'center',
  },
  footer: {
    backgroundColor:'white',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title:{
    fontSize:35,
    fontWeight:'bold',
    color:'#f75252',
  },
  text:{
    color:'#f75252',
    margin:10,
  },
  wrapperButton:{
    marginTop:15,
    alignItems:'flex-end',
  },
  button:{
    width: '50%',
    height: 40,
    margin:10,
    justifyContent: 'center',
    backgroundColor:'#f75252',
    alignItems:'center',
    borderRadius:25,
    flexDirection:'row',
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:16,
  },
});

export default LandingScreen;
