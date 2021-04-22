import React from 'react';
import { StyleSheet, Text, View,TextInput,Button ,Image,ImageBackground,
TouchableOpacity,FloatlabelTextInput} from 'react-native';

import {withNavigation} from 'react-navigation'

class main extends React.Component {
     render(){
     return(
<View style={styles.container}>
  
     <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
     onPress={()=>{this.props.navigation.navigate('indoor')}}>
  
     <Image
     
       source={require('./assets/in.jpg')}
     
       style={styles.ImageIconStyle}
     />
    
<Text style={styles.text}  > Indoor plants </Text>
   </TouchableOpacity>


   <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
   onPress={()=>{this.props.navigation.navigate('outdoor')}}>
  
     <Image
     
       source={require('./assets/out.jpg')}
     
       style={styles.ImageIconStyle}
     />
    
     <Text style={styles.text} > Outdoor plants </Text>
   </TouchableOpacity>
  
   <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}   
    onPress={()=>{this.props.navigation.navigate('seeds')}}>
  
     <Image
     
       source={require('./assets/seed.jpg')}
     
       style={styles.ImageIconStyle}
     />
    
     <Text style={styles.text}> Seeds </Text>
   </TouchableOpacity>


   <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
   onPress={()=>{this.props.navigation.navigate('fer')}}>
  
     <Image
     
       source={require('./assets/fertilizer.jpg')}
     
       style={styles.ImageIconStyle}
     />
    
     <Text style={styles.text} > Fertilizer</Text>
   </TouchableOpacity>
 
</View>
     )
    
     } 
 
}

export default withNavigation(main)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#194C19',
    height: 40,
    width: 220,
    margin: 20,
    
    },
    ImageIconStyle: {
    padding: 25,
    margin: 15,
    height: 70,
    width: 70,
    resizeMode: 'stretch',
    borderWidth: 1,
    borderColor: '#194C19'
    
    },
  text:{
      color:'white',
      marginBottom:4,
      marginRight:20,
      fontSize:16
      },
  
SignIn:{
  color:'#194C19',
  fontSize:30,
  fontWeight:'bold',
  
 
 
}
    }
    );


