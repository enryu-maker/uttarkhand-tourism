import { View, Text,Platform } from 'react-native'
import React from 'react'
import { COLORS,FONTS,SIZES } from '../Theme/theme'
export const Header = ({ containerStyle, title, titleStyle, leftComponent, rightComponent,img ,imgstyle}) => {
    return (
        <View
            style={{
                // flex:1,
                height: 50,
                flexDirection: 'row',
                alignSelf:'center',
                marginTop:Platform.OS=="android" ? 0 :12,
                justifyContent:"space-evenly",
                ...containerStyle,
            }}
        >
            {
                leftComponent
            }
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{  ...FONTS.h2, ...titleStyle,color:COLORS.black,lineHeight:35}}>{title}</Text>
            </View>
            {
                rightComponent
            }

        </View>
        
    )
}