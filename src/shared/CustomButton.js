import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.button}>
        <Text style={Styles.buttonText}>{text}</Text>
      </View>
  </TouchableOpacity>
  );
};
export default CustomButton;

const Styles = StyleSheet.create({
  button:{
    width: '100%',
    height: 45,
    justifyContent: 'center',
    backgroundColor:'#f75252',
    alignItems:'center',
    borderRadius:25,
    marginTop:30,
  },
  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
  },
});
