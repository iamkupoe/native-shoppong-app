import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import RectangleIndicator from '../../components/RectangleIndicate';
import RoundIndicator from '../../components/RoundIndicate';


export default function OnlineShopping({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.headContainer}>
               <Text style={styles.heading}>ONLINE SHOPPING</Text>
            </View>

            <View style={styles.contentContainer}>
            <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</Text>
         </View>

           <View style={styles.imageContainer}>
           <Image source={require('../../assets/online.png')} style={styles.image}/>
           </View>

           <View>
              <TouchableOpacity onPress={()=>{
                  navigation.navigate("AddToCart")
              }} style={styles.opacity}>
                <Text style={styles.opacityText}>Next</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.bottomText}>
              <View style={styles.indicators}>
               <RectangleIndicator/>
               <RoundIndicator/>
               <RoundIndicator/>
              </View>
            
            <View>

               <TouchableOpacity onPress={()=>{
                   navigation.navigate("AddToCart")
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
        justifyContent:"space-between",
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
      justifyContent:"space-between",
    },
    content:{
        fontSize:15,
        color:"gray",
        lineHeight:25
    },
    imageContainer:{
       alignItems:"center",
       //marginVertical:20,
       marginHorizontal:5
    },
    image:{
        width:300,
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
    two:{
        marginLeft:110,
        color:"gray"
    },
    indicators:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft:120
    }
})

