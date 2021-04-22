import React from 'react';
import { StyleSheet, Text, View,TextInput,Button ,Image,ImageBackground,
TouchableOpacity,FloatlabelTextInput,Platform, KeyboardAvoidingView} from 'react-native';
import { render } from 'react-dom';


export default class App extends React.Component {

    render()
    {
  return (
    
   
    <ImageBackground source={ require("./assets/signin.jpg")} style={{width: '100%', height: '100%'}} >
       
         
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
      <View style={styles.container} >
         <Text style={styles.SignUp} >Sign Up</Text>
     <Text>   </Text>
    
      <TextInput placeholder="enter username" placeholderTextColor="black"  style={styles.text}/>
      
      <TextInput  placeholder="enter password" placeholderTextColor="black"   style={styles.text} secureTextEntry={true}/>
      <TextInput  placeholder="Re-enter password" placeholderTextColor="black"   style={styles.text} secureTextEntry={true}/>
      <Text>   </Text>
      <Button title='Register' color='#194C19' onPress={()=>{alert('Registered successfully')}} />
      </View>
      </KeyboardAvoidingView>
      
       
       </ImageBackground>
       




  );

  
}
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  signup: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center', 
    height: 40,
    
    
  }
  ,
  text:{
      backgroundColor: 'white',
      color:'black',
      height:40,
      width:200,
      marginTop:20,
      marginHorizontal:20,
      paddingHorizontal:10,
      alignSelf:'center',
      },
  
SignUp:{
  color:'#194C19',
  fontSize:30,
  fontWeight:'bold',
  
 
 
}
    }
    );


