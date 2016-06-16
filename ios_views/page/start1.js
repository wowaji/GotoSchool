/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var item1=require('../Lv1/item1');

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} = React;

var start1 = React.createClass({
                               render:function(){
                               return(
                                      <View style={styles.bg}>
                                      <View style={styles.flex}>
                                      <Text style={styles.font}>现在我们开始测试</Text>
                                      <Text style={styles.font}>
                                      请在一个较为安静的环境里进行</Text>
                                      <Text style={styles.font1}>
                                      本次测试大概会花费您20分钟左右时间</Text>
                                      </View>

                                      <View style={styles.flexb}>
                                      <TouchableOpacity onPress={this.next}>
                                      <View style={styles.flex2}>
                                      <Text style={styles.font2}>开始测试</Text>
                                      </View>
                                      </TouchableOpacity>
                                      </View>

                                      </View>
                                      );
                               },

                               next:function(){
                               this.props.navigator.push({
                                                          component:item1,
//                                                         navigationBarHidden:false,
//                                                         title:'初级阶段测试',
//                                                         leftButtonTitle:' ',
//                                                         rightButtonIcon: require('image!exit'),
//                                                         onRightButtonPress:function(){alert('exit')},
                                                         passProps: {
                                                         },
                                                         });
                               }
                               });


var styles = StyleSheet.create({
                               ex:{
                               backgroundColor:'blue',},
                               flex:{
                               flex:1,
                               marginTop:80,
                               marginLeft:20,
                               marginRight:20,
                               alignItems  :"center",
                               justifyContent:"center",

                               },

                               flexb:{
                               flex:1,
                               marginLeft:20,
                               marginRight:20,
                               alignItems  :"center",
                               justifyContent:"center",
                                                              },

                               flex2:{
                               alignItems  :"center",
                               justifyContent:"center",
                               borderRadius:70,
                               height: 130,
                               width:130,
                               backgroundColor: '#71aaff',
                               borderWidth:5,
                               borderColor:'blue',
                               },

                               font:{
                               marginTop:20,
                               fontSize:20,
                               color: '#fff',
                               },
                               font1:{
                               marginTop:20,
                               fontSize:15,
                               color: '#fff',
                               },

                               font2:{
                               marginLeft:5,
                               letterSpacing:5,
                               fontSize:38,
                               color: '#fff',
                               },
                               bg:{
                               flex:2,
                               backgroundColor:"#61a5ea",
                               },

                               })
module.exports = start1;
