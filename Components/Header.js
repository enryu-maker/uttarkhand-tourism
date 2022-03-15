import { View, Text } from 'react-native'
import React from 'react'
import { COLORS,FONTS,SIZES } from '../Theme/theme'
export const Header = ({ containerStyle, title, titleStyle, leftComponent, rightComponent,img ,imgstyle}) => {
    return (
        <View
            style={{
                // flex:1,
                height: 80,
                flexDirection: 'row',
                ...containerStyle,
                alignSelf:'center',
                marginTop:Platform.OS=="android"? '0%' :12,
                justifyContent:"space-evenly"
            }}
        >
            {
                leftComponent
            }
            {title?
            (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{  ...FONTS.h2, ...titleStyle,color:COLORS.black}}>{title}</Text>
        </View>):(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                        source={img}
                        resizeMode="contain"
                        style={{
                            height: 200,
                            width: 250,
                            ...imgstyle
                        }}
                    />
            </View>
        )}
            
            {
                rightComponent
            }

        </View>
        
    )
}