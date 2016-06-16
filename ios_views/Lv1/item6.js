
'use strict';
var React=require('react-native');
var Header=require('../common/Header');

var zoompic2=require('./zoompic2')


var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    NavigatorIOS,
      Dimensions,
} = React;

var windowsSize = Dimensions.get('window');

var item6= React.createClass({
                             render:function(){
                             return(<View >

                                    <Image  style={styles.bg} resizeMode="stretch"   source={require('image!Image-8')} >

                                    <View>
                                    <Header  navigator={this.props.navigator}
                                    initObj={{
                                    title: "123"
                                    }}/>
                                    </View>


                                    <View  style={styles.title}></View>


                                    <View  style={styles.flexall}>

                                    <View  style={styles.flex0}>



                                    <View style={styles.ask}>
                                    <Text style={styles.askfont}>图中有8处不同，请让孩子找出来并计算时间。</Text>
                                     <Text style={styles.askfont2}>准备好后按“计时”弹出图片并开始，找完时按“停止”结束。按提交直接进入下一题。</Text>
                                    </View>

                                    </View>

                                    <View  style={styles.flex1}>

                                    <View >
                                    <Image style={styles.re}  source={require('image!Image-12') }></Image>
                                    </View>
                                    </View>


                                    <View  style={styles.flex2}>
                                    <TouchableOpacity onPress={this.zoom}>
                                    <View    style={styles.start}>
                                    <Text style={styles.startfont}>计  时</Text>
                                    </View>
                                    </TouchableOpacity>
                                    </View>


                                    <View  style={styles.flex2}>
                                    <View style={styles.c3}>
                                    <View style={styles.c320}>
                                    <View style={styles.c321}>
                                    </View>


                                    </View>
                                    </View>

                                    <View style={styles.c322}>
                                    <View style={styles.f1}></View>

                                    </View>
                                    </View>

                                    </View>
                                    </Image>
                                    </View>

                                    );
                             },

                             zoom:function(){
                             this.props.navigator.replace({
                                                       component: zoompic2,
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

                               f1:{
                               flex:1
                               },

                               flexall:{
                               marginRight:8,
                               marginLeft:8,
                               marginBottom:8,
                               marginTop:8,
                               flex:1,
                               },


                               im1:{
                               flex:1,
                               resizeMode: Image.resizeMode.stretch,
                               },

                               flex0:{flex:1,
                               justifyContent:'center',
                               alignItems:'center',
                               },
                               ask:{
                                 width: windowsSize.width*0.9,
                                 backgroundColor:'white',
                                 borderRadius:10,
                                 opacity:0.7,
                                 },
                               askfont:{
                                 fontSize:13,
                                 marginTop:5,
                                 marginRight:5,
                               marginLeft:5,},
                               askfont2:{
                                 fontSize:13,
                                 marginRight:5,
                               marginLeft:5,
                               marginBottom:5,
                               color:"#939393",
                               },


                               flex1:{flex:3,
                               marginTop:10,
                               borderRadius:10,
                               overflow:'hidden',
                               justifyContent:'center',
                               alignItems:'center',
                               },

                               re:{
                               marginBottom:10,
                               marginTop:10,
                               height: windowsSize.height*0.2,
                               width:windowsSize.width*0.8,
                               resizeMode: Image.resizeMode.stretch,
                               borderWidth:4,
                               borderColor:'#fff',
                               },


                               flex2:{
                               flex:1,
                               justifyContent:'center',
                               alignItems:'center',
                               marginTop:10,
                               borderRadius:10,
                               flexDirection:'row',
                               overflow:'hidden',
                               },

                               start:{
                               backgroundColor: '#ffb8aa',
                               borderRadius: 5,
                               alignItems  :"center",
                               justifyContent:"center",
                               width:200,
                               height:60,
                                },
                               startfont:{
                               color:'#ff183e',
                               fontSize:35,
                               marginTop:5,
                               marginBottom:5,
                               },

                               c3:{
                               flex:1,

                               },
                               c31:{
                               flex:1,
                               backgroundColor:'#76ff68',
                               justifyContent:'center',
                               alignItems:'center',
                               },
                               c32:{
                               flexDirection:'row',
                               flex:4,
                               backgroundColor:'#fff',
                               },
                               c320:{
                               flex:2,},

                               c321:{
                               flex:2,
                               alignItems:'flex-start',
                               marginTop:10,
                               marginLeft:20,
                               },
                               c322:{
                               flex:1,
                               alignItems:'flex-end',
                               },




                               });
module.exports =item6;
