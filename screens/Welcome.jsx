import { StyleSheet, Text, View, Button, Image} from 'react-native'
import React, {useEffect} from 'react'
import GlobalStyles from '../constants/GlobalStyles'
import MyButton from '../components/ux/MyButton'
import Mundos from '../assets/mundos.png'

const Welcome = ({navigation}) => {  
  function ContinueMainHandler(){
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.created}>Created by Bveinz</Text>
      <Image source={Mundos} style={styles.image} resizeMode='contain'></Image>
      <Text style={GlobalStyles.text.heading}>Rick And Morty Library!</Text>
      <MyButton title='Continuar' onPress={ContinueMainHandler} color={GlobalStyles.colors.portalGreen}/>
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
        width: 200,
        height: 400,
    },
    created:{
      color: GlobalStyles.colors.portalGreen,
      fontFamily: 'Creepster-Regular'
    },
  
})