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

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            rate: 1,
            muted: true
        }
    }

    _backToSetting() {
        this.props.navigator.pop()
    }
    render() {
        var data = this.props.data
        return ( < View >
            <
            Text onPress = { this._backToSetting.bind(this) }
            style = { styles.text } >
            列表 < /Text> </View >
        );
    }
}
var styles = StyleSheet.create({
    text: {
        fontSize: 60
    },
    video: {
        width: Util.size.width,
        height: Util.size.width * 0.7,
        alignItems: 'center',
        borderColor: 'rgba(50,50,50,0.1)',
        borderWidth: 2
    }
});
module.exports = List;