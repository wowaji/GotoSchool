'use strict';
var React=require('react-native');
var item10=require('./item10');

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
var item9 = React.createClass({
                              render:function(){
                              return(

                                     <Image style={styles.bg} resizeMode="stretch"   source={require('image!Image-5')}>

                                     <View style={styles.flex}>
                                         <View style={styles.flex1}>
                                         <Image style={styles.re}  source={require('image!Image-15') }></Image>
                                         </View>

                                         <View style={styles.flex}>
                                         <View style={styles.flex}></View>
                                               <View style={styles.flex2}>
                                                          <View style={styles.flex3}>
                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtnTrue}>
                                                             <View style={styles.flexbtn}>
                                                               <Text style={styles.font}>1</Text>
                                                             </View>
                                                            </TouchableOpacity></View>

                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtn}>
                                                             <View style={styles.flexbtn}>
                                                             <Text  style={styles.font}>2</Text>
                                                             </View>
                                                             </TouchableOpacity></View>

                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtn}>
                                                             <View style={styles.flexbtn}>
                                                             <Text style={styles.font}>3</Text>
                                                             </View>
                                                             </TouchableOpacity></View>
                                                         </View>

                                                         <View style={styles.flex3}>
                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtn}>
                                                             <View style={styles.flexbtn}>
                                                             <Text style={styles.font}>4</Text>
                                                             </View>
                                                             </TouchableOpacity></View>

                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtn}>
                                                             <View style={styles.flexbtn}>
                                                             <Text  style={styles.font}>5</Text>
                                                             </View>
                                                             </TouchableOpacity></View>

                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtn}>
                                                             <View style={styles.flexbtn}>
                                                             <Text style={styles.font}>6</Text>
                                                             </View>
                                                             </TouchableOpacity></View>
                                                         </View>

                                                         <View style={styles.flex3}>
                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtn}>
                                                             <View style={styles.flexbtn}>
                                                             <Text style={styles.font}>7</Text>
                                                             </View>
                                                             </TouchableOpacity></View>

                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtn}>
                                                             <View style={styles.flexbtn}>
                                                             <Text  style={styles.font}>8</Text>
                                                             </View>
                                                             </TouchableOpacity></View>

                                                             <View style={styles.b1}>
                                                             <TouchableOpacity onPress={this.nextbtn}>
                                                             <View style={styles.flexbtn}>
                                                             <Text style={styles.font}>9</Text>
                                                             </View>
                                                             </TouchableOpacity></View>
                                                         </View>
                                            </View>
<View style={styles.flex}></View>
                                         </View>
                                  </View>
                             </Image>
                                     );
                              },
                              nextbtn:function(){
                              var value=0;
                              AsyncStorage.setItem("result[9]",JSON.stringify(value));

                              this.props.navigator.replace({
                                                        component: item10,
                                                        passProps: {
                                                        },
                                                        });
                                                     },

                              nextbtnTrue:function(){
                              var value=2;
                              AsyncStorage.setItem("result[9]",JSON.stringify(value));
                              this.props.navigator.replace({
                                                        component: item10,
                                                        passProps: {
                                                        },
                                                        });
                                                     },
                              });


var styles = StyleSheet.create({
  flex:{
  flex:1,
  },
  bg:{ flex:1,
  width: windowsSize.width,
  height: windowsSize.height,
  },

  flex1:{
  flex:1,
  alignItems  :"center",
  justifyContent:"center",
  },

  flex2:{
  flex:9,
  marginRight:30,
  marginLeft:30,
  },

  flex3:{
    alignItems  :"center",
    justifyContent:"center",
  flex:1,
  flexDirection:'row',
  marginBottom:20,
  },
  b1:{
  flex:1,
  marginLeft:10,
  marginRight:10,
  },
  flexbtn:{
  backgroundColor: '#FCB993',
  borderRadius: 18,
  borderBottomWidth:1,
  borderBottomColor:'#999',
  alignItems:"center",
  justifyContent:"center",
  },

  re:{
  width: windowsSize.width*0.85,
  height: windowsSize.height*0.25,
  resizeMode: Image.resizeMode.contain,
  },

  font:{
  marginTop:10,
  marginBottom:10,
  fontSize:30,
  color: '#fff',
  fontWeight:"bold",
  },
});
module.exports = item9;
