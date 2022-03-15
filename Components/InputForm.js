import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import { IMAGE } from '../Theme/images';

import { FONTS, SIZES, COLORS } from "../Theme/theme"

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength,
    keytype="",
    onPressIn,
    img,
    onPress
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{ width:'88%',
                    alignSelf:'center',
                    flexDirection:"row",
                    justifyContent:"space-between"
                     }}>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 ,alignSelf:'flex-start'}}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    height:  60,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 10,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightprimary,
                    width:'88%',
                    alignSelf:'center',
                    ...inputContainerStyle
                }}
            >
                {
                    prependComponent
                }
                <TextInput
                    style={{ flex: 1, ...inputStyle }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}
                    returnKeyType="default"
                    onPressIn={onPressIn}
                />
                <TouchableOpacity style={{
                    alignSelf:"center",
                    backgroundColor:COLORS.primary,
                    height:40,
                    width:40,
                    borderRadius:SIZES.base+5,
                    justifyContent:"center",
                }}
                onPress={onPress}
                >
                <Image source={img} style={{
                    width:25,
                    height:25,
                    alignSelf:"center"
                }}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormInput