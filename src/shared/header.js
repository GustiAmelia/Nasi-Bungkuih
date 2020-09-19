import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import StylesAuth from '../components/StylesAuth';

const Header = ({text}) => {
  return (
    <View style={StylesAuth.header}>
      <Text style={Styles.headerText}>Menu</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  header :{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  headerText :{
    fontWeight:'bold',
    fontSize:20,
    letterSpacing:1,
  },
});
export default Header;

