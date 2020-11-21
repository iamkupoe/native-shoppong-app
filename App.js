import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCart from './AddToCart';
import OnlineShopping from './OnlineShopping';
import PaymentSuccessful from './PaymentSuccessful';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<AddToCart/>*/}
      <OnlineShopping/>
     {/* <PaymentSuccessful/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
