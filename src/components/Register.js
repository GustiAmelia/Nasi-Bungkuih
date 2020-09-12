import React, {useState} from 'react';
import { View, Text, StatusBar,TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './StylesAuth';
import CustomButton from '../shared/CustomButton';

const handleSignUP = ()=>{
  console.log('a');
};

const Register = ({navigation}) => {

  const [data,setData] = useState({
    fullname:'',
    email:'',
    phone:'',
    password:'',
    confirm_password:'',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
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
  const handleInputConfirmPassword = (val) => {
    setData({
        ...data,
        confirm_password: val,
    });
};

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
    });
};

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
};
  return (
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
              onChangeText={(val)=>textInputChange(val)}/>
          {data.check_textInputChange ?
          <Feather name="check-circle" color="green" size={20}/>
          : null}
        </View>
        <Text style={Styles.text_footer}>Email</Text>
        <View style={Styles.wrapperInput}>
          <TextInput style={Styles.textInput}
            placeholder="e.g. name@gmail.com"
            autoCapitalize="none"
            onChangeText={(val)=>textInputChange(val)}/>
          {data.check_textInputChange ?
          <Feather name="check-circle" color="green" size={20}/>
          : null}
        </View>
        <Text style={Styles.text_footer}>Phone</Text>
        <View style={Styles.wrapperInput}>
          <TextInput style={Styles.textInput}
            placeholder="0823xxxxxxxx"
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
        <Text style={Styles.text_footer}>Confirm Your Password</Text>
        <View style={Styles.wrapperInput}>
          <TextInput style={Styles.textInput}
            placeholder="your password"
            autoCapitalize="none"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            onChangeText={(val)=>handleInputConfirmPassword(val)}/>
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ?
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
        <CustomButton text="SIGN UP" onPress={handleSignUP}/>
        <View style={Styles.question}>
          <Text>Already an account ? </Text>
          <TouchableOpacity>
            <Text style={Styles.textLink} onPress={()=>navigation.navigate('Log In')}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
