import React, { Component } from 'react';
import { Button, View, Text,StyleSheet,ImageBackground,TextInput,KeyboardAvoidingView,keyboardAppearance } from 'react-native';
import {createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default class Aboutscreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Login-in',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/home-icon.jpg')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  state=
  {
   
    username:'',
    password:'',

    user:[
      {name:'ali',pass:"123"},
    {name:'hassan',pass:"124"},
    {name:'ahmed',pass:"125"},
    
    
    ],

    unknown:{name:'errormsg'},

    found:false,
    count:0
    


  


  };

  handleInput=()=>
{
  this.setState({found:false})
  this.setState({count:this.state.count+1})
  for(let i=0;i<this.state.user.length;i++)
  {
   
    if(this.state.username===this.state.user[i].name&&this.state.password===this.state.user[i].pass){
      
    
      this.setState({found:true});
      {this.props.navigation.navigate('main')}
      
    }
    
     if(this.state.username===''||this.state.password==='')
    {
      alert('Fill required fields')
    }
     
  
    }
    
    
  }

  
  render() {
    return (
      
        <ImageBackground source={ require("./assets/signin.jpg")} style={{width: '100%', height: '100%'}} >
          <KeyboardAvoidingView style={styles.key} behavior='padding' enabled>
        <View style={styles.container} >
          <Text style={styles.SignIn} >Sign in</Text>
      <Text>   </Text>
      
       <TextInput  placeholder="enter username"  onChangeText={(input)=>this.setState({username:input})} placeholderTextColor="black"  style={styles.text}/>
       
       <TextInput  placeholder="enter password"   onChangeText={(input)=>this.setState({password:input})}
       secureTextEntry={true} placeholderTextColor="black"  style={styles.text} />
       
       <Text>   </Text>
       <Button title='Login' color='#194C19'  onPress={this.handleInput} />
       
        </View>
        </KeyboardAvoidingView>
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
      marginHorizontal:100,
      justifyContent: 'flex-start',
      alignItems: 'center', 
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
        icon: {
          width: 24,
          height: 24,
        },
  SignIn:{
    color:'#194C19',
    fontSize:30,
    fontWeight:'bold',
    
   
   
  }
      }
      );
