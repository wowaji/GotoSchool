/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');

'use strict';

import Radio, {RadioButton} from 'react-native-simple-radio-button';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
        AsyncStorage,
        Span,

} = React;


var Answer = React.createClass({
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
this.setState({total:sum});
   },
render:function(){
var tot=this.state.total;
var types="";
  if (tot < 100){
    return(
     this.setState({
       types:"你的测评级别是“需努力”，题目终于做完了，是不是既有意思又有点难呢？看看哪些题目得分不太理想，让我们来帮助你！"
   })
)
}else if (tot <=114 && total>=100 ){
return(
 this.setState({
   types:"不错哦！你的测评级别是“良好”，参加一般的学校的面试没什么问题了，如果你的选择有点高，那你就还要再努力哦！"
      })
  )}else if  (tot >=115){
return(
  this.setState({
    types:"恭喜你！你的测评级别是“优秀”，面试那天只要发挥正常，你就能考上心仪的学校啦!"
})
)}

},


                                           render: function() {
                                           return (<textInput>
                                                  {this.state.types}
                                                  </textInput>
                                                   );
                                           }
                                           });



module.exports = Answer;
