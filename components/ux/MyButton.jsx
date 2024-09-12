import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../../constants/GlobalStyles'

const MyButton = ({title, color, onPress }) => {
  return (
    <Pressable 
    style={({pressed}) => [styles.button, { backgroundColor: color || GlobalStyles.colors.alienPurple }, pressed && styles.pressed]}
    onPress={onPress}
    >
        <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default MyButton

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Creepster-Regular'

    },
    button:{
        paddingHorizontal: 12,
        paddingVertical: 8,
        margin: 4,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width:1, height:1 },
        shadowRadius: 2,
        borderRadius: 20,
        backgroundColor: GlobalStyles.colors.alienPurple
    },
    
    pressed: {
        opacity: 0.7
    },
})