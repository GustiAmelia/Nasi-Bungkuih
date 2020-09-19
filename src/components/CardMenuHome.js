import React from 'react';
import { useSelector} from 'react-redux';
import { View,StyleSheet,Text,FlatList } from 'react-native';

import ItemMenu from './itemMenu';

const CardHome = ({item}) => {

  const menus = useSelector(state => state.menu.menus);

  return (
    <View style={Styles.card}>
      <View style={Styles.cardContent}>
        <View style={Styles.titelCategoryWrapper}>
          <Text style={Styles.titelCategory}>{item.category_name}</Text>
        </View>
        <FlatList
          data={menus.filter(value=>{return value.category_name === item.category_name;})}
            renderItem={({item})=>{
              return (
                <ItemMenu item={item}/>
              );
            }}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  card :{
    borderRadius:15,
    elevation:3,
    marginVertical:6,
  },
  titelCategoryWrapper:{
    borderBottomWidth:0.5,
    borderStyle:'dotted',
    marginHorizontal:10,
  },
  titelCategory:{
    marginVertical:15,
    fontSize:20,
    fontWeight:'bold',
  },
});
export default CardHome;

