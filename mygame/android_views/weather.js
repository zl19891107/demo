import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';


class Weather extends Component{
  render(){
    return(
        <View> 
         <Text >
           天气
          </Text>
        </View>
    );
  }
}

module.exports = Weather;