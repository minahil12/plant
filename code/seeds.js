import React from 'react';
import { StyleSheet, Text, View,TextInput,Button ,Image,ImageBackground,
TouchableOpacity,FloatlabelTextInput} from 'react-native';
import {withNavigation} from 'react-navigation'

class seeds extends React.Component {
    render(){
  return (
    
   /*
    <View style={StyleSheet.container}>
      <Button title="Fertilizer"/>
      <Button title="Seeds"/>
      <Button title="Indoor Plants"/>
      <Button title="Outdoor Plants"/>

    </View>
      */
<View style={styles.container}>
     <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
     onPress={()=>{this.props.navigation.navigate('flowers')}}>
  
     <Image
     
       source={require('./assets/flo.jpg')}
     
       style={styles.ImageIconStyle}
     />
    
     <Text style={styles.text} > Flowers </Text>
   </TouchableOpacity>


   <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
   onPress={()=>{this.props.navigation.navigate('fruits')}}>
  
     <Image
     
       source={require('./assets/frui.jpg')}
     
       style={styles.ImageIconStyle}
     />
    
     <Text style={styles.text}  > Fruits </Text>
   </TouchableOpacity>

   


   <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
   onPress={()=>{this.props.navigation.navigate('vegetable')}}>
  
     <Image
     
       source={require('./assets/veg.jpg')}
     
       style={styles.ImageIconStyle}
     />
    
     <Text style={styles.text} > Vegetables</Text>
   </TouchableOpacity>
</View>
  );

    }
}
export default withNavigation(seeds)
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


