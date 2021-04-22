import React from 'react'
import {Text,TextInput,Image, View,StyleSheet,ScrollView} from 'react-native'
import Card from './card'
import Info from './Info'
export default class Indoor extends React.Component{

  inn=()=>
  {
    { this.props.navigation.navigate('Info')}
  }
    render(){
        return(
          <View>
              <ScrollView>
            <Card  name={'Snake Plant'} s={require( './assets/indoor/snake.jpg')} price={'Rs 900'} sid={this.inn}/>  
            <Card  name={'Aloe Vera'} s={require( './assets/indoor/aloe_vera.jpeg')} price={'Rs 1000'} sid={this.inn} />
            <Card  name={'Bamboo'} s={require( './assets/indoor/bamboo.jpg')} price={'Rs 1500'} sid={this.inn}/>
             <Card  name={'Lily Plant'} s={require( './assets/indoor/lily.jpg')} price={'Rs 500'} sid={this.inn}/>
             <Card  name={'MoneyPlant'} s={require( './assets/indoor/moneyplant.jpg')} price={'Rs 300'} sid={this.inn}/>
             </ScrollView>
          </View>
        );
    }
}
