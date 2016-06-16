/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var item6=require('./item6')
var TimerMixin = require('react-timer-mixin');

var {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    getImage,
    Dimensions,
    AsyncStorage,
} = React;

var windowsSize = Dimensions.get('window');

var zoompic1 = React.createClass({
  getInitialState: function(){
   return {
     seconds: 0,
   }
 },
 mixins: [TimerMixin],


  componentDidMount: function(){
    this.setInterval(this.tick, 1000);
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },

    render:function(){
        return(

          <View style={styles.flex}>

                   <View style={styles.flex9}>
                   <Image style={styles.pic}  source={require('image!Image-11') }></Image>
                    </View>

               <View style={styles.flex0}>
                   <Text style={styles.font0}>找6处不同</Text>

                   <View style={styles.flex1}>
               <TouchableOpacity onPress={this.next}>
                        <View    style={styles.btn}>
                           <Text style={styles.font}>完  成</Text>
                       </View>
                       </TouchableOpacity>
                   </View>
               </View>
               </View>
    );
    },
    componentWillUnmount: function () {
	    clearInterval(this.setInterval);
	  },
                                next:function(){
                                  var s=0;
                                  var t1=(this.state.seconds);
                                  if(t1<15){
                                  s=10;}
                                  else if(t1<20){
                                  s=7;}
                                  else if(t1<=25){
                                  s=5;}
                                  else if(t1>25){
                                  s=2;};
                                  AsyncStorage.setItem("result[5]",JSON.stringify(s));

                                 this.props.navigator.push({
                                                           component: item6    ,
                                                           passProps: {
                                                           },
                                                           });
                                 },
});


var styles = StyleSheet.create({
                               flex:{
                               flex:1,
                               width: windowsSize.width,
                               height: windowsSize.height,
                               backgroundColor:"black",
                                    },

                               flex1:{
                               flex:1,
                               alignItems:"flex-end",
                               justifyContent:"flex-end",
                               marginRight:15,
                               marginBottom:3,
                                },

                               flex0:{
                               flex:1,
                               alignItems  :"center",
                               justifyContent:"center",
                               flexDirection:'row',
                               },

                               flex9:{
                               top:10,
                               flex:9,
                               justifyContent:'center',
                               alignItems:'center',
                               },
                               pic:{flex:1,
                                 width: windowsSize.height*0.87,
                                 height: windowsSize.width*0.98,
                                resizeMode: Image.resizeMode.contain,
                               transform: [{rotate:'90deg', }],
                               },

                               btn:{
                               backgroundColor: '#ffb8aa',
                               borderRadius: 5,
                               alignItems:'center',
                               justifyContent:'center',
                               width:150,
                               height:30,
                               },

                               font:{
                               color:'#ff183e',
                               fontSize:22,
                               marginTop:3,
                               marginBottom:3,
                               },
                               font0:{
                               color:'#fff',
                               fontSize:20,
                               left:15,

                               },

                               });
module.exports = zoompic1;
