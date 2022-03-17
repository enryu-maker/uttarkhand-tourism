import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Theme/theme'

export const Horizontal=({
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
        ...containerStyle
      }}></TouchableOpacity>
  )
}