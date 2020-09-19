import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getRegister} from '../redux/actions/auth';

import { View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './StylesAuth';
import CustomButton from '../shared/CustomButton';


const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const login = useSelector((state)=>state.auth.isLoggedIn);
  const [form,setForm] = useState({fullname:null,username:null,email:null,phone:null,password:null});

  const [data,setData] = useState({
    secureTextEntry: true,
  });

  const handleSignUP = ()=>{
    dispatch(getRegister(form.fullname,form.username,form.email,form.phone,form.password));
  };

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
    <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.container}>
          <StatusBar barStyle="light-content"/>
          <View style={Styles.header}>
              <Text style={Styles.text_header}>Create your account</Text>
          </View>
          <View style={Styles.footer}>
            <Text style={Styles.text_footer}>Full Name</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                  placeholder="your name"
                  onChangeText={(val)=>setForm({...form,fullname:val})}/>
            </View>
            <Text style={Styles.text_footer}>Username</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="your username"
                autoCapitalize="none"
                onChangeText={(val)=>setForm({...form,username:val})}/>
            </View>
            <Text style={Styles.text_footer}>Email</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="e.g. name@gmail.com"
                autoCapitalize="none"
                onChangeText={(val)=>setForm({...form,email:val})}/>
            </View>
            <Text style={Styles.text_footer}>Phone</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="0823xxxxxxxx"
                keyboardType="numeric"
                onChangeText={(val)=>setForm({...form,phone:val})}/>
            </View>
            <Text style={Styles.text_footer}>Password</Text>
            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.textInput}
                placeholder="your password"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val=>setForm({...form,password:val}))}/>
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
            <CustomButton text="SIGN UP" onSubmit={handleSignUP}/>
            <View style={Styles.question}>
              <Text>Already an account ? </Text>
              <TouchableOpacity>
                <Text style={Styles.textLink} onPress={()=>navigation.navigate('Log In')}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
