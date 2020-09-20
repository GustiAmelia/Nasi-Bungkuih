require('number-to-locale-string-polyfill');
import React from 'react';
import { useSelector} from 'react-redux';

import {View, Text, StatusBar, StyleSheet, Image,FlatList, TouchableOpacity} from 'react-native';
import ItemCart from './itemCart';


const Cart = ({navigation}) => {

  const carts = useSelector((state)=>state.menu.carts);

  const totalPrice = carts.reduce((total, item) => { return total + (item.price * item.quantity);}, 0);
  const stringTotalPrice = totalPrice.toLocaleString('id',{style:'currency',currency:'IDR'});
  const ppn = (10 * totalPrice) / 100;
  const stringPpn = ppn.toLocaleString('id',{style:'currency',currency:'IDR'});
  const totalPayment = totalPrice + ppn;
  const stringTotalPayment = totalPayment.toLocaleString('id',{style:'currency',currency:'IDR'});

  return (
    <View style={Styles.container}>
        <StatusBar style ={Styles.statusBar} barStyle="light-content"/>
        <View style={Styles.content}>
          {carts.length === 0 ? (
            <View style={Styles.contentFooter}>
              <Image source={require('../../assets/food-and-restaurant.png')}/>
              <Text style={Styles.textEmptyCart}>Your cart is empty</Text>
              <Text style={Styles.msg}>Please add some items from the menu</Text>
          </View>
          )
          :
          (
          <>
            <View style={Styles.titleWrapper}>
              <View>
               <Text style={Styles.textTitle}>Order item(s)</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                  <Text style={Styles.textAdd}>+ Add more</Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              data={carts}
              renderItem={({item})=>{
                return (
                  <ItemCart item={item}/>
                );
              }}
              />
              <View style={Styles.space}/>
            <View style={Styles.paymantWrapper}>
              <View>
                <Text style={Styles.textTitle}>Payment Details</Text>
              </View>
              <View style={Styles.payment}>
                <View style={Styles.paymentContent}>
                  <Text>Price (estimated)</Text>
                  <Text>{stringTotalPrice}</Text>
                </View>
                <View style={Styles.paymentContent}>
                  <Text>Ppn 10%</Text>
                  <Text>{stringPpn}</Text>
                </View>
              </View>
              <View style={Styles.paymentContent}>
                <Text >Total payment</Text>
                <Text>{stringTotalPayment}</Text>
              </View>
            </View>
            <View style={Styles.space}/>
          </>
            )}
        </View>
        {carts.length !== 0 ? (
          <View style={Styles.checkout}>
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
  },
  content:{
    flex:9,
    justifyContent:'center',
    backgroundColor:'#fff',
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
  titleWrapper:{
    marginHorizontal:20,
    borderBottomWidth:0.4,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textTitle:{
    marginBottom:10,
    fontSize:18,
    fontWeight:'bold',
  },
  textAdd:{
    marginBottom:10,
    fontSize:18,
    fontWeight:'bold',
    color:'#f75252',
  },
  paymantWrapper:{
    marginBottom:5,
    marginTop:10,
    marginHorizontal:20,
  },
  payment:{
    borderTopWidth:0.4,
    paddingTop:10,
  },
  paymentContent:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5,
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
  space:{
    backgroundColor:'grey',
    opacity:0.3,
    width:'100%',
    height:5,
  },
});

export default Cart;
