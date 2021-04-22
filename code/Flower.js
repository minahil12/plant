import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView} from 'react-native'
import Card from './card'

export default class Flower extends React.Component{

  inn=()=>
  {
    { this.props.navigation.navigate('info2')}
  }
    render(){
        return(
          <View>
              <ScrollView>
            <Card  name={'Rose'} s={require( './assets/seeds/flowers/rose.jpg')} price={'Rs 100'} sid={this.inn}/>  
            <Card  name={'Lupine Flower'} s={require( './assets/seeds/flowers/LupineFlower.jpg')} price={'Rs 1000'} sid={this.inn}/>
            <Card  name={'Statice White'} s={require( './assets/seeds/flowers/staticeWhite.jpg')} price={'Rs 1500'} sid={this.inn}/>
             <Card  name={'Gailardia Pullchella'} s={require( './assets/seeds/flowers/gaillardiaPulchella.jpg')} price={'Rs 500'} sid={this.inn}/>
             <Card  name={'Helichrysum'} s={require( './assets/seeds/flowers/helichrysum.jpg')} price={'Rs 300'} sid={this.inn} />
             </ScrollView>
          </View>
        );
    }
}