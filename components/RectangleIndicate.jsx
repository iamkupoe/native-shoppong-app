import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function RectangleIndicator() {
    return (
        <View style={styles.rectIndi}></View>
    )
}

const styles = StyleSheet.create({
    rectIndi:{
        backgroundColor:"blue",
        height:10,
        width:30,
        borderRadius:5,
        marginHorizontal:2
      },
})