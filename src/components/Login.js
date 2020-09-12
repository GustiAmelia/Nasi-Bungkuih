import React, {useState} from 'react';
import {View, Text, TextInput, StatusBar, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../shared/CustomButton';
import Styles from './StylesAuth';

const handleLogin = ()=>{
  console.log('a');
};

const Login = ({navigation}) => {
  const [data,setData] = useState({
    email:'',
    password:'',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if ( val.length !== 0 ) {
        setData({
            ...data,
            data: val,
            check_textInputChange: true,
        });
    } else {
        setData({
            ...data,
            fullname : val,
            check_textInputChange: false,
        });
    }
  };

  const handleInputPassword = (val) => {
    setData({
        ...data,
        password: val,
    });
  };

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={Styles.container}>
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
              onChangeText={(val)=>textInputChange(val)}/>
            {data.check_textInputChange ?
            <Feather name="check-circle" color="green" size={20}/>
            : null}
          </View>
          <Text style={Styles.text_footer}>Password</Text>
          <View style={Styles.wrapperInput}>
            <TextInput style={Styles.textInput}
              placeholder="your password"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val)=>handleInputPassword(val)}/>
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
          <CustomButton text="LOG IN" onPress={handleLogin}/>
          <View style={Styles.question}>
            <Text>Don't have an account ? </Text>
            <TouchableOpacity>
              <Text style={Styles.textLink} onPress={()=>navigation.navigate('Sign Up')}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default Login;
