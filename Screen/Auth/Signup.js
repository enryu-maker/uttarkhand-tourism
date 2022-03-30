import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { Header } from '../../Components/Header';
import { COLORS,FONTS, SIZES } from '../../Theme/theme';
import FormInput from '../../Components/InputForm';
import TextButton from '../../Components/IconButton';
import { IMAGE } from '../../Theme/images';
import utils from '../../utils/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export const Signup=({navigation})=>{
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [showPass1, setShowPass1] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [perr, setPErr] = React.useState('');
  const [Passerr, setPassErr] = React.useState('');
  const [Passerr1, setPassErr1] = React.useState('');
  const [user, setUser] = React.useState('');

  function isEnableSignIn() {
    return phone != "" && password != "" && password1 != ""
}

    return (
      
      <View style={{backgroundColor:COLORS.white,flex:1}}>
        
        <Header
        leftComponent={
          <TouchableOpacity style={{
            alignSelf:"center",
            backgroundColor:COLORS.primary,
            height:40,
            width:40,
            borderRadius:SIZES.base+5,
            justifyContent:"center",
            marginLeft:30,
        marginTop: SIZES.normalRad,

        }}
        onPress={()=>{navigation.goBack()}}
        >
        <Image source={IMAGE.back} style={{
            width:25,
            height:25,
            alignSelf:"center",
            tintColor:COLORS.black
        }}/>
        </TouchableOpacity>
        }/>
        <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        marginTop: SIZES.normalRad,
        paddingBottom: 30,
      }}>
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
          marginTop:"1%"
        }}>
        <FormInput
        value={phone}
        label={"Mobile"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        img={IMAGE.phone}
        errorMsg={perr}
        onChange={text => {
          utils.validateEmail(text, setPErr)
          setPhone(text)
        }}
        />
        <FormInput
        value={user}
        label={"Username"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        img={IMAGE.user}
        onChange={text => {
          // utils.validatePassword(text,setPassErr)
          setUser(text)
        }}
        />
        <FormInput
        value={password}
        label={"Password"}
        secureTextEntry={!showPass}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        errorMsg={Passerr}
        onPress={()=>{
          setShowPass(!showPass)
        }}
        img={showPass ? IMAGE.hide : IMAGE.show}
        onChange={text => {
          utils.validatePassword(text,setPassErr)
          setPassword(text)
        }}
        />
        <FormInput
        value={password1}
        secureTextEntry={!showPass}
        label={"Re-Enter"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        errorMsg={Passerr1}
        onPress={()=>{
          setShowPass(!showPass1)
        }}
        onChange={text => {
          utils.validateBoth(password,text,setPassErr1)
          setPassword1(text)
        }}
        img={showPass1 ? IMAGE.hide : IMAGE.show}
        />
        <TextButton
        buttonContainerStyle={{
          marginTop:30,
          backgroundColor:isEnableSignIn()? COLORS.primary:COLORS.lightprimary
        }}
        labelStyle={{
          color:isEnableSignIn()? COLORS.white:COLORS.black
        }}
        disabled={!isEnableSignIn()}
        loading={loading}
        icon={IMAGE.user}
        label={"Signup"}/>
        <TouchableOpacity style={{
          margin:10
        }}
        onPress={()=>{navigation.navigate("Login")}}
        >
          <Text style={{...FONTS.h4,alignSelf:"center"}}>Already registered to App? LOGIN</Text>
          </TouchableOpacity>        
        </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({})