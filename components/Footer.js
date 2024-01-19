import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <Image
          source={require('../images/footer/home_.png')}
          style={[styles.icon, styles.IconFooter]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Heart')}>
        <Image
          source={require('../images/footer/like_.png')}
          style={[styles.icon, styles.IconFooter]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Comment')}>
        <Image
          source={require('../images/footer/comment_.png')}
          style={[styles.icon, styles.IconFooter]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Info')}>
        <Image
          source={require('../images/footer/user-secret_.png')}
          style={[styles.icon, styles.IconFooter]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Cart')}>
        <Image
          source={require('../images/footer/shopping-cart_.png')}
          style={[styles.icon, styles.IconFooter]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  IconFooter: {
    width: 30, 
    height: 30, 
  },
});
