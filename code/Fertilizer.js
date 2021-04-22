import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView} from 'react-native'
import Card from './card'

export default class Fertilizer extends React.Component{
  inn=()=>
  {
    { this.props.navigation.navigate('info5')}
  }
    render(){
        return(
          <View>
              <ScrollView>
            <Card  name={'All purpose'} s={require( './assets/fertilizers/allpurpose.jpg')} price={'Rs 250'} sid={this.inn}/>  
            <Card  name={'Gro Sure'} s={require( './assets/fertilizers/groSure.jpg')} price={'Rs 200'} sid={this.inn}/>
            <Card  name={'Hydroponics'} s={require( './assets/fertilizers/hydroponics.jpg')} price={'Rs 300'} sid={this.inn}/>
             <Card  name={'Sulphate iron'} s={require( './assets/fertilizers/sulphateiron.jpg')} price={'Rs 500'} sid={this.inn} />
             <Card  name={'Vigoten'} s={require( './assets/fertilizers/vigoten.jpg')} price={'Rs 250'} sid={this.inn}/>
             </ScrollView>
          </View>
        );
    }
}