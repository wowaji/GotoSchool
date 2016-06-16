'use strict';
var React = require('react-native');
var {
    SliderIOS,
    Text,
    StyleSheet,
    View,
} = React;
var Slider = React.createClass({
                                      getInitialState() {
                                      return {
                                      value: 0,
                                      };
                                      },
                                      render() {
                                      return (
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
                                              );
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
                               });
module.exports= Slider
