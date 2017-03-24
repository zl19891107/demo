
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

import TWebView from './webview';

const nearByURL = 'http://localhost:8081/android_views/HTML/nearby.html';
//http://localhost:8081/android_views/HTML/nearby.html;https://www.baidu.com/index.php?tn=49029047_oem_dg&ch=33

class Myapp extends Component{
  render(){
    return(<TWebView url={nearByURL} isNearBy={true}/>);
  }
}

module.exports = Myapp;

