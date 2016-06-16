/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var Header=require('../common/Header');
var item14=require('./item14');

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    SliderIOS,
    AsyncStorage,
} = React;

var windowsSize = Dimensions.get('window');

var item13 = React.createClass({
  getInitialState() {
  return {
  value: 0,
  value2: 0,
  };
  },
    render:function(){
        return(
               <View >
               <Image   style={styles.bg}  resizeMode="stretch"   source={require('image!Image-9')} >
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
                           <Text style={styles.askfont}>小朋友，现在我们来玩一个跳直线的游戏，要像他一样一直跳在直线上哦。</Text>
                           <Text style={styles.askfont}>(单脚跳直线，连续五米，每一步都要踩在直线上)</Text>
                           </View>
                   </View>
                   <View  style={styles.f2}>
                            <Image style={styles.pic}  source={require('image!Image-18') }></Image>
                   </View>

                   <View  style={styles.f3}>
                           <View style={styles.c3}>
                           <View style={styles.c31}>
                           <Text style={styles.askfont}>请观察孩子动作并选择偏离和落地次数：</Text>
                           </View>

                           <View style={styles.c32}>
                           <View style={styles.Ra}>

                           <View>
                           <Text style={styles.text} >
                           偏离次数：{this.state.value}
                           </Text>
                           <SliderIOS
                           style={styles.slider}
                           maximumValue={10}
                           minimumValue={0}
                           step={1}
                           onValueChange={(value) => this.setState({value: value})} />
                           </View>

</View>
<View style={styles.Ra}>
<View>
<Text style={styles.text} >
落地次数：{this.state.value2}
</Text>
<SliderIOS
style={styles.slider}
maximumValue={10}
minimumValue={0}
step={1}
onValueChange={(value2) => this.setState({value2: value2})} />
</View>

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
                                  var v1=parseInt(this.state.value);
                                  var v2=parseInt(this.state.value2);
                                  var result;
                                 result=20-v1*3-v2*5;
                                 if(result<0){result=0;};
                                AsyncStorage.setItem("result[13]",JSON.stringify(result));
                               this.props.navigator.push({
                                                         component: item14,
                                                         passProps: {
                                                         },
                                                         });
                               }
});


var styles = StyleSheet.create({
  slider: {
  height: 6,
  margin: 6,
  width:250,
  },
  text: {
  marginTop:8,
  fontSize: 11,
  textAlign: 'center',
  fontWeight: '500',
  margin: 8,
  },

  title:{
  height:windowsSize.height*0.02,},
  bg:{ flex:1,
  width: windowsSize.width,
  height: windowsSize.height,
  },

                               flexall:{
                               marginRight:8,
                               marginLeft:8,
                               marginBottom:8,
                               marginTop:8,
                               flex:1,
                               },
                               f1:{flex:1.5,

                               },
                               f2:{flex:3,
                               justifyContent:'center',
                               alignItems:'center',
                                },
                               f3:{flex:4,
                               marginTop:10,
                               borderRadius:10,
                               overflow:'hidden',
                                    },

                               ask:{
                               justifyContent:'center',
                               alignItems:'center',
                               marginBottom:10,
                               backgroundColor:'white',
                               borderRadius:10,
                               opacity:0.7,
                               },
                               askfont:{fontSize:13,
                               marginTop:5,
                               marginBottom:5,
                               marginLeft:5,
                               marginRight:5,},

                               pic:{
                                 marginBottom:10,
                                 marginTop:10,
                                 width:windowsSize.width*0.9,
                                 height:windowsSize.height*0.3,
                                 resizeMode: Image.resizeMode.contain,
                               },

                               c3:{
                               flex:1,
                               borderBottomWidth:1,
                               borderBottomColor:'#999',
                               },
                               c31:{
                               flex:1.5,
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
                             f13:{
                             flex:1,
                             alignItems:'flex-end',
                             justifyContent:'flex-end',
                             },
                             ml:{
                               marginLeft:20,
                               marginTop:10,
                             },
                             Ra:{
                               justifyContent:'center',
                               alignItems:'center',
                               flex:1,
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


 })
module.exports = item13;
