import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail'; 
import Cart from './components/Cart';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: true }} />
          <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
