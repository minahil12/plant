import React from 'react'
import {Text,TextInput,Image, View,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {withNavigation} from 'react-navigation'

import Info from './Info'
import InfoCard from './infoCard'
class card extends React.Component
{
    in=( names)=>
    {
        console.log(names);
         <Info name={names} title='plants' />
         { this.props.navigation.navigate('Info')}
    }
    
  
     render()
    {
        const { name}=this.props;
        
      
        return(
           
            
        <TouchableOpacity onPress={this.props.sid}>
        
                  
            
    
           <View style={styles.container}>
               
                  <Text></Text>
                <Image style={styles.image} source={this.props.s}/>
                <Text style={styles.text}>
                   {name}
                    
                </Text>

                <View style={styles.price}>
                    <Text >
                        {this.props.price}
                    </Text>
                </View>



    </View>
    

    
             </TouchableOpacity>

         
        )


    }
}
export default withNavigation(card)
const styles=StyleSheet.create({

    image:
    {
        width:110,
        height:110,
        justifyContent:'center'
    },
    container:{
        flexDirection:'row',
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