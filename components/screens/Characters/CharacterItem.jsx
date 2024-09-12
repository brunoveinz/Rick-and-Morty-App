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
        <Text style={styles.info}>Gender: {personaje.gender}</Text>
        <Text style={styles.info}>Origin: {personaje.origin.name}</Text>
        <Text style={styles.info}>Location: {personaje.location.name}</Text>
      </View>
    </View>
  );
}

export default CharacterItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
    },
    personajeContainer: {
      flexDirection: 'row',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: GlobalStyles.colors.portalGreen,
      borderRadius: 10,
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
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    infoContainer: {
      flex: 1,
      marginLeft: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    info: {
      fontSize: 14,
      color: 'black',
    },
  });