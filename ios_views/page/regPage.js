/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var home=require('./home');

var {
    StyleSheet,
    View,
    Text,
    TextInput,
    SegmentedControlIOS,
    NavigatorIOS,
    Navigator,
    TouchableOpacity,
     AsyncStorage,
    ScrollView
} = React;

var regPage = React.createClass({
                                getInitialState() {
                                return {
                                mail:'',
                                school:'',
                                age:'',
                                sex:'',
                                }
                                },
                                render:function(){
                                return(

                                       <View style={styles.flexall}>

                                       <View style={styles.flex0}>
                                       <Text style={styles.font0}>请填写一些基本资料以便我们更好地分析</Text>
                                       </View>

                                       <View  style={styles.flexcard}>
                                       <View style={[styles.box,styles.flex]}>
                                       <Text style={styles.font}>年龄</Text>

                                       <View style={styles.choose}>
                                       <SegmentedControlIOS
                                       onValueChange={this._onValueChangeAge}
                                       value={this.state.values}
                                       tintColor="#71aaff"
                                       values={['3岁', '4岁', '5岁', '6岁']}
                                       selectedIndex={undefined}/>
                                       </View>
                                       </View>

                                       <View style={[styles.box,styles.flex]}>
                                       <Text style={styles.font}>性别</Text>
                                       <View style={styles.choose}>
                                       <SegmentedControlIOS
                                       onValueChange={this._onValueChangeSex}
                                       value={this.state.values}
                                       tintColor="#71aaff"
                                       values={['男孩', '女孩']}
                                       selectedIndex={undefined}/>
                                       </View>
                                       </View>

                                       <View style={[styles.box,styles.flex]}>
                                       <Text style={styles.font}>邮箱</Text>

                                       <View style={styles.choose}>
                                       <TextInput onChangeText={(text) => this.setState({
                                                                                        mail :text
                                                                                        })} text={this.state.mail}
                                       style={styles.input}/>
                                       </View>

                                       </View>

                                       <View style={[styles.box,styles.flex]}>
                                       <Text style={styles.font}>在读幼儿园</Text>
                                       <View style={styles.choose}>
                                       <TextInput onChangeText={(text) => this.setState({
                                                                                        school :text
                                                                                        })} text={this.state.school} style={styles.input}/>
                                       </View>
                                       </View>
                                       </View>

                                       <View style={[styles.box,styles.flex2]}></View>

                                       <View style={styles.box2}>
                                       <View style={[styles.btns,styles.flex] }>
                                       <View></View>

                                       <View>
                                       <TouchableOpacity onPress={this.toHome}>
                                       <View style={styles.btn}>
                                       <Text style={styles.font2}>完成注册</Text>
                                       </View>
                                       </TouchableOpacity>
                                       </View>
                                       </View>
                                       </View>
                                       </View>
                                       );
                                },

                                _onValueChangeAge(value) {
                                this.setState({
                                              age: value,
                                              });
                                },
                                _onValueChangeSex(value) {
                                this.setState({
                                              sex: value,
                                              });
                                },



                                toHome:function(){
                                var ageVal=this.state.age;
                                var sexVal=this.state.sex;
                                var mailVal=this.state.mail;
                                var schoolVal=this.state.school;

                                 AsyncStorage.multiSet([["age",ageVal],
                                                        ["sex",sexVal],
                                                        ["mail",mailVal],
                                                        ["school",schoolVal]]

                                                        );
                                this.props.navigator.push({
                                                          component: home,
                                                          passProps: {
                                                          },
                                                          });
                                },
                                });



var styles = StyleSheet.create({
                               flexall:{
                               flex:1,
                               marginTop:35,
                               },
                               flex0:{
                               flex:1,
                               alignItems  :"center",

                               },
                               flexcard:{flex:8,
                               marginTop:1,
                               },
                               flex:{flex:2,
                               },
                               flex2:{flex:8,
                               },
                               box:{
                               marginLeft:10,
                               marginRight:10,
                               },
                               box2:{
                               marginLeft:10,
                               marginRight:10,
                               marginBottom:10,
                               },
                               font0:{
                               fontSize:14,
                               },
                               font:{
                               fontSize:12,
                               },
                               font2:{
                               fontSize:20,
                               color: '#FFFFFF',
                               },

                               btn:{alignSelf:"flex-end",
                               alignItems  :"center",
                               justifyContent:"center",
                               borderRadius:8,
                               height: 40,
                               width:150,
                               backgroundColor: '#71aaff',
                               },
                               input:{
                               height:30,
                               borderWidth:1,
                               borderColor:'#71aaff',
                               },

                               choose:{
                               marginTop:4,

                               },
                               })
module.exports = regPage;
