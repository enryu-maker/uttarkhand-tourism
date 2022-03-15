import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { Header } from '../../Components/Header';
import { COLORS,FONTS, SIZES } from '../../Theme/theme';
import FormInput from '../../Components/InputForm';
import TextButton from '../../Components/IconButton';
import { IMAGE } from '../../Theme/images';
import CustomSwitch from '../../Components/CustomToggle';
import { NavigationContainer } from '@react-navigation/native';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state=({
            phone:"",
            password:""
        })
    }
  render() {
    return (
      <View style={{backgroundColor:COLORS.white,flex:1}}>
        <Header title={"Login"}/>
        <View style={{}}>
          <Image source={IMAGE.icon} style={{
            width:120,
            height:120,
            alignSelf:"center"
          }}
            />
        </View>
        <View style={{
          margin:10,
          marginTop:"10%"
        }}>
        <FormInput
        label={"Mobile"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad
        }}
        img={IMAGE.phone}

        />
        <FormInput
        label={"Password"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad
        }}
        img={IMAGE.show}
        />
        <View style={{
          flexDirection:"row",
          justifyContent:"space-evenly",
          marginTop:30
        }}>
          <CustomSwitch label='Save Me?'/>
          <TouchableOpacity>
          <Text style={{
            ...FONTS.h4
          }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <TextButton
        buttonContainerStyle={{
          marginTop:30
        }}
        icon={IMAGE.login}
        label={"Login"}/>
        <TouchableOpacity style={{
          margin:10
        }}
        onPress={()=>{this.props.navigation.navigate("Signup")}}
        >
          <Text style={{...FONTS.h4,alignSelf:"center"}}>New to App? SIGNUP</Text>
          </TouchableOpacity>        
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})