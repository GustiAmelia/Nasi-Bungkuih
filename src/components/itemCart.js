require('number-to-locale-string-polyfill');
import React from 'react';
import { useDispatch } from 'react-redux';
import { View,StyleSheet,Text,Image,TouchableOpacity } from 'react-native';
import {incrementCreator,decrementCreator} from '../redux/actions/menu';

const ItemCart = ({item}) => {

  const regex = /localhost/;
  const newUrlImage = item.images.replace(regex,'192.168.43.73');
  let price = item.price * item.quantity;
  price = price.toLocaleString('id',{style:'currency',currency:'IDR'});

  const dispatch = useDispatch();

  return (
    <View style={Styles.card}>
      <View style={Styles.cardContent}>
        <View style={Styles.contentLeft}>
          <Image source={{uri:newUrlImage}} style={Styles.imageMenu}/>
          <View style={Styles.textCard}>
            <Text style={Styles.menuName}>{item.menu}</Text>
            <Text style={Styles.description}>{item.description}</Text>
            <Text style={Styles.menuPrice}>{price}</Text>
          </View>
        </View>
        <View style={Styles.contentRight}>
          <View style={Styles.counterButton}>
            <TouchableOpacity style={Styles.buttonDecrease} onPress={()=>dispatch(decrementCreator(item.id))}>
              <Text style={Styles.textButton}>-</Text>
            </TouchableOpacity>
            <View style={Styles.counter}>
              <Text style={Styles.textCounter}>{item.quantity}</Text>
            </View>
            <TouchableOpacity style={Styles.buttonIncrease} onPress={()=>dispatch(incrementCreator(item.id))}>
              <Text style={Styles.textButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  card :{
    marginVertical:6,
    marginHorizontal:10,
  },
  cardContent :{
    flexDirection:'row',
    margin:10,
    alignItems:'center',
    marginHorizontal:5,
    justifyContent:'space-between',
  },
  contentLeft:{
    flexDirection:'row',
    width:'40%',
  },
  imageMenu:{
    width : 80,
    height:80,
    borderRadius:10,
    marginLeft:5,
  },
  textCard:{
    marginLeft:10,
    justifyContent:'center',
  },
  menuName:{
    fontWeight:'bold',
    fontSize:15,
    color:'black',
  },
  description:{
    color:'grey',
    marginVertical:5,
  },
  menuPrice :{
    fontSize:12,
    fontWeight:'bold',
  },
  contentRight:{
    alignContent:'center',
    elevation:10,
  },
  counterButton :{
    flexDirection:'row',
  },
  buttonDecrease:{
    backgroundColor:'#f75252',
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius:7,
    borderTopLeftRadius:7,
  },
  buttonIncrease:{
    backgroundColor:'#f75252',
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderBottomRightRadius:7,
    borderTopRightRadius:7,
  },
  textButton:{
    color:'white',
    fontSize:25,
  },
  counter:{
    backgroundColor:'white',
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
  },
  textCounter:{
    fontSize:18,
  },
});

export default ItemCart;

