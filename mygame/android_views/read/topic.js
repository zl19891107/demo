import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';


import Util from './../util';
import List from './list';
import TWebView from './../webview';

class Topic extends Component{
  render(){
    return(
        <View style={styles.container}> 
         <View>
             <Text style={styles.text1} >推荐专题</Text>
         </View>
         <View style={styles.img_view} >
            <View style={styles.img_item}>
                <Image  resizeMode="cover" style={styles.img} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3656023545,38547611&fm=23&gp=0.jpg'}} />
            </View>
            <View style={styles.img_item}>
                <Image resizeMode="cover" style={styles.img}  source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3656023545,38547611&fm=23&gp=0.jpg'}} />
            </View>
         </View>
          
          <View>
             <Text style={styles.text1}>推荐专题</Text>
         </View>
        </View>
    );
  }
}
var styles = StyleSheet.create({
    text1:{
        fontWeight: '300',
        fontSize:15,
        color: '#7D7D81'
    },
    container:{
        marginLeft:10,
        marginRight:10
    },
    img_item:{
        flex:1,
    },
    img_view:{
        flexDirection:'row',
    },
    text:{
        fontSize:60
    },
    img:{
        width:(Util.size.width-30)/2,
        height:100,
        borderRadius:5
    }
});
module.exports = Topic;