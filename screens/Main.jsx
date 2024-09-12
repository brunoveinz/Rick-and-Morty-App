import { ScrollView, StyleSheet, Text} from 'react-native'
import React, {useEffect} from 'react'
import GlobalStyles from '../constants/GlobalStyles'
import ClassView from '../components/screens/Main/ClassView'
import Capitulos from '../assets/capitulos.png'
import Mundos from '../assets/gato.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();


const Main = ({navigation}) => {

    const [loaded, error] = useFonts({
      'Creepster-Regular': require('../assets/fonts/Creepster-Regular.ttf'),
    });

    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

    if (!loaded && !error) {
      return null;
    }


    function CharactesNavigator(){
        navigation.navigate('Characters')
    }
    function ChaptersNavigator(){
      navigation.navigate('Chapters')
    }

  return (
    <SafeAreaView>
        <ScrollView>
            <Text style={styles.heading}>Categorias</Text>
            <ClassView title='Personajes' image={Mundos} color={GlobalStyles.colors.portalGreen} onPress={CharactesNavigator}/>
            <ClassView title='Capitulos' image={Capitulos} color={GlobalStyles.colors.mortyOrange} onPress={ChaptersNavigator}/>
        </ScrollView>
    </SafeAreaView>

  )
}

export default Main

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    color: '#ff9800',
    textAlign: 'center',
    marginButton: 20,
    fontFamily: 'Creepster-Regular'
  },
})