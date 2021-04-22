import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView} from 'react-native'
import Card from './card'

export default class outdoor extends React.Component{
  inn=()=>
  {
    { this.props.navigation.navigate('info1')}
  }
    
    render(){
        return(
          <View>
              <ScrollView>
            <Card  name={'Bottle Palm Tree'} s={require( './assets/outdoor/bottlePlam.jpg')} price={'Rs 900'} sid={this.inn} />  
            <Card  name={'Crassula Campfire'} s={require( './assets/outdoor/CrassulaCampfire.jpg')} price={'Rs 1000'} />
            <Card  name={'Fern'} s={require( './assets/outdoor/fern.jpg')} price={'Rs 1500'} />
             <Card  name={'Jasmine Chameli'} s={require( './assets/outdoor/jasmineChameli.jpg')} price={'Rs 500'} />
             <Card  name={'Lal Jhari'} s={require( './assets/outdoor/LalJhari.jpg')} price={'Rs 300'} />
             </ScrollView>
          </View>
        );
    }
}