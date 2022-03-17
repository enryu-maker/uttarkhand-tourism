import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Theme/theme'

export const Vertical=({
    image,
    name,
    containerStyle
})=>{
  return (
    <TouchableOpacity style={{
        // flex:1,
        height:180,
        width:150,
        backgroundColor:COLORS.lightprimary,
        borderRadius:SIZES.bigRad,
        ...containerStyle
      }}></TouchableOpacity>
  )
}