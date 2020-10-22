import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StatusBar, StyleSheet,Image, TouchableOpacity,Alert} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {logOut} from '../redux/actions/auth';

const Profile = ({navigation}) => {

  const login = useSelector((state)=>state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const makeSureSingOut = () =>
    Alert.alert(
      'Sing Out',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => navigation.navigate('Profile'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => dispatch(logOut())},
      ],
      { cancelable: false }
    );

  const handleSingOutButton = ()=>{
    return makeSureSingOut();
  };

  if (!login){
    return navigation.navigate('Welcome');
  }

  return (
  <View style={Styles.container}>
    <StatusBar style ={Styles.statusBar} barStyle="light-content"/>
    <View style={Styles.header}>
      <View style={Styles.profile}>
        <Image
        style={Styles.avatar}
        source={require('../../assets/chickenkatsu.png')}/>
        <View style={Styles.contactInfo}>
          <Text style={Styles.name}>Jungkook</Text>
          <Text style={Styles.contact}>+628891248742</Text>
          <Text style={Styles.contact}>jungkook@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity style={Styles.edit} onPress={()=>navigation.navigate('EditProfile')}>
        <MaterialIcon name="edit" color="white" size={30}/>
      </TouchableOpacity>
    </View>
    <View  style={Styles.footer}>
      <View style={Styles.account}>
        <TouchableOpacity style={Styles.accountContent}>
          <View style={Styles.wallet}>
            <Icon name="wallet" color="orange" size={25}/>
            <Text style={Styles.textFooter}>My Wallet</Text>
          </View>
          <MaterialIcon style={Styles.next} name="navigate-next" color="grey" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.accountContent}>
          <View style={Styles.notification}>
            <Icon name="notifications-outline" color="#f75252" size={25}/>
            <Text style={Styles.textFooter}>Notifications</Text>
          </View>
          <MaterialIcon style={Styles.next} name="navigate-next" color="grey" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.accountContent}>
          <View style={Styles.favorite}>
            <Icon name="heart-outline" color="red" size={25}/>
            <Text style={Styles.textFooter}>My Favorites</Text>
          </View>
          <MaterialIcon style={Styles.next} name="navigate-next" color="grey" size={25}/>
        </TouchableOpacity>
      </View>
      <View style={Styles.others}>
        <TouchableOpacity style={Styles.accountContent}>
          <View style={Styles.favorite}>
            <Icon name="settings-outline" color="grey" size={25}/>
            <Text style={Styles.textFooter}>Settings</Text>
          </View>
          <MaterialIcon style={Styles.next} name="navigate-next" color="grey" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.accountContent}>
          <View style={Styles.favorite}>
            <Icon name="help-circle-outline" color="grey" size={25}/>
            <Text style={Styles.textFooter}>Help</Text>
          </View>
          <MaterialIcon style={Styles.next} name="navigate-next" color="grey" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSingOutButton}
          style={Styles.singOut}>
          <View style={Styles.favorite}>
            <Icon name="ios-log-out-outline" color="grey" size={25}/>
            <Text style={Styles.textFooter}>Sing Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

const Styles = StyleSheet.create({
  statusBar:{
    backgroundColor:'#009387',
  },
  container:{
    flex:1,
    backgroundColor:'#f75252',
  },
  header:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:20,
    justifyContent:'space-between',
  },
  profile:{
    flexDirection:'row',
  },
  avatar:{
    width:70,
    height:70,
    borderRadius:10,
    alignSelf:'center',
  },
  contactInfo:{
    alignSelf:'center',
    marginLeft:10,
  },
  name:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
  },
  contact:{
    color:'white',
  },
  edit:{
    alignSelf:'center',
  },
  footer:{
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  account:{
    height:'50%',
    borderBottomWidth:0.6,
    borderBottomColor:'grey',
  },
  accountContent:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:6,
    paddingVertical:4,

  },
  textFooter:{
    fontSize:17,
    fontWeight:'bold',
    marginLeft:5,
  },
  wallet:{
    flexDirection:'row',
  },
  notification:{
    flexDirection:'row',
  },
  favorite:{
    flexDirection:'row',
  },
  others:{
    marginTop:30,
  },
  singOut:{
    width:'50%',
    marginVertical:6,
    paddingVertical:4,
  },
});

export default Profile;
