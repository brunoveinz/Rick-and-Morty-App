import { ScrollView, StyleSheet, Text} from 'react-native'
import React from 'react'
import GlobalStyles from '../constants/GlobalStyles'
import ClassView from '../components/screens/Main/ClassView'
import Capitulos from '../assets/capitulos.png'
import Mundos from '../assets/gato.png'
import { SafeAreaView } from 'react-native-safe-area-context'


const Main = ({navigation}) => {
    function CharactesNavigator(){
        navigation.navigate('Characters')
    }
    function ChaptersNavigator(){
      navigation.navigate('Chapters')
    }

  return (
    <SafeAreaView>
        <ScrollView>
            <Text style={GlobalStyles.text.heading}>Categorias</Text>
            <ClassView title='Personajes' image={Mundos} color={GlobalStyles.colors.portalGreen} onPress={CharactesNavigator}/>
            <ClassView title='Capitulos' image={Capitulos} color={GlobalStyles.colors.mortyOrange} onPress={ChaptersNavigator}/>
        </ScrollView>
    </SafeAreaView>

  )
}

export default Main

const styles = StyleSheet.create({})