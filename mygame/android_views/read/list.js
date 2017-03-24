import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
 import Util from '../util'; 
//默认导出

// var Video=require('react-native-video').default;
  // import Video from 'react-native-video';  

class List extends Component{

  constructor(props){
    super(props);
    this.state = {
      data : this.props.data,
      rate : 1,
      muted : true
    }
  }

  _loadStart() {

  }            
  _setDuration() {

  }            
  
  _onTimedMetadata() {

  }            
  
  _setTime() {

  }            
  _onEnd() {

  }            
  _videoError() {

  }            
  _onBuffer() {

  }    

  _backToSetting(){
    this.props.navigator.pop()
  }
  render(){
    var data = this.props.data
    return(
        <View> 
         <Text onPress={ this._backToSetting.bind(this) } style ={styles.text} >
              列表
          </Text>
           {/*<Video style ={styles.video}  
           source={{uri: data.video }}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            rate={1.0}                              // 0 is paused, 1 is normal.
            volume={1.0}                            // 0 is muted, 1 is normal.
            muted={false}                           // Mutes the audio entirely.
            paused={false}                          // Pauses playback entirely.
           rate = {this.state.rate}
            resizeMode="cover"                      // Fill the whole screen at aspect ratio.* 
            repeat={true}                           // Repeat forever.
            playInBackground={false}                // Audio continues to play when app entering background.
           
          
            onLoadStart={this._loadStart}            // Callback when video starts to load
            onLoad={this._setDuration}               // Callback when video loads
            onProgress={this._setTime}               // Callback every ~250ms with currentTime
            onEnd={this._onEnd}                      // Callback when playback finishes
            onError={this._videoError}               // Callback when video cannot be loaded
            onBuffer={this._onBuffer}                // Callback when remote video is buffering
            onTimedMetadata={this._onTimedMetadata}  // Callback when the stream receive some metadata
             />*/}
        </View>
    );
  }
}
var styles = StyleSheet.create({
    text:{
        fontSize:60
    },
    video:{
       width:  Util.size.width,
      height: Util.size.width*0.7,
       alignItems:'center',
       borderColor:'rgba(50,50,50,0.1)',
        borderWidth:2
    }
});
module.exports = List;