/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var {
    StyleSheet,
    View,
    Image,
    Dimensions,
} = React;

var windowsSize = Dimensions.get('window');

var loading = React.createClass({
    render:function(){
        return(

          <View style={styles.flex}>

                   {/*<Image style={styles.pic}  source={require('image!loading') }></Image>*/}
               </View>
    );
    },
});


var styles = StyleSheet.create({
                               flex:{
                               flex:1,

                               backgroundColor:"white",
                                    },

                               pic:{flex:1,
                                 width: windowsSize.width,
                                 height: windowsSize.height,
                                 justifyContent: 'center',
                            		alignItems: 'center',
                                resizeMode: Image.resizeMode.contain,
                               },

                               });
module.exports = loading;
