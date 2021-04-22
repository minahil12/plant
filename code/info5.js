
import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView,Button} from 'react-native'
import Card from './card'

export default class Info extends React.Component{

    state=
    {
      price:250,
      quan:1
    }
  buttonP=()=>
  {
    
    {
      this.setState({
        price:(this.state.price+250),
        quan:(this.state.quan+1)
      
      })
     
    }
  }
  buttonM=()=>
  {
    if(this.state.price>250)
    {
      this.setState(
        {price:(this.state.price-250),
          quan:(this.state.quan-1)
      
      
      })
     
    }
  }

    render(){
  
       return(
         <ScrollView>
          <View>
            <Image style={styles.image} source={require( './assets/fertilizers/allpurpose.jpg')} />
           
           <Text style={styles.text}>Allpurpose</Text>
           <Text>
           An all-purpose fertilizer is a type of fertilizer that includes adequate amounts of the three core
            chemicals to ensure proper growth: nitrogen, phosphorous, and potassium (NPK).
           A plant's growth and the quality of its components depend on several factors such as temperature, light 
           intensity, water, and chemical nutrients. Plants mostly need the three core chemicals.Each chemical serves a 
           different purpose. Nitrogen is responsible for the physical growth of plants, phosphorous is important 
           for a plant’s respiration, and potassium is necessary to overcome various diseases.An all-purpose fertilizer 
           may also be known as a general-purpose fertilizer.
           </Text>
           <View flexDirection='row'>
           <Text style={styles.text}>
            Rs{this.state.price}

             </Text>
             <Text style={styles.text}> Quantity:{this.state.quan} </Text>
             <Text>   </Text>
             <View style={styles.btn}>
             <Button title="+"  color="#194C19" onPress={this.buttonP}/>
             <Text> </Text>
             <Button title="-" color="#194C19" onPress={this.buttonM}/>
             </View>
           </View>
          </View>
          </ScrollView>
        );
    }
}

const styles=StyleSheet.create({

  image:
  {
      width:350,
      height:400,
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
      marginRight: 70,
      alignItems:'center'
  },
  price:{
      marginTop:70,
      fontSize: 15,
     
      flexDirection:'column',
      paddingLeft: 2
   },
   btn:{
    paddingRight:100
  }
})