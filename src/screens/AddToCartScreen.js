import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import RectangleIndicator from '../../components/RectangleIndicate';
import RoundIndicator from '../../components/RoundIndicate';
export default function AddToCart({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.headContainer}>
               <Text style={styles.heading}>ADD TO CART</Text>
            </View>

            <View style={styles.contentContainer}>
            <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</Text>
         </View>

           <View style={styles.imageContainer}>
           <Image source={require('../../assets/add.png')} style={styles.image}/>
           </View>

           <View>
              <TouchableOpacity onPress={()=>{
                  navigation.navigate("PaymentSuccessful")
              }} style={styles.opacity}>
                <Text style={styles.opacityText}>Next</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.bottomText}>
            
          <View>

            <TouchableOpacity onPress={()=>{
                navigation.navigate("OnlineShopping")
            }}>
            <Text style={styles.one}>Previous</Text>
            </TouchableOpacity>
         
         </View>
           
           
            <View style={styles.indicators}>
              <RoundIndicator/>
              <RectangleIndicator/>
              <RoundIndicator/>
            </View>

            <View>

            <TouchableOpacity onPress={()=>{
                navigation.navigate("PaymentSuccessful")
            }}>
            <Text style={styles.two}>Skip</Text>
            </TouchableOpacity>
         
         </View>
            
          </View>
   
 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        //marginVertical:30,
        marginHorizontal:30
    },
    headContainer:{
        //marginVertical:10,
        marginHorizontal:10
    },

    heading:{
        fontSize:20,
        fontWeight:"bold"

    },
    contentContainer:{
       marginHorizontal:10,
    },
    content:{
        fontSize:15,
        color:"gray",
        lineHeight:25
    },
    imageContainer:{
       alignItems:"center",
       //marginVertical:20,
       marginHorizontal:10
    },
    image:{
        width:350,
        height:200
    },
    opacity:{
      marginVertical:10,
      alignSelf:"center",
      alignItems:"center",
      paddingVertical:10,
      backgroundColor:"#6275f0",
      height:50,
      width:150,
      borderRadius:40
    },
    opacityText:{
      color:"white",
      fontSize:20,
      fontWeight:"bold"
    },
    bottomText:{
        marginVertical:10,
        flexDirection:"row",
        
    },
    one:{
        color:"gray"
    },
    two:{
        marginLeft:110,
        color:"gray"
    },
    indicators:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:70

    }
})

