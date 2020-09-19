import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TextInput, StatusBar, TouchableOpacity,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../shared/CustomButton';
import Styles from './StylesAuth';
import {getLogin} from '../redux/actions/auth';


const Login = ({navigation}) => {

  const login = useSelector((state)=>state.auth.isLoggedIn);
  // const user = useSelector((state)=>state.auth.data);
  // console.log(user);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: null,password: null});
  const [data,setData] = useState({
    secureTextEntry: true,
  });

  const handleSignIn = ()=>{
    dispatch(getLogin(form.email,form.password));
  };


  useEffect(()=>{
    if (login){
      return navigation.navigate('Home');
    }
  });

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <SafeAreaView style={Styles.container}>
        <StatusBar style ={Styles.statusBar} barStyle="light-content"/>
        <View style={Styles.header}>
              <Text style={Styles.text_header}>Log in to your account</Text>
          </View>
          <View style={Styles.footer}>
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
              <Text style={Styles.textLink}>Forgot password?</Text>
            </TouchableOpacity>
            <CustomButton text="LOG IN" onPress={handleSignIn}/>
            <View style={Styles.question}>
              <Text>Don't have an account ? </Text>
              <TouchableOpacity>
                <Text style={Styles.textLink} onPress={()=>navigation.navigate('Sign Up')}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
