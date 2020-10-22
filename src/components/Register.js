import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TextInput, StatusBar, TouchableOpacity,TouchableWithoutFeedback,Keyboard,Alert,StyleSheet,Platform,ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../shared/CustomButton';
import {getRegister} from '../redux/actions/auth';

const Register = ({navigation}) => {

  const dispatch = useDispatch();
  const login = useSelector((state)=>state.auth.isLoggedIn);
  const [form,setForm] = useState({
    username:null,
    email:null,
    password:null,
    messageEmail:null,
    messagePassword:null,
  });

  const [data,setData] = useState({
    secureTextEntry: true,
  });

  const handleSignUP = ()=>{
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    const checkEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!checkEmail.test(form.email)){
      setForm({
        ...form,
        messageEmail:'Invalid Email',
      });
    }
    else if (!checkPass.test(form.password)){
      setForm({
        ...form,
        messagePassword:'Password must contain at least 1 number, and be longer than 8 charaters.',
      });
    }
    else {
      dispatch(getRegister(form.username,form.email,form.password));
      setForm({
        ...form,
        messageEmail:null,
        messagePassword:null,
      });
    }
  };

  const isLoginSuccess = useSelector((state)=>state.auth.isLoginSuccess);
  const msg = useSelector((state)=>state.auth.msg);

  const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
  });
  };

  useEffect(() => {
    if (login) {
      return navigation.navigate('Home');
    }
  });
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={Styles.container}>
        <StatusBar style ={Styles.statusBar} barStyle="light-content" backgroundColor="#f75252"/>
        <View style={Styles.header}>
          <Text style={Styles.text_header}>Create your account</Text>
        </View>
        <View style={Styles.footer}>
          <ScrollView>
            {isLoginSuccess ? null
              :
              <Text style={Styles.error}>{msg}</Text>
            }
            <Text style={Styles.text_footer}>Username</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="your username"
                onChangeText={(val)=>setForm({...form,username:val})}/>
            </View>
            <Text style={Styles.text_footer}>Email</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="your email"
                autoCapitalize="none"
                onChangeText={(val)=>setForm({...form,email:val,messageEmail:null})}/>
            </View>
            {form.messageEmail === null ?
              null
              :
              <Text style={Styles.errorMessage}>{form.messageEmail}</Text>
            }
            <Text style={Styles.text_footer}>Password</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="your password"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val)=>setForm({...form,password:val,messagePassword:null})}/>
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
            {form.messagePassword === null ?
              null
              :
              <Text style={Styles.errorMessage}>{form.messagePassword}</Text>
            }
            <CustomButton text="SIGN UP" onPress={handleSignUP}/>
            <View style={Styles.question}>
              <Text>Already an account ? </Text>
              <TouchableOpacity>
                <Text style={Styles.textLink} onPress={()=>navigation.navigate('Log In')}>Log In</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;

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
    marginTop:5,
  },
  error:{
    color:'red',
    textAlign:'center',
    fontSize:16,
  },
});

