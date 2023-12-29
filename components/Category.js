import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default function Category() {
  const images = [
    require('../images/category/phone.jpeg'),
    require('../images/category/icons8-laptop-48.png'),
    require('../images/category/icons8-pc-48.png'),
    require('../images/category/icons8-earphone-64.png'),
    require('../images/category/icons8-apple-watch-40.png'),
    require('../images/category/icons8-ipad-48.png'),
    require('../images/category/icons8-mouse-48.png'),
    require('../images/category/icons8-keyboard-64.png'),
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
      {images.map((image, index) => (
        <Image key={index} source={image} style={styles.image} resizeMode="contain" />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 80,
    marginHorizontal: 10,
  },
});
