import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail'; 
import Cart from './components/Cart';
import MenProduct from './components/MenProduct';
import WomenProduct from './components/WomenProduct';
import ElectronicsProduct from './components/ElectronicsProduct';
import JeweleryProduct from './components/JeweleryProduct';
import Info from './components/Info';
import Heart from './components/Heart';
import Comment from './components/Comment';
import Bell from './components/Bell';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
          <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="MenProduct" component={MenProduct} options={{ headerShown: false }} />
          <Stack.Screen name="WomenProduct" component={WomenProduct} options={{ headerShown: false }} />
          <Stack.Screen name="ElectronicsProduct" component={ElectronicsProduct} options={{ headerShown: false }} />
          <Stack.Screen name="JeweleryProduct" component={JeweleryProduct} options={{ headerShown: false }} />
          <Stack.Screen name="Info" component={Info} options={{ headerShown: false }} />
          <Stack.Screen name="Heart" component={Heart} options={{ headerShown: false }} />
          <Stack.Screen name="Comment" component={Comment} options={{ headerShown: false }} />
          <Stack.Screen name="Bell" component={Bell} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}
