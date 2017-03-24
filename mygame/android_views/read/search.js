import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   TextInput,
   ScrollView,
   Image,
  } from 'react-native';

import Util from './../util';
import List from './list';

class Search extends Component{
  render(){
    return(
        <View style = {styles.container}> 
          
        <TextInput  style ={styles.search_input}  placeholder="搜索"/>
        </View>
    );
  }
}
var styles = StyleSheet.create({
    container:{
        //flex:1,
    },
    search_input:{
     marginLeft: 10,
    marginRight: 10,
    height: 35,
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    borderRadius:3,
    marginTop:25,
    paddingLeft:10,
    fontSize:15
    }
});

module.exports = Search;