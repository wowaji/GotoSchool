/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var start1=require('./start1');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} = React;

var windowsSize = Dimensions.get('window');

var home = React.createClass({
    render:function(){
        return(
               <Image  style={styles.flex } source={require('image!Image')} resizeMode="stretch">
        <View    style={styles.box}  >
        <View style={styles.box0}  ></View>
            <View    style={styles.box1}>
               <View>
                  <TouchableOpacity onPress={this.tostart1}>
                       <Image  style={styles.flexS}   source={require('image!Image-1')} resizeMode="contain"></Image>
                  </TouchableOpacity>
               </View>
               <View >
                  <TouchableOpacity onPress={this.star2}>
                       <Image  style={styles.flexS}  source={require('image!Image-2')} resizeMode="contain"></Image>
               </TouchableOpacity>
               </View>
             </View>

  <View style={styles.box00}  ></View>

               <View    style={styles.box2}>
               <View>
               <TouchableOpacity onPress={this.star3}>
               <Image  style={styles.flexS}  source={require('image!Image-3')} resizeMode="contain"></Image>
               </TouchableOpacity>
               </View>
               <View >
               <TouchableOpacity onPress={this.star4}>
               <Image  style={styles.flexS}  source={require('image!Image-4')} resizeMode="contain"></Image>
               </TouchableOpacity>
               </View>
            </View>
<View style={styles.box0}  ></View>
        </View>
  </Image>
    );
    },

                 tostart1:function(){
                  this.props.navigator.push({
                                              component: start1,
                                              passProps: {
                                              },
                                           });
                             },

                 star4:function(){
                     AsyncStorage.removeItem('phone');
            //        AsyncStorage.getItem('phone')
            //                 .then((value) => {
            // if (value !== null){
            // alert(value);
}
});

var styles = StyleSheet.create({
                               box:{
                               flex:1,
                               },
                               box0:{
                                 flex:2.5,
                               },
                               box00:{flex:1,},
                               box1:{
                               justifyContent:'space-around',
                               flexDirection:'row',
                               flex:3,
                               },
                               box2:{
                               justifyContent:'space-around',
                               flexDirection:'row',
                               flex:3,
                               },
                               flex:{
                               flex:1,
                                width: windowsSize.width,
                               },
                               flexS:{
                                width: windowsSize.width*0.37,
                               },
                                   })
module.exports = home;
