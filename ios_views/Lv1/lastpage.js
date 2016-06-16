/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var Header=require('../common/Header');

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    AlertIOS,
    Dimensions,
      AsyncStorage,
} = React;
var windowsSize = Dimensions.get('window');

var answer1=["1"];
var answer2=["2"];
var answer3=["3"];


var lastpage = React.createClass({
  getInitialState: function() {
  return {
    value:0,
  };
},
  componentDidMount: function(){
    this._loadInitialState().done();
  },
  async _loadInitialState(){
var sum=0;
    var value=await AsyncStorage.multiGet(["result[1]","result[2]","result[3]","result[4]","result[5]","result[6]","result[7]",
    "result[8]","result[9]","result[10]","result[11]",
    "result[12]","result[13]","result[14]"]);

       value.forEach(kv=>{
             let key = kv[0], item = kv[1];

var Nitem=parseInt(item);
sum+=Nitem;
});
this.setState({tot:sum});

  var tot=(this.state.tot);
  if (tot < 100){
            this.setState({val:'你的测评级别是“需努力”，题目终于做完了，是不是既有意思又有点难呢？看看哪些题目得分不太理想，让我们来帮助你！'});
               }else if (tot <=114 && tot>=100 ){
                  this.setState({val:'不错哦！你的测评级别是“良好”，参加一般的学校的面试没什么问题了，如果你的选择有点高，那你就还要再努力哦！'});
                   }else if (tot >=115){
                  this.setState({val:'恭喜你！你的测评级别是“优秀”，面试那天只要发挥正常，你就能考上心仪的学校啦!'});
              }
              },


                                 render:function(){
                                 return(

                                        <View >
                                        <Image   style={styles.bg}  resizeMode="stretch"    source={require('image!Image-5')} >
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
                                        <Text style={styles.askfont} >{this.state.val}

                                        </Text>
                                        </View>
                                        </View>
                                        </View>

                                        <View  style={styles.f2}></View>

                                        <View  style={styles.f3}>
                                        <TouchableOpacity onPress={this.nextbtn}>
                                        <View style={styles.btn}>
                                        <Text style={styles.next}>了解更多</Text>
                                        </View>
                                        </TouchableOpacity>
                                        </View>
                                        </Image>
                                        </View>
                                        )
                                 },

                                 nextbtn:function(){
                                 AlertIOS.alert('感谢您的使用','本测试受无测评材料、家长模拟老师等原因的影响，可能不能完全反馈孩子的面试状态，我们还提供线下辅导等增值服务。\n面对面培训课程：4~6人的小班课程，共10节课，3688元。\n线下辅导老师咨询电话：18138793186',

                                                 	    [{text: '退出'}]
                                                 	  );
                                 },
});

var styles = StyleSheet.create({
                               btn:{
                               backgroundColor: '#ffb8aa',
                               borderRadius: 5,
                               alignItems  :"center",
                               justifyContent:"center",
                               width:150,
                               height:40,
                               },

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
                               f1:{flex:2,
                                 alignItems  :"center",
                                 justifyContent:"center",},
                               f2:{flex:2,
                               justifyContent:'center',
                               alignItems:'center',
                               },
                               f3:{flex:2,
                               flexDirection:'row',
                               marginTop:10,
                               borderRadius:10,
                               overflow:'hidden',
                               alignItems  :"center",
                               justifyContent:"center",

                               },

                               ask:{
                                 alignItems  :"center",
                                 justifyContent:"center",
                                 width: windowsSize.width*0.9,
                                 backgroundColor:'white',
                                 borderRadius:10,
                                 opacity:0.7,
                               },
                               askfont:{fontSize:13,
                               marginTop:15,
                               marginBottom:15,
                               marginLeft:10,
                               marginRight:10,},

                               iconne:{
                               marginLeft:15,
                               marginBottom:15,
                               height:25,
                               resizeMode: Image.resizeMode.contain,
                               },

                               fontan:{
                               fontSize:18,
                               marginLeft:10,
                               },

                               Ra:{
                               marginLeft:10,
                               flex:1,
                               },
                               next:{
                               fontSize:18,
                               color: '#FFFFFF',
                               marginTop:5,
                               marginBottom:5,

                               },


                               })
module.exports = lastpage;
