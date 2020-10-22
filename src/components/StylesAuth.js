import { StyleSheet, Platform } from 'react-native';

const StylesAuth = StyleSheet.create({
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
    // paddingBottom: 50,
  },
  footer: {
    flex: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop:30,
    // paddingBottom:60,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
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
    // margin:10,
    paddingLeft: 10,
    color: '#05375a',
    padding:8,
  },
  forgot:{
    margin:15,
  },
  textLink: {
    color:'#f75252',
  },
  question:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'center',
  },
});

export default StylesAuth;
