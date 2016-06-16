/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React=require('react-native');
var Login=require('./ios_views/page/login');
var Home=require('./ios_views/page/home');
var Loading=require('./ios_views/page/loading');

var {
    StyleSheet,
    View,
    Text,
    Navigator,
    Navigator,
    AppRegistry,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicatorIOS,
    AlertIOS,
    AsyncStorage,
} = React;

class GotoSchool extends React.Component {

constructor(props){
     super(props);
     this.state = { onload:'loading'};
 };
 componentDidMount(){
   AsyncStorage.getItem("phone")
   .then((value) => {
    if (value) {
    this.setState({onload:'login'});
    } else {
     this.setState({onload:'unlogin'});
    }
  })
        }
      // this.check();

// check=()=>{
//       if(this.phone!== null || this.phone !== undefined || this.phone !== '') {
//             this.setState({onload:'login'});
//       }
//       else {
//             this.setState({onload:'unlogin'});
//       }
// };
render(){
const {onload } = this.state;
switch(onload) {
     case 'loading':
               return <Loading/>;
     case 'login':
               return(
                 <Navigator
                     initialRoute={{name: 'My First Scene', index: 0}}
                     renderScene={(route, navigator) =>
                       <MySceneComponent
                         name={route.name}
                         onForward={() => {
                           var nextIndex = route.index + 1;
                           navigator.push({
                             name: 'Scene ' + nextIndex,
                             index: nextIndex,
                           });
                         }}
                         onBack={() => {
                           if (route.index > 0) {
                             navigator.pop();
                           }
                         }}
                       />
                     }
                   />



                             <NavigatorIOS
                             style={{flex:1}}
                             initialRoute={{
                             component:Home,
                             passProps:{},
                             title:'123',
                             }}
                             navigationBarHidden={true}
                             />
                           )

     case 'unlogin':
               return (
                              <NavigatorIOS
                              style={{flex:1}}
                              initialRoute={{
                              component:Login,
                              passProps:{},
                              title:'123',
                              }}
                              navigationBarHidden={true}
                              />
                            )
            }
}
};
AppRegistry.registerComponent('GotoSchool', () => GotoSchool);
