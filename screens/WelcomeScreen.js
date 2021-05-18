import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
    constructor(){
      super()
      this.state={
        emailId : '',
        password: ''
      }
    }
  
    userLogin = (emailId, password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(()=>{
        alert("Successfully Login")
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      })
    }
  
    userSignUp = (emailId, password) =>{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then((response)=>{
        alert("User Added Successfully")
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       alert(errorMessage)
      });
    }
  
  
    render(){
      return(
        <View style={styles.container}>
  <View style={styles.profileContainer}>
          <Text style={styles.title}>Barter System</Text>
        </View>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://sites.google.com/site/dhyanivekariyaeportfolio/_/rsrc/1421149686049/barter-system/574052-42518-0.jpg?height=320&width=318',
          }}
        />
        
    
          
          <View style={styles.buttonContainer}>
            <TextInput
            style={styles.loginBox}
            placeholder="Email Id"
            placeholderTextColor = "white"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
  
          <TextInput
            style={styles.loginBox}
            secureTextEntry = {true}
            placeholder="Password"
            placeholderTextColor = "white"
            onChangeText={(text)=>{
              this.setState({
                password: text
              })
            }}
          />
            <TouchableOpacity
              style={[styles.button,{marginBottom:20, marginTop:20}]}
              onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
              >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
              >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'lightgreen'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:25,
      fontWeight:'300',
      paddingBottom:30,
      color : 'white'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
    marginTop:0,
  },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"blue",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 12,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'white',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    },
    
  
  })