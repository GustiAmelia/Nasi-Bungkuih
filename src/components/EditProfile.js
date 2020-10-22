import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const EditProfil = ()=>{

  return (
    <View style={Styles.container}>
      <ScrollView>
        <View>
          <Image
          style={Styles.avatar}
          source={require('../../assets/chickenkatsu.png')}/>
          <TouchableOpacity>
            <View style={Styles.textChange}>
              <Text style={Styles.text}>Change Profil Photo</Text>
              <MaterialIcon name="edit" color="#f75252" size={20}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.space}/>
        <View style={Styles.editData}>
          <Text style={Styles.editName}>Fullname</Text>
          <TextInput
            style={Styles.textInput}
            placeholder="Jungkook"
            placeholderTextColor="black"
          />
          <Text style={Styles.editName}>Username</Text>
          <TextInput
            style={Styles.textInput}
            placeholder="jeykey"
            placeholderTextColor="black"
          />
          <Text style={Styles.editName}>Phone</Text>
          <TextInput
            style={Styles.textInput}
            placeholder="0827396928"
            placeholderTextColor="black"
          />
          <Text style={Styles.editName}>Email</Text>
          <TextInput
            style={Styles.textInput}
            placeholder="jungkook@gmail.com"
            placeholderTextColor="black"
          />
          <Text style={Styles.editName}>Password</Text>
          <TextInput
            style={Styles.textInput}
            placeholder="*********"
            placeholderTextColor="black"
          />
        </View>
        <View style={Styles.space}/>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.textButton}>Save Change</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  avatar:{
    marginTop:30,
    width:70,
    height:70,
    borderRadius:10,
    alignSelf:'center',
  },
  textChange:{
    marginVertical:20,
    alignSelf:'center',
    flexDirection:'row',
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'#f75252',
    marginRight:5,
  },
  editData:{
    marginHorizontal:20,
    marginVertical:10,
  },
  editName:{
    color:'grey',
    marginTop:20,
  },
  textInput:{
    borderBottomWidth:1,
    borderBottomColor:'grey',
  },
  space:{
    backgroundColor:'grey',
    opacity:0.3,
    width:'100%',
    height:5,
  },
  button:{
    marginVertical:20,
  },
  textButton:{
    backgroundColor:'#f75252',
    paddingVertical:7,
    width:'40%',
    textAlign:'center',
    alignSelf:'center',
    color:'white',
    fontWeight:'bold',
    borderRadius:10,
  },

});

export default EditProfil;


