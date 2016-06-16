/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var RegPage=require('./regPage');
var {
    StyleSheet,
    View,
    Text,
    NavigatorIOS,
    Navigator,
    AppRegistry,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicatorIOS,
    AlertIOS,
    AsyncStorage,
    Text,

} = React;

var login = React.createClass({

                              getInitialState() {
                              return {
                              phone:''
                              }
                              },

                              render:function(){
                              return(
                                     <View>
                                     <View style={styles.container}>

                                     <View style={styles.box}>
                                     <Text style={styles.font}>手机号:</Text>
                                     <View style={styles.inputH}>
                                     <TextInput
                                     style={styles.input}
                                     placeholder ='请输入手机号'
                                     maxLength = {11}
                                     autoFocus = {true}
                                     keyboardType={'numeric'}
                                     onChangeText={(text) => this.setState({
                                                                           phone :text
                                                                           })}
                                     text={this.state.phone}/>
                                     </View>

                                     </View>


                                     <View style={styles.nextbtn}>
                                     <TouchableOpacity onPress={this.toNext}>
                                     <View style={styles.btn2}>
                                     <Text style={styles.next}>注册 & 登入</Text>
                                     </View>
                                     </TouchableOpacity>
                                     </View>
                                     </View>
                                     </View>

                                     );
                              },

                              toNext:function(){
                              var phoneVal=this.state.phone;
                              var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
                              if(reg.test(phoneVal)) {
                                 AsyncStorage.setItem("phone", JSON.stringify(phoneVal));
                                 this.props.navigator.push({
                                                           component: RegPage,
                                                           passProps: {
                                                           },
                                                           });
                              }
                                else{
                                  alert('请输入正确号码');
                              }
                              },



                              });



var styles = StyleSheet.create({
                               flex:{
                               flex:1
                               },
                               container:{
                               marginTop:40,
                               marginLeft:10,
                               marginRight:10,
                               flexDirection:'column',
                               },
                               box:{flex:1,
                               justifyContent:'space-between',
                               flexDirection:'row',
                               height:30,
                               marginTop:15,
                               marginBottom:15,
                               borderBottomWidth:1,
                               borderBottomColor:'#ddd',},
                               font:{
                               fontSize:20,
                               },

                               btn:{
                               backgroundColor: '#ca9de0',
                               borderRadius: 5,
                               alignItems  :"center",
                               justifyContent:"center",
                               width:100,
                               height:25,
                               },

                               btn2:{
                               backgroundColor: '#2ECC71',
                               borderRadius: 5,
                               alignItems  :"center",
                               justifyContent:"center",
                               width:150,
                               height:40,
                               },

                               nextbtn:{
                               marginTop:20,
                               alignItems  :"center",
                               },

                               next:{
                               fontSize:20,
                               color: '#FFFFFF',
                               marginTop:5,
                               marginBottom:5,

                               },

                               send:{
                               fontSize:15,
                               color: '#FFFFFF',
                               marginTop:5,
                               marginBottom:5,
                               },

                               inputH:{flex:1,
                               height:30,
                               marginLeft:10,
                               },
                               input:{
                               height:30,
                               },

                               onPree(){
                               this.props.navigator.push({
                                                         title:'123',
                                                         component:regPage,
                                                         });
                               },
                               })
module.exports = login;
