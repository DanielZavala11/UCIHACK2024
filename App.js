import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { store } from './store'
import { Provider } from 'react-redux';
import InfoScreen from './screens/InfoScreen';
import BookScreen from './screens/BookScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{headerShown: false,}}
        />
        <Stack.Screen
         name='InfoScreen'
         component={InfoScreen}
         options={{headerShown: false,}}
        />
        <Stack.Screen
         name='BookScreen'
         component={BookScreen}
         options={{headerShown: false,}}
         />
    </Stack.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
