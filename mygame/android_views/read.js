import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
  } from 'react-native';
 
import Util from './util'; 
import Category from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';
 
class Hr extends Component{
  render(){
    return(
      <View>
        <View style ={styles.hr} ></View>
      </View>
    );
  }
}

class Read extends Component{
  constructor(){
    super();
    this.state={
      isShow:false,
    };
  }

  render(){
    return(
        <View style = {styles.container}> 
          <Search/>
         <Hr/>
         {
           this.state.isShow?
           <ScrollView style = {styles.container} >
            <List/>
            <Recommend/>
            <Category/>
            <Topic/>
            
          </ScrollView>
         :null
         }   
        </View>
    );
  }

    componentDidMount(){
    this.setState({
      isShow:true,
    });
  }
}



var styles = StyleSheet.create({
   container:{
       // flex:1,
    },
   
     hr:{
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    marginTop:20,
    marginBottom:10
  },

});
module.exports = Read;