import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View, StatusBar, StyleSheet, TextInput, FlatList,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardHome from './CardMenuHome';
import {getAllMenus} from '../redux/actions/menu';
import {getAllCategory} from '../redux/actions/category';
import {searchMenuCreator} from '../redux/actions/serachMenu';

const Menu = () => {

  // const [menu, setMenu] = useState(null);
  const category = useSelector(state=>state.category.category);

  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getAllCategory());
     dispatch(getAllMenus());
  }, [dispatch]);


  return (
    <View style={Styles.container}>
      <StatusBar style ={Styles.statusBar} barStyle="light-content" backgroundColor="#f75252"/>
      <View style={Styles.header}>
        <View style={Styles.search}>
          <TextInput style={Styles.textInput}
            placeholder="Search for dish or meal"
            // onChangeText={(val)=>setMenu(val)}
            // onSubmitEditing={()=>{dispatch(searchMenuCreator(menu,'menu'));
            // setMenu(null);
            // }}
            />
          <Pressable>
            <Icon style={Styles.iconSearch} name="search-outline"/>
          </Pressable>
        </View>
      </View>
      <View style={Styles.footer}>
        <FlatList
          data={category}
            renderItem={({item})=>{
              return (
                <CardHome item={item}/>
              );
            }}
        />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  statusBar:{
    backgroundColor:'#009387',
  },
  container :{
    flex:1,
    backgroundColor:'#f75252',
  },
  header:{
    justifyContent: 'flex-end',
  },
  search:{
    marginVertical:15,
    marginHorizontal:10,
    borderRadius:20,
    backgroundColor:'white',
    borderColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textInput:{
    width:'80%',
    marginLeft:10,
  },
  iconSearch:{
    fontSize:40,
    marginRight:10,
    marginVertical:2,
  },
  footer :{
    flex: 6,
    backgroundColor:'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop:15,
  },
  imgMenu:{
    width:100,
    height:100,
  },
});

export default Menu;
