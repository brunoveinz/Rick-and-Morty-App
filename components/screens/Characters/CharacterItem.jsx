import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import GlobalStyles from '../../../constants/GlobalStyles'

const CharacterItem = ({personaje}) => {
  return (
    <View style={styles.personajeContainer}>
      <Image source={{ uri: personaje.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{personaje.name}</Text>
        <Text style={styles.info}>Status: {personaje.status}</Text>
        <Text style={styles.info}>Species: {personaje.species}</Text>
      </View>
    </View>
  );
}

export default CharacterItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 30,
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    personajeContainer: {
      flexDirection: 'row',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: GlobalStyles.colors.mortyOrange,
      borderRadius: 10,
      marginBottom: 30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 50,
    },
    infoContainer: {
      flex: 1,
      marginLeft: 10,
    },
    name: {
      fontSize: 30,
      textAlign:'center',
      fontFamily: 'Creepster-Regular',
      marginBottom: 10
    },
    info: {
      textAlign: 'center',
      fontSize: 15,
      color: 'black', 
    },
  });