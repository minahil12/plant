import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView} from 'react-native'
import Card from './card'

export default class Vegetable extends React.Component{

  inn=()=>
  {
    { this.props.navigation.navigate('info4')}
  }
    render(){
        return(
          <View>
              <ScrollView>
            <Card  name={'Beetroot'} s={require( './assets/seeds/vegetables/beetroot.jpg')} price={'Rs 70'}  sid={this.inn} />  
            <Card  name={'Cabbage'} s={require( './assets/seeds/vegetables/cabbage.jpg')} price={'Rs 50'}  sid={this.inn}/>
            <Card  name={'Cucumber'} s={require( './assets/seeds/vegetables/cucumber.jpg')} price={'Rs 80'}  sid={this.inn}/>
             <Card  name={'Onion'} s={require( './assets/seeds/vegetables/onion.jpeg')} price={'Rs 50'}  sid={this.inn}/>
             <Card  name={'EggPlant'} s={require( './assets/seeds/vegetables/eggplants.jpg')} price={'Rs 38'}  sid={this.inn}/>
             </ScrollView>
          </View>
        );
    }
}