import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/theme'
import { Header } from '../../Components/Header'
import { Horizontal } from '../../Components/Horizontal'
import { Location } from '../../Components/LocationCard'
export const LoadLoc=()=>{
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.white
    }}>
      <Header title={"Location"}/>
      <ScrollView>
        <Location containerStyle={{
          width:"88%"
        }}/>
      </ScrollView>
    </View>
  )
}