import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native'

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <SafeAreaView style={{
          backgroundColor:colors.black,
          flex:1,
          justifyContent:'space-between',
          alignItems:"center",
        }}>
          <View
            style={{
              width:'90%',
              flexDirection: "row",
              justifyContent:'space-between'
              
            }}
          >
            <View
              style={styles.deleteButton}
            />
            <View
              style={styles.closeButton}
            />
          </View>
    
          <Image
            style={styles.mainImage}
            source={{ uri: "https://wallpapercave.com/wp/wp2550666.jpg" }}
          />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  mainImage:{
    width: 370,
    height: 600,
    top:-100
  },
  closeButton:{
    backgroundColor: "green",
    width: 70,
    height: 70,
  },
  deleteButton:{
    backgroundColor: "tomato",
    width: 70,
    height: 70,
  }
  
})
export default ViewImageScreen;