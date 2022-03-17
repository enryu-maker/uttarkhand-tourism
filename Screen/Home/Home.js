import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../Theme/theme'
import { Horizontal } from '../../Components/Horizontal'
import { Vertical } from '../../Components/vertical'
import { Header } from '../../Components/Header'
export const Home=({
  navigation
})=>{
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.white
    }}>
      <Header title={"देवभूमि"}/>
     {/* colorsal */}
     <View style={{
       marginTop:10,
       backgroundColor:COLORS.lightprimary,
       height:200,
       width:"88%",
       borderRadius:SIZES.bigRad,
       alignSelf:"center"
     }}/>
     <ScrollView>

     <Text style={{
       ...FONTS.h3,
       ...COLORS.primary,
       width:"88%",
       alignSelf:"center",
       padding:10,
       letterSpacing:1
     }}>
       Most Visited
     </Text>
     <ScrollView 
     horizontal
     showsHorizontalScrollIndicator={false}
     >
     <Vertical containerStyle={{
        marginLeft:30

     }}/>
     <Vertical/>
     <Vertical/>
     <Vertical/>
     </ScrollView>
     
     <Text style={{
       ...FONTS.h3,
       ...COLORS.primary,
       width:"88%",
       alignSelf:"center",
       padding:10,
       letterSpacing:1.5
     }}>
       Recommended
     </Text>
     <ScrollView 
     horizontal
  showsHorizontalScrollIndicator={false}

     >
     <Horizontal containerStyle={{
       marginLeft:30,
     }}/>
     <Horizontal/>
     <Horizontal/>
     <Horizontal/>
     </ScrollView>
     </ScrollView>
    </View>
  )
}