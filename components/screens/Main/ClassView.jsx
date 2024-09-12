import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MyButton from '../../ux/MyButton'

const ClassView = ({image, title, color, onPress}) => {
  return (
    <View style={styles.container}>
        <Image source={image} resizeMode='contain' style={styles.image}/>
        <MyButton title={title} color={color} onPress={onPress}/>
    </View>
  )
}

export default ClassView

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    image:{
        width: 250,
        height: 250,
    },
})