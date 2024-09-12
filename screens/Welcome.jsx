import { StyleSheet, Text, View, Button, Image} from 'react-native'
import React from 'react'
import GlobalStyles from '../constants/GlobalStyles'
import MyButton from '../components/ux/MyButton'
import Portada from '../assets/gato.png'

const Welcome = ({navigation}) => {
  
  function ContinueMainHandler(){
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <Image source={Portada} style={styles.image}></Image>
      <Text style={GlobalStyles.text.heading}>Rick And Morty Library!</Text>
      <MyButton title='Continuar' onPress={ContinueMainHandler}/>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 100,
        alignItems: 'center'
    },
    image:{
        width: 150,
        height: 300,
    }
    
})