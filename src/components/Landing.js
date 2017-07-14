import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SinchVerification from 'react-native-sinch-verification';
import { NavigationActions } from 'react-navigation';
const custom = "A custom string to be sent to your server backend, through Sinch's callback URL";

export default class Landing extends Component {
  static navigationOptions = {
    header: false
  }

  componentWillMount() {
    //SinchVerification.init('183445ab-5dda-4cf4-bceb-8288050351cf');
  }

  componentDidMount() {
    /*SinchVerification.sms('6287884737690', custom, (err, res) => {
      if (!err) {
          // for android, verification is done, because the sms has been read automatically
          // for ios, this means the sms has been sent out, you need to call verify with the received code
        console.log('sent')
      }else{
        console.log(err)
      }
    });*/
  }

  _login(){
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'Login', params: { id:2 } })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My TestApp!
        </Text>
        <View>
          <TouchableOpacity onPress={this._login.bind(this)} style={styles.button}>
            <Text>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]}>
            <Text style={{color:'#fff'}}>
              Send Sms Verification
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
  button:{
    width:200,
    height:40,
    backgroundColor:'skyblue',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
