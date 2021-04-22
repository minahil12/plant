import React from'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import Card from './card'
import Info from './Info'
export default class infoCard extends React.Component
{
  render()
  {
    
      
      console.log(this.props.name);
        return(
          <View>
            <Info />
              <Text>
                {this.props.namez}
              </Text>
           
            
            
          </View>
        );
  }
}

const styles=StyleSheet.create({

image:
{
    width:150,
    height:110,
    justifyContent:'center',
    alignItems:'stretch'
},
container:{
    
    alignItems: 'stretch',
    marginTop: 20,
    padding: 5,
    justifyContent:'space-between'
},
text:{
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 50
},
price:{
    marginTop:70,
    fontSize: 15,
   
    flexDirection:'column',
    paddingLeft: 2
 }
})