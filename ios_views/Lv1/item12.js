/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var Header=require('../common/Header');
var item13=require('./item13');
import Radio, {RadioButton} from 'react-native-simple-radio-button';
var AudioPlayer = require('react-native-audioplayer');

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    NavigatorIOS,
    Dimensions,
    AsyncStorage,
} = React;

var windowsSize = Dimensions.get('window');

var item12= React.createClass({
  getInitialState: function() {
  return {
  types: [{label: '只拍对一题', value: 3},
           {label: '拍对两题', value: 6},
           {label: '拍对三题', value: 10},
           ],
  value: 0,
  value1Index: 0,
                                             }
  },
  render:function(){
  return(<View >

         <Image   style={styles.bg}  resizeMode="stretch" source={require('image!Image-8')} >

         <View>
         <Header  navigator={this.props.navigator}
         initObj={{
         title: "123"
         }}/>
         </View>


         <View  style={styles.title}></View>


         <View  style={styles.flexall}>

         <View  style={styles.flex0}>
         <View style={styles.f1}>
                <View style={styles.f1}>
                     <View style={styles.a3}>
                         <View style={styles.a31}>
                           <TouchableOpacity   onPress={() => this._play1()}>
                         <Image style={styles.icon} resizeMode="contain"  source={require('image!icon-1') }></Image>
                          </TouchableOpacity>
                         </View>
                         <View style={styles.a32}>
                             <View style={styles.ask}>
                             <Text style={styles.askfont}>小朋友，现在我们来玩拍手游戏，请你认真听老师拍了几下，我开始了哦，现在请你和我拍得同样多。</Text>
                              <Text style={styles.askfont2}>答案5</Text>
                             </View>
                         </View></View>

                          <View style={styles.f1}>
                         <View style={styles.a3}>
                         <View style={styles.a31}>
                          <TouchableOpacity   onPress={() => this._play2()}>
                         <Image style={styles.icon} resizeMode="contain"   source={require('image!icon-1') }></Image>
                         </TouchableOpacity>
                         </View>
                         <View style={styles.a32}>
                         <View style={styles.ask}>
                         <Text style={styles.askfont}>请听这次老师拍了几下，请你比我多拍2下。</Text>
                         <Text style={styles.askfont2}>答案6</Text>
                         </View>
                         </View>
                         </View></View>

                          <View style={styles.f1}>
                         <View style={styles.a3}>
                         <View style={styles.a31}>
                          <TouchableOpacity   onPress={() => this._play3()}>
                         <Image style={styles.icon} resizeMode="contain"   source={require('image!icon-1') }></Image>
                          </TouchableOpacity>
                         </View>
                         <View style={styles.a32}>
                         <View style={styles.ask}>
                         <Text style={styles.askfont}>最后一次，请听老师拍手几下，请你比我少拍2下。</Text>
                         <Text style={styles.askfont2}>答案5</Text>
                         </View>
                         </View>
                         </View></View>
                 </View>
         </View>
         </View>

         <View  style={styles.flex2}>
             <View style={styles.c3}>
                 <View style={styles.c31}>
                 <Text style={styles.askfont}>请家长选择小孩拍对的次数:</Text>
                 </View>

         <View style={styles.c32}>
         <View style={styles.f1,styles.ml}>
         <Radio
           radio_props={this.state.types}
           initial={0}
           formHorizontal={false}
           labelHorizontal={true}
           buttonColor={'#2196f3'}
           animation={true}
           onPress={(value) => {this.setState({value:value})}}
           />
         </View>
       </View>

         <View style={styles.c33}>
         <View style={styles.f1}></View>
         <View>
         <TouchableOpacity onPress={this.nextbtn}>
         <Image style={styles.iconne}  source={require('image!next') }></Image>
         </TouchableOpacity>
         </View>
         </View>
         </View>

         </View>

         </View>

         </Image>
         </View>

         );
  },
  _play1: function(){
    AudioPlayer.play('t12-1.mp3');
  },
  _play2: function(){
    AudioPlayer.play('t12-2.mp3');
  },
  _play3: function(){
    AudioPlayer.play('t12-3.mp3');
  },
  nextbtn:function(){
if (this.state.playing) {
     AudioRecorder.stopPlaying();
   };
    var v12=(this.state.value);
AsyncStorage.setItem("result[12]",JSON.stringify(v12));
  this.props.navigator.push({
                            component: item13,
                            passProps: {
                            },
                            });

  },

  });

