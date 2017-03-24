import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  RefreshControl,
  Navigator
} from 'react-native';



import Util from './util'; 

import List from './read/list';
import request from './common/request';
import config from './common/config';

var cachedResults={
  nextPage:1,
  items:[],
  total:0 
}
class Item extends Component{


  constructor(props){
    super(props);
    var row = this.props.row;
    this.state = {
      // up:row.voted,
      up:1,
      row: row,
    }  
  }
  
  _up(){
    var that = this
    var up = !this.state.up
    var row = this.state.row
    var url = config.api.base+config.api.up
    var body = {
      id : row._id,
      up : up?0:1,
      accessToken:"123"
    }
    request.post(url,body)
      .then(function(data){
          if(data&&data.success){
              that.setState({
                up:up
              })
          }else{
            alert("网络错误！")
          }
      })
      .catch(function(err){
        console.log("网络错误！")
        alert("网络错误！")
      })
  }
  render(){
    var row = this.state.row
    return(
      <TouchableHighlight onPress ={ this.props.onSelect } >
           <View style={styles.item}>
          <Text>{ row.title }</Text>
            <Image
                style={styles.button}
                source={{uri: row.thumd}} />
                  <View style={styles.icons}>
                    <View style={styles.icon} onPress={ this._up.bind(this)}  >
                      {
                        this.state.up? 
                      <Text  onPress={ this._up.bind(this)} 
                      style={{ fontFamily:'iconfont' ,fontSize:25}}>&#xe607;</Text>
                        :<Text onPress={ this._up.bind(this)}
                         style={{ fontFamily:'iconfont' ,fontSize:25,color:'red'}}>&#xe623;</Text>
                      }
                      <Text>喜欢</Text>
                    </View>
                    <View style={styles.icon}>
                      <Text style={{ fontFamily:'iconfont',fontSize:25 }}>&#xe627;</Text>
                      <Text>评论</Text>
                    </View>
                  </View>
              </View>
        </TouchableHighlight>  
    )
  }
}

class Setting extends Component{

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isRefreshing:false,
      isLoadingTail:false,
      dataSource: ds.cloneWithRows([]),
    };
  }

  _renderRow(row){
     return( 
       <Item key = {row._id} 
       onSelect ={() => this._loadPage(row)}
        row={row}/>
        
    );       
  }
  _loadPage(row){
    this.props.navigator.push({
      name:'list',
      component:List,
      params:{
        data:row
      }
    })
  }
  componentDidMount(){
    this._fetchData(1)
  }

   _fetchData(page) {
     
    var that = this
    if(page !== 0){
     this.setState({
       isLoadingTail:true
     })
    }
    else{
      this.setState({
       isRefreshing:true
     })
    }
     request.get(config.api.base + config.api.list,{
         accessToken:'123',
         page:page
     })
      .then((data) => { 
         if (data.success){
           var items = cachedResults.items.slice()
           if(page !==0){
           items = items.concat(data.data)
           cachedResults.nextPage += 1
          }
          else{
            items = data.data.concat(items)
          }
            
           cachedResults.items = items
           cachedResults.total = data.total
           setTimeout(function() {
             if(page !==0){

             that.setState({
               isLoadingTail:false,
                 dataSource: that.state.dataSource.cloneWithRows(
                   cachedResults.items),
             })
            }
            else{
              that.setState({
               isRefreshing:false,
                 dataSource: that.state.dataSource.cloneWithRows(
                   cachedResults.items),
             })

            }
           },500)
         }     
      })
      .catch((error) => {
         this.setState({
               isLoadingTail:false,
             })
        console.error(error);
      });
  }

  _hasMore(){
   return cachedResults.items.length !== cachedResults.total   
  } 
  
  _fetchMoreData(){
    if( !this._hasMore() || this.state.isLoadingTail){
      return 
    }
    var page = cachedResults.nextPage
   
     this._fetchData(page)
  }
  _renderFooter(){
    if(!this._hasMore()&&cachedResults.total !==0){
       return (
        <View><Text>已全部加载</Text></View>
       )
    }
    else{
       return (
        <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
       )
    }
  }
_onRefresh(){
 if( !this._hasMore() || this.state.isRefreshing){
      return 
    }
   
    this._fetchData(0)
}
  render(){
    return(
        <View style = {styles.container}> 
           
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
        onEndReached={this._fetchMoreData.bind(this)}
        enableEmptySections={true}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#ff0000"
            title="加载中..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
        onEndReachedThreshold = {20}
        enableEmptySections = {true}
        automaticallyAdjustContentInsets = {false}
        showsVerticalScrollIndicator = {false}
    />
        </View>
    )
  }
}

var styles = StyleSheet.create({
   container:{
      flex:1,
    },
  item:{
      width:  Util.size.width,
      height: Util.size.width*0.7,
       alignItems:'center',
       borderColor:'rgba(50,50,50,0.1)',
        borderWidth:2
    },
    button:{
      width:  Util.size.width-10,
      height: Util.size.width*0.5
  },
  icons:{
    flex:1,
       flexDirection: 'row',
        justifyContent: 'space-around',
  },
  icon:{
        flex:1,
       flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginLeft:5,
        marginRight:5,
        borderColor:'rgba(100,100,100,0.1)',
        borderWidth:2
  }

});

module.exports = Setting;