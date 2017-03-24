import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';


class Rcommend extends Component{
  render(){
    return(
        <View> 
         <Text style ={styles.text} >
           推荐
          </Text>
        </View>
    );
  }
}
var styles = StyleSheet.create({
    text:{
        fontSize:60
    }
});

module.exports =  Rcommend ;