import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
 } from 'react-native';

 class Card extends Component{
   constructor(props){
     super(props);

     this.state = {
       counter:0
     }

   }

   onPress = () =>{
     let { counter } = this.state;
     counter+=1;
     this.setState({
       counter
     })

     this.props.onPress();
   }

   render(){
     return(
       <View style={styles.container}>
           <TouchableOpacity onPress={this.onPress.bind(this)}>
           <Text>
             {this.props.text?this.props.text:'hello world'} {this.state.counter}
           </Text>
         </TouchableOpacity>
       </View>
     )
   }
 }

 const styles = StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
   }
 })

 Card.defaultProps = {
   onPress : () => {}
 }

 export default Card;
