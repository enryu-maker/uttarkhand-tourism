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
  const [saveMe, setSaveMe] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [perr, setPErr] = React.useState('');
  const [Passerr, setPassErr] = React.useState('');
  const [Passerr1, setPassErr1] = React.useState('');

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
        label={"Re-Enter Password"}
        inputContainerStyle={{
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        errorMsg={Passerr1}
        onPress={()=>{
          setShowPass(!showPass)
        }}
        onChange={text => {
          utils.validateBoth(password,text,setPassErr1)
          setPassword1(text)
        }}
        img={showPass ? IMAGE.hide : IMAGE.show}
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