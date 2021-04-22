
import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView,Button} from 'react-native'
import Card from './card'

export default class Info extends React.Component{

    state=
    {
      price:70,
      quan:1
    }
  buttonP=()=>
  {
    
    {
      this.setState({
        price:(this.state.price+70),
        quan:(this.state.quan+1)
      
      })
     
    }
  }
  buttonM=()=>
  {
    if(this.state.price>70)
    {
      this.setState(
        {price:(this.state.price-70),
          quan:(this.state.quan-1)
      
      
      })
     
    }
  }

    render(){
  
       return(
         <ScrollView>
          <View>
            <Image style={styles.image} source={require( './assets/seeds/vegetables/beetroot.jpg')} />
           
           <Text style={styles.text}>BeetRoot</Text>
           <Text>
            Beetroot seeds are items that can be used to plant beetroot crops, breed chickens, and tame parrots.
           These can be placed on farmland. After being placed, the seeds undergo four states of growth. 
           The fully-grown beetroot plants can be broken to produce beetroot seeds and beetroots.
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