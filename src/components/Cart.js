require('number-to-locale-string-polyfill');
import React from 'react';
import { useSelector} from 'react-redux';

import {View, Text, StatusBar, StyleSheet, Image,FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ItemCart from './itemCart';


const Cart = () => {
  const carts = useSelector((state)=>state.menu.carts);
  let totalPrice = carts.reduce((total, item) => { return total + (item.price * item.quantity);}, 0);
  totalPrice = totalPrice.toLocaleString('id',{style:'currency',currency:'IDR'});
  return (
    <View style={Styles.container}>
        <StatusBar style ={Styles.statusBar} barStyle="light-content"/>
        <View style={Styles.header}>
            <Text style={Styles.text_header}>My Order</Text>
            {/* <Pressable>
              <Icon style={Styles.iconCart} name="cart"/>
            </Pressable> */}
        </View>
        <View style={Styles.footer}>
          {carts.length === 0 ? (
            <View style={Styles.contentFooter}>
              <Image source={require('../../assets/food-and-restaurant.png')}/>
              <Text style={Styles.textEmptyCart}>Your cart is empty</Text>
              <Text style={Styles.msg}>Please add some items from the menu</Text>
          </View>
          )
          :
          <FlatList
            data={carts}
            renderItem={({item})=>{
              return (
                <ItemCart item={item}/>
              );
            }}
            />}
        </View>
        {carts.length !== 0 ? (
          <View style={Styles.checkout}>
            <View style={Styles.totalWrapper}>
              <Text style={Styles.textTotal}>TOTAL</Text>
              <Text style={Styles.total}>{totalPrice}</Text>
            </View>
            <TouchableOpacity >
              <Text style={Styles.buttonCheckout}>Checkout</Text>
            </TouchableOpacity>
          </View>
        )
        :
        null}
    </View>
  );
};

const Styles = StyleSheet.create({
  statusBar:{
    backgroundColor:'#009387',
  },
  container:{
    flex:1,
    backgroundColor:'white',
  },
  header:{
    flex:1,
    alignItems:'center',
    width:'100%',
    backgroundColor:'#f75252',
    flexDirection:'row',
    justifyContent:'center',
  },
  text_header:{
    fontSize:25,
    fontWeight:'bold',
    color:'#f75252',
    backgroundColor:'white',
    paddingVertical:2,
    paddingHorizontal:10,
    borderRadius:10,
  },
  footer:{
    flex:9,
    justifyContent:'center',
    backgroundColor:'white',
    paddingTop:15,
  },
  contentFooter :{
    alignItems:'center',
  },
  textEmptyCart:{
    fontWeight:'bold',
    fontSize:25,
  },
  msg:{
    color:'grey',
  },
  checkout:{
    backgroundColor:'white',
    elevation:24,
    padding:10,
  },
  totalWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'rgba(190, 195, 202, 0.1)',
  },
  textTotal:{
    fontSize:15,
    fontWeight:'bold',
  },
  total:{
    color:'black',
    fontWeight:'bold',
    fontSize:15,
  },
  buttonCheckout:{
    marginTop:5,
    textAlign:'center',
    backgroundColor:'#f75252',
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    paddingVertical:5,
    borderRadius:10,
  },
});

export default Cart;
