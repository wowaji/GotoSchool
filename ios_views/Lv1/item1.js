/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var Header=require('../common/Header');
var ItemCheckbox = require('react-native-item-checkbox');
var item2=require('./item2');
var {AudioRecorder, AudioUtils} = require('react-native-audio');
var AudioPlayer = require('react-native-audioplayer');
var {
    StyleSheet,
    View,
    Text,
    Image,
    NavigatorIOS,
    Dimensions,
    AsyncStorage,
    TouchableOpacity
} = React;

var windowsSize = Dimensions.get('window');

var item1= React.createClass({
  getInitialState() {
  return {

  value1:'0',
  value2:'0',
  value3:'0',
  value4:'0',
  value5:'0',
  value6:'0',
  }
  },
  componentDidMount() {
    var audioPath = AudioUtils.DocumentDirectoryPath + '/1.caf';
    AudioRecorder.prepareRecordingAtPath(audioPath);
    AudioRecorder.onProgress = (data) => {
      this.setState({currentTime: Math.floor(data.currentTime)});
    };
    AudioRecorder.onFinished = (data) => {
      this.setState({finished: data.finished});
    };
  },
                             render:function(){
                             return(<View>

                                    <Image style={styles.bg}  resizeMode="stretch" source={require('image!Image-5')} >

                                    <View>
                                    <Header  navigator={this.props.navigator}
                                    initObj={{
                                    title: "123"
                                    }}/>
                                    </View>


                                    <View  style={styles.title}></View>


                                    <View  style={styles.flexall}>


                                    <View  style={styles.flex0}>
                                    <View  style={styles.flex00}>
                                        <Image style={styles.im1} source={require('image!Image-6') }>

                                    <View style={styles.a3}>

                                                    <View style={styles.a31}>
                                                    <View  style={styles.f1}>
                                              <TouchableOpacity   onPress={() => this._play()}>
                                                 <Image style={styles.icon}  resizeMode="contain"  source = {require('image!icon-1')}>
                                                 </Image>
                                              </TouchableOpacity>
                                              </View>
                                              <View style={styles.f1}>
                                        <TouchableOpacity   onPress={() => this._stop()}>
                                           <Image style={styles.icon}  resizeMode="contain"  source = {require('image!icon-4')}>
                                           </Image>
                                        </TouchableOpacity>
                                        </View>

                                                    </View>

                                                    <View style={styles.a32}>
                                                        <View style={styles.ask}>
                                                        <Text style={styles.askfont}>小朋友，请你做个自我介绍吧！</Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </Image>
                                    </View>
                                    </View>

                                    <View  style={styles.flex1}>
                                        <View style={styles.recorder}>
                                            <View style={styles.recorder2}>
                                    <View style={styles.f1}>
                                                <TouchableOpacity   onPress={() => this._record()}>
                                             <Image style={styles.icon2}  resizeMode="contain"  source = {require('image!icon-2')}>
                                             </Image>
                                          </TouchableOpacity>

                                                </View>

                                    <View style={styles.f1}>
                                                <TouchableOpacity onPress={() => this._stopRecord()}>
                                                <Image style={styles.icon2}  resizeMode="contain"  source = {require('image!icon-4')}>
                                                </Image>
                                                </TouchableOpacity>

                                                </View>

                                            </View>

                                            <View style={styles.recorder3}>
                                              <TouchableOpacity onPress={() => this._playRecord()}>
                                                    <Image style={styles.re} resizeMode="contain" source={require('image!Image-7') }></Image>
                                            </TouchableOpacity>
                                    </View>
                                        </View>
                                    </View>

                                    <View  style={styles.flex2}>
                                    <View style={styles.c3}>
                                        <View style={styles.c31}>
                                            <Text style={styles.askfont}>孩子介绍完毕后请家长选择孩子说到了以下哪些信息？</Text>
                                        </View>

                                        <View style={styles.c32}>
                                                 <View style={styles.f1}>
                                                 <View style={styles.check}>
                                                         <ItemCheckbox onCheck={this._onCheckCallback1} onUncheck={this._onUnCheckCallback1}
 backgroundColor ='whtie'  color="#76ff68"></ItemCheckbox>
                                                         <Text  style={styles.fontan}>姓名</Text>
                                                     </View>

                                                     <View style={styles.check}>
                                                         <ItemCheckbox onCheck={this._onCheckCallback2} onUncheck={this._onUnCheckCallback2} backgroundColor ='whtie'  color="#76ff68"></ItemCheckbox>
                                                         <Text  style={styles.fontan}>年龄</Text>
                                                     </View>

                                                     <View style={styles.check}>
                                                         <ItemCheckbox onCheck={this._onCheckCallback3} onUncheck={this._onUnCheckCallback3} backgroundColor ='whtie'  color="#76ff68"></ItemCheckbox>
                                                         <Text  style={styles.fontan}>幼儿园</Text>
                                                     </View>

                                                     <View style={styles.check}>
                                                         <ItemCheckbox onCheck={this._onCheckCallback4} onUncheck={this._onUnCheckCallback4} backgroundColor ='whtie'  color="#76ff68"></ItemCheckbox>
                                                         <Text  style={styles.fontan}>兴趣爱好</Text>
                                                     </View>

                                                     <View style={styles.check}>
                                                         <ItemCheckbox onCheck={this._onCheckCallback5} onUncheck={this._onUnCheckCallback5} backgroundColor ='whtie'  color="#76ff68"></ItemCheckbox>
                                                         <Text  style={styles.fontan}>爸爸妈妈的相关信息</Text>
                                                     </View>

                                                     <View style={styles.check}>
                                                         <ItemCheckbox onCheck={this._onCheckCallback6} onUncheck={this._onUnCheckCallback6} backgroundColor ='whtie'  color="#76ff68"></ItemCheckbox>
                                                         <Text  style={styles.fontan}>其他有意思的人或事</Text>
                                                     </View>

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
                             _play: function(){
                               AudioPlayer.play('t1.mp3');
                             },
                             _stop: function() {
                               AudioPlayer.play('');
                             },
                             _record:function(){
                               AudioRecorder.startRecording();
                                this.setState({recording: true, playing: false});
                              },
                             _stopRecord:function(){
                               AudioRecorder.stopRecording();
                                this.setState({stoppedRecording: true, recording: false});
                              },

                             _playRecord:function(){
                               if (this.state.recording) {
                              this._stop();
                              this.setState({recording: false});
                            }
                            else if (this.state.playing) {
                            AudioRecorder.stopPlaying();
                            this.setState({playing: false, stoppedPlaying: true});
                          }
                          else{AudioRecorder.playRecording('/1.caf');
                            this.setState({playing: true});
                          }
                        },


                             _onCheckCallback1: function() {
                               this.setState({
                                             value1: 10,
                                             });
                               ;},
                               _onUnCheckCallback1: function() {
                                 this.setState({
                                               value1: 0,
                                               });
                                 ;},
                                 _onCheckCallback2: function() {
                                   this.setState({
                                                 value2: 10,
                                                 });
                                   ;},
                                   _onUnCheckCallback2: function() {
                                     this.setState({
                                                   value2: 0,
                                                   });
                                     ;},
                                     _onCheckCallback3: function() {
                                       this.setState({
                                                     value3: 10,
                                                     });
                                       ;},
                                       _onUnCheckCallback3: function() {
                                         this.setState({
                                                       value3: 0,
                                                       });
                                         ;},
                                         _onCheckCallback4: function() {
                                           this.setState({
                                                         value4: 10,
                                                         });
                                           ;},
                                           _onUnCheckCallback4: function() {
                                             this.setState({
                                                           value4: 0,
                                                           });
                                             ;},
                                             _onCheckCallback5: function() {
                                               this.setState({
                                                             value5: 10,
                                                             });
                                               ;},
                                               _onUnCheckCallback5: function() {
                                                 this.setState({
                                                               value5: 0,
                                                               });
                                                 ;},
                                                 _onCheckCallback6: function() {
                                                   this.setState({
                                                                 value6: 10,
                                                                 });
                                                   ;},
                                                   _onUnCheckCallback6: function() {
                                                     this.setState({
                                                                   value6: 0,
                                                                   });
                                                     ;},
                             nextbtn:function(){
                               if (this.state.recording) {
                              this._stop();}
                            else if (this.state.playing) {
                                AudioRecorder.stopPlaying();
                              };
                              var r1=parseInt(this.state.value1);
                              var r2=parseInt(this.state.value2);
                              var r3=parseInt(this.state.value3);
                              var r4=parseInt(this.state.value4);
                              var r5=parseInt(this.state.value5);
                              var r6=parseInt(this.state.value6);
                               var result1;
                               result1=(r1+r2+r3+r4+r5+r6);
                               AsyncStorage.setItem("result[1]",JSON.stringify(result1));
                             this.props.navigator.push({
                                                       component:item2,
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
                               width: windowsSize.width*0.98,
                               height: windowsSize.height*0.28,
                               },

//                               第一部分＝＝＝＝＝＝
                               flex0:{flex:2,
                               },
                               flex00:{flex:1,
                               borderRadius:10,
                               alignItems: 'stretch',
                               overflow:'hidden',
                               },
                               a3:{
                               flex:1,
                               flexDirection:'row',
                               },
                               a31:{
                               flex:2,
                               justifyContent:'center',
                               alignItems:'center',
                               borderBottomWidth:1,
                               borderBottomColor:'#999',
                               },
                               a32:{
                               flex:4,
                               justifyContent:'center',
                               alignItems:'center',
                               borderBottomWidth:1,
                               borderBottomColor:'#999',
                               },
                               icon:{
                               width: windowsSize.width*0.15,
                               flex:1,
                               },
                               ask:{
                               justifyContent:'center',
                               alignItems:'center',
                               width: windowsSize.width*0.55,
                               height: windowsSize.height*0.2,
                               backgroundColor:'white',
                               borderRadius:10,
                               opacity:0.7,
                               },
                               askfont:{fontSize:13,
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
                               justifyContent:'center',
                               alignItems:'center',
                               },
                               recorder3:{
                               backgroundColor:'#fff',
                               flex:4,
                               justifyContent:'center',
                               alignItems:'center',
                               },

                               icon2:{
                               width: windowsSize.width*0.15,
                               alignItems:'center',
                               flex:1,
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
                               width: windowsSize.width*0.6,
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
                               },
                               c33:{
                               flex:1.2,
                               backgroundColor:'#fff',
                                alignItems:'flex-end',
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
                               fontSize:11,
                               marginLeft:10,
                               },

                               });
module.exports =item1;
