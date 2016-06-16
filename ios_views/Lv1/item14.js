/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var Header=require('../common/Header');
var lastpage=require('./lastpage');
import Radio, {RadioButton} from 'react-native-simple-radio-button';

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    AsyncStorage,
} = React;
var windowsSize = Dimensions.get('window');
var item14 = React.createClass({
  getInitialState: function() {
  return {
  types: [{label: '无特长展示', value: 0},
           {label: '有当场可展示的特长', value: 5},
           {label: '有市级以上获奖证书', value: 10},
           ],
  value: 0,
  value1Index: 0,
                                             }
  },
    render:function(){
        return(
               <View >
               <Image  style={styles.bg}  resizeMode="stretch"   source={require('image!Image-10')} >
               <View>
               <Header  navigator={this.props.navigator}
               initObj={{
               title: "123"
               }}/>
               </View>

               <View  style={styles.title}></View>
               <View  style={styles.flexall}>
                   <View  style={styles.f1}>
                           <View style={styles.ask}>
                           <Text style={styles.askfont}>孩子有特长展示吗？可以现场表演的，或者是有获奖证书的。如：乐器、舞蹈、体操、毛笔字、口才等等。</Text>
                            </View>
                   </View>
                   <View  style={styles.f2}>


                   </View>

                   <View  style={styles.f3}>
                           <View style={styles.c3}>


                           <View style={styles.c32}>
                           <View style={styles.ml}>
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
                           <View style={styles.f13}>
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
               )
    },

                               nextbtn:function(){
                                 var v14=(this.state.value);
                         AsyncStorage.setItem("result[14]",JSON.stringify(v14));

                               this.props.navigator.push({
                                                         component: lastpage,
                                                         passProps: {
                                                         },
                                                         });
                               }
});


var styles = StyleSheet.create({
  title:{
  height:windowsSize.height*0.02,},
  bg:{ flex:1,
  width: windowsSize.width,
  height: windowsSize.height,
  },

                               flexall:{
                               marginRight:10,
                               marginLeft:10,
                               marginBottom:10,
                               marginTop:10,
                               flex:1,
                               },
                               f1:{flex:1,},
                               f2:{flex:2,
                               justifyContent:'center',
                               alignItems:'center',
                                },
                               f3:{flex:2,
                               borderRadius:10,
                               overflow:'hidden',
                                    },

                               ask:{
                               justifyContent:'center',
                               alignItems:'center',
                               marginTop:10,
                               marginBottom:10,
                               marginLeft:10,
                               marginRight:10,
                               backgroundColor:'white',
                               borderRadius:10,
                               opacity:0.7,
                               },
                               askfont:{fontSize:13,
                               marginTop:15,
                               marginBottom:15,
                               marginLeft:10,
                               marginRight:10,},

                               c3:{
                               flex:1,
                               borderBottomWidth:1,
                               borderBottomColor:'#999',
                               },
                               c32:{
                               flex:4,
                               backgroundColor:'#fff',
                                  alignItems:'flex-start',
                               },

                               c33:{
                               flex:1,
                               alignItems:'flex-end',
                               backgroundColor:'#fff',
                               },
                               f13:{
                               flex:1,
                               alignItems:'flex-end',
                               justifyContent:'flex-end',
                               },

                               iconne:{
                                 marginBottom:2,
                                 height:35,
                                 width:95,
                                 resizeMode: Image.resizeMode.contain,
                                 marginRight:4,
                                 alignItems:'flex-end',
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

                               ml:{flex:1,
                                 marginLeft:20,
                                 marginTop:10,
                               },

 })
module.exports = item14;
