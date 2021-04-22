import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView} from 'react-native'
import Card from './card'

export default class Flower extends React.Component{

  inn=()=>
  {
    { this.props.navigation.navigate('info3')}
  }
    render(){
        return(
          <View>
              <ScrollView>
            <Card  name={'Apple'} s={require( './assets/seeds/fruits/apple.jpg')} price={'Rs 50'}  sid={this.inn}/>  
            <Card  name={'Apricot'} s={require( './assets/seeds/fruits/apricot.jpg')} price={'Rs 10'}  sid={this.inn}/>
            <Card  name={'Blueberry'} s={require( './assets/seeds/fruits/blueberry.jpg')} price={'Rs 150'}  sid={this.inn}/>
             <Card  name={'Cherry'} s={require( './assets/seeds/fruits/cherry.jpg')} price={'Rs 90'} sid={this.inn} />
             <Card  name={'Coconut'} s={require( './assets/seeds/fruits/cocunut.jpg')} price={'Rs 30'}  sid={this.inn}/>
             </ScrollView>
          </View>
        );
    }
}