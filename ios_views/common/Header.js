var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ScrollView,
    TouchableOpacity,
    AlertIOS,
} = React;

module.exports = React.createClass({
                                   render: function(){
                                   var obj = this.props.initObj;
                                   return (
                                           <View style={[styles.header, styles.row,styles.flex6]}>

                                               <View style={styles.flex}></View>

                                               <View style={[styles.center,styles.flex4]}>
                                                   <Text style={styles.fontFFF}>初级阶段测试</Text>
                                               </View>

                                               <View style={styles.flex}>
                                           <TouchableOpacity style={styles.btn} onPress={this._pop}>
                                                   <Image  style={styles.img} resizeMode="contain" source={require('image!exit')} ></Image>
                                                   </TouchableOpacity>
                                               </View>

                                           </View>

                                           );
                                   },

                                   _pop: function(){
                                   AlertIOS.alert('退出',
                                         '请问您想要放弃这项测试吗？',
                                         [
                                          {text:'是的我想下次再测',
                                           onPress: () => this.props.navigator.popToTop(),
                                          },
                                          {text:'逗你玩的，继续测'}
                                          ]);
                                   }

//                                   backg:function(){
//                                   this.props.navigator.popToTop()({
//
//                                                             });
//                                   }



                                   });

var styles = StyleSheet.create({
                               flex:{flex:1},
                               flex4:{flex:4},
                               flex6:{flex:6},
                               img:{
                               height:20,

                               },
                               btn:{
                                   marginTop:20,
                                   marginRight:5,
                                   alignItems:'center',
                                   justifyContent:'center',
                               },
                               row:{
                                   flexDirection:'row'
                               },
                               header:{
                                   height:45,
                                   backgroundColor:'#2790CC',
                                   borderBottomWidth:3,
                                   borderBottomColor:'white',


                               },
                               fontFFF:{
                                   color:'#fff',
                                   fontSize:15,
                                   fontWeight:'bold',
                                   marginTop:22,
                                   justifyContent:'center',
                               },

                               center:{
                                   justifyContent:'center',
                                   alignItems:'center'
                               },
                               });
