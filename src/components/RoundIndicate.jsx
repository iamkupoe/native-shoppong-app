import React from 'react';
import {View, StyleSheet} from 'react-native'

const RoundIndicator = () => {
    return (
        <View style={styles.indicator}></View>
    );
}

const styles = StyleSheet.create({
    indicator:{
        backgroundColor:"#d4d9d6",
        height:10,
        width:10,
        borderRadius:5
      },
})
export default RoundIndicator;