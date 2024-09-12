import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { ObtenerCapitulos } from '../api/Chapters/AllChapters'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyles from '../constants/GlobalStyles'
import ChapterItem from '../components/screens/Chapters/ChapterItem'
import * as SplashScreen from 'expo-splash-screen';


const Chapters = () => {
  const [Capitulos, SetCapitulos] = useState([]);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(()=>{
    const fetchChapters = async () => {
      const chaptersData = await ObtenerCapitulos()
      SetCapitulos(chaptersData)
      setAppIsReady(true)
    };
    fetchChapters();
  },[])


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
    <SafeAreaView style={styles.container} >
      <Text style={styles.heading}>Capitulos</Text>
      <FlatList
        data={Capitulos}
        renderItem={({ item })=> <ChapterItem chapter={item}/>}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default Chapters

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  loadingContainer: {
    flex:1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  heading: {
    fontSize: 50,
    color: '#ff9800',
    textAlign: 'center',
    marginButton: 20,
    fontFamily: 'Creepster-Regular'
  },
})