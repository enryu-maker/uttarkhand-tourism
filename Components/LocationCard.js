import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Theme/theme'

export const Location=({
    image,
    name,
    content,
    address,
    containerStyle
})=>{
  return (
    <TouchableOpacity style={{
        height:150,
        width:300,
        // width:"88%",
        backgroundColor:COLORS.lightprimary,
        borderRadius:SIZES.bigRad,
        alignSelf:"center",
        alignContent:"center",
        flexDirection:"column",
        padding:10,
        ...containerStyle
      }}>
          <View style={{
              flex:1,
              flexDirection:"row",
          }}>
<View style={{
              backgroundColor:COLORS.primary,
              height:100,
              width:245,
                borderRadius:SIZES.smallRad

          }}/>
          <View style={{
              marginLeft:2,
              backgroundColor:COLORS.primary,
              height:100,
              width:80,
            borderRadius:SIZES.smallRad,
          }}/>
          </View>
          <View style={{
              justifyContent:"center"
          }}>
        <Text style={{
       ...FONTS.h3,
       ...COLORS.primary,
    //    width:"88%",
       alignSelf:"center",
       padding:10,
       letterSpacing:1.5
     }}>
       Name of Place
     </Text></View>
          
          



      </TouchableOpacity>
  )
}