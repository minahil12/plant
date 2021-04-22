
import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView,Button} from 'react-native'
import Card from './card'

export default class Info extends React.Component{
  state=
  {
    price:100,
    quan:1
  }
buttonP=()=>
{
  
  {
    this.setState({
      price:(this.state.price+100),
      quan:(this.state.quan+1)
    
    })
   
  }
}
buttonM=()=>
{
  if(this.state.price>100)
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
            <Image style={styles.image} source={require( './assets/seeds/flowers/rose.jpg')}/>
           
           <Text style={styles.text}>Rose</Text>
           <Text>
           Roses are shrubs with prickly stems, pinnate compound leaves, and ornamental flowers, usually fragrant.
           Ideally, roses should be grown in sunny and open locations, with good air circulation at the base of the plant, in rich and well-draining soil. Some roses, notably the old ramblers and the modern hybrid musks, can tolerate some shade in any zone and may even prefer shade in the hottest zones.
           Roses require 1-2 inches of water a week to thrive. In dry climates, this water has to be supplied by the 
           gardener, and although overhead watering was once discouraged, it is the logical choice. The water supplied 
           by a gardener supplements rain, which falls from overhead. Overhead watering keeps the foliage and blooms 
           clean, retards powdery mildew, and repels some pests.
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