var styles = StyleSheet.create({
  title:{
  height:windowsSize.height*0.02,},

  bg:{ flex:1,
  width: windowsSize.width,
  height: windowsSize.height,
  },

//                               总框架＝＝＝＝＝＝
  f1:{
  flex:1,
  },

  flexall:{
  marginRight:8,
  marginLeft:8,
  marginBottom:8,
  marginTop:8,
  flex:1,
  },

  flex2:{
  flex:4,
  marginTop:windowsSize.height*0.01,
  borderRadius:10,
  overflow:'hidden',
  },

//                                背景＝＝＝＝＝＝＝
  im1:{
  flex:1,
  width: windowsSize.width*0.95,
  },

//                               第一部分＝＝＝＝＝＝
  flex0:{flex:6,
  borderRadius:10,
  },
  flex00:{flex:1,
  alignItems: 'stretch',
  overflow:'hidden',
  borderRadius:10,
  },
  a3:{
  flex:1,
  flexDirection:'row',
  },
  a31:{
  flex:2,
  justifyContent:'center',
  alignItems:'center',
  },
  a32:{
  flex:4,
  justifyContent:'center',
  alignItems:'center',
  },
  icon:{
  width: windowsSize.width*0.15,
  flex:1,
  },
  ask:{
  justifyContent:'center',
  alignItems:'center',
  width: windowsSize.width*0.6,
  backgroundColor:'white',
  borderRadius:10,
  opacity:0.7,
  },
  askfont:{fontSize:13,
    marginLeft:5,
    marginRight:5,
    marginTop:5,
  },
  askfont2:{fontSize:12,
  color:'#bbb',
  marginBottom:5,
  },

//                                 第二部分＝＝＝＝＝＝＝＝
  flex1:{flex:2,
  marginTop:windowsSize.height*0.01,
  borderRadius:10,
  flexDirection:'row',
  overflow:'hidden',
  },

  recorder:{
  flexDirection:'row',
  flex:1,
  borderBottomWidth:1,
  borderBottomColor:'#999',
  },

  recorder2:{
  backgroundColor:'#FDF5DA',
  flex:2,
  borderBottomWidth:1,
  borderBottomColor:'#999',
  },
  recorder3:{
  backgroundColor:'#fff',
  flex:4,
  justifyContent:'center',
  alignItems:'center',
  borderBottomWidth:1,
  borderBottomColor:'#999',
  },

  icon2:{
  width: windowsSize.width*0.15,
  alignItems:'center',
  },
  i2:{
  justifyContent:'center',
  alignItems:'center',
  flex:1,
  },
  i3:{
  justifyContent:'center',
  alignItems:'center',
  flex:1,
  },

  re:{
  marginBottom:5,
  marginTop:5,
  height: windowsSize.height*0.2,
  resizeMode: Image.resizeMode.contain,
  },

//                               第三部分＝＝＝＝＝
  c3:{
  flex:1,
  borderBottomWidth:1,
  borderBottomColor:'#999',
  },
  c31:{
  flex:1.2,
  backgroundColor:'#76ff68',
  justifyContent:'center',
  alignItems:'center',
  },
  c32:{
  flex:5,
  backgroundColor:'#fff',
   alignItems:'flex-start',
  },
  c33:{
  flex:1.5,
  backgroundColor:'#fff',
   alignItems:'flex-end',
},
ml:{
  marginLeft:20,
  marginTop:10,
},

  iconne:{
    marginBottom:2,
    height:35,
    width:95,
    resizeMode: Image.resizeMode.contain,
    marginRight:4,
  },

  check:{
  flex:1,
  alignItems:'center',
  flexDirection:'row',
  marginTop:7,
  marginLeft:20,
  },
  fontan:{
  fontSize:12,
  marginLeft:10,
  },

  });
module.exports =item12;
