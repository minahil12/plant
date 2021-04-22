import React, { Component } from 'react';
import { Button, View, Text,StyleSheet,ImageBackground,TextInput ,KeyboardAvoidingView} from 'react-native';
import {createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class signIn extends Component {
  render() {
    return (
      
        <ImageBackground source={ require("./assets/signin.jpg")} style={{width: '100%', height: '100%'}} >
{/* <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={64}> */}
          <Text style={styles.SignIn}style={styles.container}  >Sign in</Text>
      <Text>   </Text>
    
       <TextInput placeholder="enter username" placeholderTextColor="black"  style={styles.text} />
       {/* <KeyboardAvoidingView style={style.key} behavior='padding' enabled> */}
       <TextInput placeholder="enter password" placeholderTextColor="black"  style={styles.text} secureTextEntry={true}/>
       {/* </KeyboardAvoidingView> */}
       <Text>   </Text>
       <Button title='Login' color='#194C19' onPress={() => this.props.navigation.navigate('main') } />
       
        </ImageBackground>
        
    )
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center', 
      height: 40,
      marginTop:200
      
    },
    key: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 200,
      paddingTop: 200,
    },
    text:{
        backgroundColor: 'white',
        color:'black',
        height:40,
        width:200,
        marginTop:40,
        marginHorizontal:20,
        paddingHorizontal:10,
        alignSelf:'center',
       borderColor:'#194C19',
       borderWidth:1,
       borderRadius:10,
      
        },
    
  SignIn:{
    color:'#194C19',
    fontSize:30,
    fontWeight:'bold',
    
   
   
  }
      }
      );
