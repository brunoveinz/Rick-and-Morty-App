import React, { useState, useEffect, useCallback } from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles'
import CharacterItem from '../components/screens/Characters/CharacterItem';
import { ObtenerPersonajes } from '../api/Characters/AllCharacters';
import * as SplashScreen from 'expo-splash-screen'; // Asegúrate de importar SplashScreen

function App() {
  const [Personajes, setPersonajes] = useState([]);
  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {
    const fetchPersonajes = async () => {
      const personajesData = await ObtenerPersonajes()
      setPersonajes(personajesData)
      setAppIsReady(true)
    };

    fetchPersonajes();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <SafeAreaView style={styles.loadingContainer} onLayout={onLayoutRootView}>
        <ActivityIndicator size="large" color={GlobalStyles.colors.portalGreen} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={GlobalStyles.text.heading}>Personajes</Text>
      <FlatList
        data={Personajes}
        renderItem={({ item })=> <CharacterItem personaje={item}/>}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex:1,
    justifyContent: 'center',
    alignContent: 'center'
  }

});

export default App;