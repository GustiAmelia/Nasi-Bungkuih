import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TextInput, StatusBar, TouchableOpacity,TouchableWithoutFeedback,Keyboard,Alert,StyleSheet,Platform,ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../shared/CustomButton';
import {getLogin} from '../redux/actions/auth';


const Login = ({navigation}) => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: null,password: null});
  const [data,setData] = useState({
    secureTextEntry: true,
  });

  const handleSignIn = ()=>{
    console.log('login');
    dispatch(getLogin(form.email,form.password));
  };

  const login = useSelector((state)=>state.auth.isLoggedIn);
  const isLoginSuccess = useSelector((state)=>state.auth.isLoginSuccess);
  const msg = useSelector((state)=>state.auth.msg);


  if (login){
    return navigation.navigate('Home');
  }

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={Styles.container}>
        <StatusBar style ={Styles.statusBar} barStyle="light-content" backgroundColor="#f75252"/>
        <View style={Styles.header}>
          <Text style={Styles.text_header}>Log in to your account</Text>
        </View>
        <View style={Styles.footer}>
          <ScrollView>
            {isLoginSuccess ? null :
            <Text style={Styles.errorMessage}>Incorrect username or password!</Text>}
            <Text style={Styles.text_footer}>Email</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="your email"
                autoCapitalize="none"
                onChangeText={(val)=>setForm({...form,email:val})}/>
            </View>
            <Text style={Styles.text_footer}>Password</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="your password"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val)=>setForm({...form,password:val})}/>
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ?
                  <Feather
                      name="eye-off"
                      color="grey"
                      size={20}
                  />
                  :
                  <Feather
                      name="eye"
                      color="grey"
                      size={20}
                  />
                }
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={Styles.forgot}>
              <Text style={Styles.textForgot}>Forgot password?</Text>
            </TouchableOpacity>
            <CustomButton text="LOG IN" onPress={handleSignIn}/>
            <View style={Styles.question}>
              <Text>Don't have an account ? </Text>
              <TouchableOpacity>
                <Text style={Styles.textLink} onPress={()=>navigation.navigate('Sign Up')}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f75252',
  },
  statusBar:{
    backgroundColor:'#f75252',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop:30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    marginTop:10,
    color: '#05375a',
    fontSize: 18,
  },
  wrapperInput:{
    marginTop:10,
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor:'grey',
  },
  textInput: {
    flex:1,
    marginTop:Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    padding:8,
  },
  forgot:{
    marginVertical:20,
    marginLeft:'55%',
  },
  textLink: {
    color:'#f75252',
    textAlign:'right',
  },
  textForgot:{
    color:'#05375a',
    textAlign:'right',
  },
  question:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center',
  },
  errorMessage:{
    color:'red',
    textAlign:'center',
    fontSize:16,
  },
});
