
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome';
import Main from './screens/Main';
import Characters from './screens/Characters';
import GlobalStyes from './constants/GlobalStyles'
import Chapters from './screens/Chapters';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: GlobalStyes.colors.portalGreen,
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontSize: 20,
  },
  contentStyle: {
    backgroundColor: GlobalStyes.colors.spaceGray,
  },
};

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="Main" component={Main} options={{title:'Categorias', headerBackTitle:'Volver', headerShown:false}}/>
        <Stack.Screen name="Characters" component={Characters} options={{title: 'Personajes', headerShown:false}}/>
        <Stack.Screen name="Chapters" component={Chapters} options={{title: 'Capitulos', headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


