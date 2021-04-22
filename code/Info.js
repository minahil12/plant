import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView,Button} from 'react-native'
import Card from './card'

export default class Info extends React.Component{
  state=
  {
    price:900,
    quan:1
  }
buttonP=()=>
{
  
  {
    this.setState({
      price:(this.state.price+900),
      quan:(this.state.quan+1)
    
    })
   
  }
}
buttonM=()=>
{
  if(this.state.price>900)
  {
    this.setState(
      {price:(this.state.price-100),
        quan:(this.state.quan-1)
    
    
    })
   
  }
}
  

    render(){
  
       return(
         <ScrollView>
          <View>
            <Image style={styles.image} source={require( './assets/indoor/snake.jpg')}/>
           
           <Text style={styles.text}>Snake Plant</Text>
           <Text>
           If you're looking for an easy-care houseplant, you can't do much better than snake plant. 
           This hardy indoor is still popular today -- generations of gardeners have called it a favorite -- 
           because of how adaptable it is to a wide range of growing conditions. Most snake plant varieties have 
           stiff, upright, sword-like leaves that may be banded or edged in gray, silver, or gold. Snake plant's
            architectural nature makes it a natural choice for modern and contemporary interior designs. It's one of 
            the best houseplants around! 
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