import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LandingScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text>Heade</Text>
      </View>
      <View style={Styles.footer}>
        <Text style={Styles.title}>Happy Meals</Text>
        <Text style={Styles.text}>Sign in with account</Text>
        <TouchableOpacity style={Styles.wrapperButton} onPress={()=>navigation.navigate('Log In')}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>Get Started</Text>
            <MaterialIcons name="navigate-next" color="#f75252" size={20}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  statusBar:{
    backgroundColor:'#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: '#f75252',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title:{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
  },
  text:{
    color:'white',
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
    backgroundColor:'white',
    alignItems:'center',
    borderRadius:25,
    flexDirection:'row',
  },
  buttonText:{
    color:'#f75252',
    fontWeight:'bold',
    fontSize:16,
  },
});

export default LandingScreen;
