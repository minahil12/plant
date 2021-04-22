import React, { Component } from 'react';
import { Button, View, Text,ImageBackground,TouchableOpacity,Image,StyleSheet } from 'react-native';
import NavigationBar from 'navigationbar-react-native';
export default class Homescreen extends Component {

  render() {
    return (
      
    <ImageBackground source={ require("./assets/photo1.jpg")} style={{width: '100%', height: '100%'}} >

      <View>  
      <Image style={styles.logo} source={require('./assets/plant2.png')} />
      </View>
    <View style={styles.MainContainer}>
  
  
    <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
      <Image
      
        source={require('./assets/fb.png')}
      
        style={styles.ImageIconStyle}
      />
      <View style={styles.SeparatorLine} />
      <Text style={styles.TextStyle}> Login Using Facebook </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
      <Image
       
        source={require('./assets/google.png')}
       
        style={styles.ImageIconStyle}
      />
      <View style={styles.SeparatorLine} />
      <Text style={styles.TextStyle}> Login Using Google </Text>
      
    </TouchableOpacity>
    
    </View>
    <View style={{justifyContent:'space-between' ,flexDirection:'row', fontWeight:'400'}}>
    <Button  title="Sign in"    color='#194C19' onPress={() => this.props.navigation.navigate('About') }/>
    <Button  title="Sign up" color='#194C19'  onPress={() => this.props.navigation.navigate('signUp') } />
    
    </View> 
    </ImageBackground>

    )
  }
}


const styles = StyleSheet.create({

    MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop:10,
    
    
    },
    GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    height: 40,
    width: 220,
    margin: 5,
    },
    FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    height: 40,
    width: 220,
    margin: 5,
    },
    ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    },
    TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
    
    },
    SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
    },
    Signin:{
      position: 'absolute',
        bottom:0,
        left:0,
    },
    logo:{
      width:220,
      height:200,
      marginTop:30,
      marginLeft:50,
      alignItems:'stretch',
      justifyContent:'center',
      margin:5,
      flexDirection:'row'
    }
    });
    
  