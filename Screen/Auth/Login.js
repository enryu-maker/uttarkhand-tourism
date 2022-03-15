import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { Header } from '../../Components/Header';
import { COLORS,FONTS, SIZES } from '../../Theme/theme';
import FormInput from '../../Components/InputForm';
import TextButton from '../../Components/IconButton';
import { IMAGE } from '../../Theme/images';
import CustomSwitch from '../../Components/CustomToggle';
export const Login=({navigation})=>{
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState('');
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
          borderRadius:SIZES.inputRad,
          marginTop:10
        }}
        value={phone}
        img={IMAGE.phone}
        onChange={text => {
          setPhone(text)
        }}

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
          setPassword(text)
        }}
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
          marginTop:30
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
      </View>
    )
  }


const styles = StyleSheet.create({})