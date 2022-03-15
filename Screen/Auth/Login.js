import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { Header } from '../../Components/Header';
import { COLORS,FONTS, SIZES } from '../../Theme/theme';
import FormInput from '../../Components/InputForm';
import TextButton from '../../Components/IconButton';
import { IMAGE } from '../../Theme/images';
import CustomSwitch from '../../Components/CustomToggle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import utils from '../../utils/Utils';
export const Login=({navigation})=>{
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [perr, setPErr] = React.useState('');
  const [Passerr, setPassErr] = React.useState('');
  function isEnableSignIn() {
    return phone != "" && password != ""
}
    return (
      <View style={{backgroundColor:COLORS.white,flex:1}}>
        <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        marginTop: SIZES.normalRad,
        paddingBottom: 30,
      }}>
        <Header/>
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
          marginTop:"5%"
        }}>
        <FormInput
        label={"Mobile"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        value={phone}
        img={IMAGE.phone}
        onChange={text => {
          utils.validateEmail(text, setPErr)
          setPhone(text)
        }}
        errorMsg={perr}
        />
        <FormInput
        label={"Password"}
        value={password}
        secureTextEntry={!showPass}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        onChange={text => {
          utils.validatePassword(text,setPassErr)
          setPassword(text)
        }}
        errorMsg={Passerr}
        onPress={()=>{
          setShowPass(!showPass)
        }}
        img={showPass ? IMAGE.hide : IMAGE.show}
        />
        <View style={{
          flexDirection:"row",
          justifyContent:"space-evenly",
          marginTop:30
        }}>
          <CustomSwitch label='Save Me?'
          value={saveMe}
          onChange={change => setSaveMe(change)}
          />
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("Forget")
          }}
          >
          <Text style={{
            ...FONTS.h4,
            color:COLORS.black
          }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <TextButton
        loading={loading}
        buttonContainerStyle={{
          marginTop:30,
          backgroundColor:isEnableSignIn()? COLORS.primary:COLORS.lightprimary
        }}
        labelStyle={{
          color:isEnableSignIn()? COLORS.white:COLORS.black
        }}
        onPress={()=>{
          alert(phone,password)
        }}
        icon={IMAGE.login}
        label={"Login"}/>
        <TouchableOpacity style={{
          margin:10
        }}
        onPress={()=>{navigation.navigate("Signup")}}
        >
          <Text style={{...FONTS.h4,alignSelf:"center"}}>New to App? SIGNUP</Text>
          </TouchableOpacity>        
        </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({})