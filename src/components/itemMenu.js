import React,{useState} from 'react';
import {useDispatch } from 'react-redux';
import { View,StyleSheet,Text,Image,TouchableOpacity } from 'react-native';
import {itemToCart} from '../redux/actions/menu';

const ItemMenu = ({item}) => {

  const [title, setTitle] = useState('Add +');

  const toggleTitle = () => {
    if (title === 'Add +'){
        setTitle('Remove');
    } else {
        setTitle('Add +');
    }
  };

  const regex = /localhost/;
  const newUrlImage = item.images.replace(regex,'192.168.43.73');
  const price = item.price.toLocaleString('id',{style:'currency',currency:'IDR'});
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
          <TouchableOpacity onPress={()=>{
            toggleTitle();
            dispatch(itemToCart(item.id,item.images,item.menu,item.price,item.description));}}>
            <View style={Styles.buy}>
              <Text style={Styles.textBuy}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  card :{
    marginVertical:6,
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
    // width:'10%',
    // borderWidth:1,
  },
  buy :{
    backgroundColor:'#f75252',
    marginRight:5,
    borderRadius:5,
  },
  textBuy :{
    color:'white',
    textAlign:'center',
    fontSize:18,
    paddingHorizontal:5,
  },
});
export default ItemMenu;

