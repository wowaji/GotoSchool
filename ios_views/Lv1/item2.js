/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var Header=require('../common/Header');
var item3=require('./item3');
var {AudioRecorder, AudioUtils} = require('react-native-audio');
var AudioPlayer = require('react-native-audioplayer');
import Radio, {RadioButton} from 'react-native-simple-radio-button';

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

var item2= React.createClass({
  getInitialState: function() {
  return {
  types: [{label: '孩子不能或不愿模仿', value: 2},
           {label: '可以模仿，但有3个或3个以上错误', value: 5},
           {label: '可以模仿，但有1~2个错误', value: 7},
           {label: '完全正确', value: 10},],
  value: 0,
  valueIndex: 0,
                                             }
  },
  componentDidMount() {
    var audioPath = AudioUtils.DocumentDirectoryPath + '/2.caf';
    AudioRecorder.prepareRecordingAtPath(audioPath);
    AudioRecorder.onProgress = (data) => {
      this.setState({currentTime: Math.floor(data.currentTime)});
    };
    AudioRecorder.onFinished = (data) => {
      this.setState({finished: data.finished});
    };
  },
                             render:function(){
                             return(<View >

                                        <Image  style={styles.bg} resizeMode="stretch" source={require('image!Image-8')} >

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
                                                        <Image style={styles.im1} resizeMode="cover" source={require('image!Image-6') }>

                                                      <View style={styles.a3}>

                                                            <View style={styles.a31}>
                                                            <View style={styles.f1}>
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
                                                            <Text style={styles.askfont}>请告知孩子，接下来会有中文儿歌的播放.请孩子认真听，听完后要学着说一遍。</Text>
                                                             <Text style={styles.askfont2}>天上有星星，山上有老虎，海里有大鱼，家里有小猫。</Text>
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
                                                                    <Text style={styles.askfont}>请家长选择孩子的表现？</Text>
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
                             _play: function(){
                               AudioPlayer.play('t2.mp3');
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
                            else{AudioRecorder.playRecording('/2.caf');
                            this.setState({playing: true});
                            }
                            },

                             nextbtn:function(){
                               if (this.state.recording) {
                              this._stop();}
                            else if (this.state.playing) {
                                AudioRecorder.stopPlaying();
                              };
                              var v2=(this.state.value);
                      AsyncStorage.setItem("result[2]",JSON.stringify(v2));

                             this.props.navigator.push({
                                                       component: item3,
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
  height: windowsSize.height*0.25,
  },

//                               第一部分＝＝＝＝＝＝
  flex0:{flex:2,
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
  askfont2:{fontSize:12,
  color:'#bbb',
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
  justifyContent:'center',
  alignItems:'center',
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
   alignItems:'flex-start',
  },
  c33:{
  flex:1.2,
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
module.exports =item2;
