import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { Header } from '../../Components/Header';
import { COLORS,FONTS, SIZES } from '../../Theme/theme';
import FormInput from '../../Components/InputForm';
import TextButton from '../../Components/IconButton';
import { IMAGE } from '../../Theme/images';
export const Signup=()=>{
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState('');
    return (
      <View style={{backgroundColor:COLORS.white,flex:1}}>
        <Header title={"Signup"}/>
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
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        img={IMAGE.phone}

        />
        <FormInput
        label={"Password"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        img={IMAGE.show}
        />
        <FormInput
        label={"Re-Enter Password"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        img={IMAGE.show}
        />
        <TextButton
        buttonContainerStyle={{
          marginTop:30
        }}
        icon={IMAGE.user}
        label={"Signup"}/>
        <TouchableOpacity style={{
          margin:10
        }}
        onPress={()=>{this.props.navigation.push("Login")}}
        >
          <Text style={{...FONTS.h4,alignSelf:"center"}}>Already registered to App? LOGIN</Text>
          </TouchableOpacity>        
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({})