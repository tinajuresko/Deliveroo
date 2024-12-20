import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Restaurant" component={RestaurantScreen}></Stack.Screen>
            <Stack.Screen name="Basket" component={BasketScreen} options={{presentation: 'modal', headerShown: false}}></Stack.Screen>
            <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Delivery" component={DeliveryScreen} options={{headerShown: false}}></Stack.Screen>
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
    
    
  );
}


