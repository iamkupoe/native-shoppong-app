import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddToCartScreen from './src/screens/AddToCartScreen';
import OnlineShoppingScreen from './src/screens/OnlineShopping';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessful';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 

const Stack = createStackNavigator()

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>

      <Stack.Navigator>
      <Stack.Screen
       options={{
         headerTitle:"Shopping Page",
         headerStyle:{
           backgroundColor:"#b430d1"
         },
         headerTintColor:"white",
         headerTitleAlign:"center",
         headerRight:()=>{
           return(
            <FontAwesome5 name="shopping-basket" size={24} color="white" style={{marginRight:10}} />
           )
         },
         headerTitleStyle:{
           fontSize:25
         }
         
       }}
       name="OnlineShopping" component={OnlineShoppingScreen}/>
       <Stack.Screen 

       options={{
        headerTitle:"Cart Page",
        headerStyle:{
          backgroundColor:"#b430d1"
        },
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerRight:()=>{
          return(
           <Feather name="shopping-cart" size={20} color="white" style={{marginRight:10}} />
          )
        },
        headerTitleStyle:{
          fontSize:25
        }
        
      }}
       name="AddToCart" component={AddToCartScreen}/>
       <Stack.Screen 
       options={{
        headerTitle:"Payment Page",
        headerStyle:{
          backgroundColor:"#b430d1"
        },
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerRight:()=>{
          return(
            <MaterialIcons name="payment" size={24} color="white" style={{marginRight:10}} />
          )
        },
        headerTitleStyle:{
          fontSize:25
        }
        
      }}
       name="PaymentSuccessful" component={PaymentSuccessfulScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

 