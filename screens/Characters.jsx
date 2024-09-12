import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import GlobalStyles from '../constants/GlobalStyles'
import { Personaje } from '../models/Personajes';
import CharacterItem from '../components/screens/Characters/CharacterItem';
import { ObtenerPersonajes } from '../api/Characters/AllCharacters';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchPersonajes = async () => {
      const personajesData = await ObtenerPersonajes()
      setPersonajes(personajesData)
    };

    fetchPersonajes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={GlobalStyles.text.heading}>Personajes</Text>
      <FlatList
        data={personajes}
        renderItem={({ item })=> <CharacterItem personaje={item}/>}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;