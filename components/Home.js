import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Banner from './Banner';
import Category from './Category';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';

export default function Home({ navigation }) {
  const navigateToProductDetail = (item) => {
    navigation.navigate('ProductDetail', { item });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Banner />
          <Category />
          {}
          <Product navigateToProductDetail={navigateToProductDetail} />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    paddingBottom: 500,
  },
});
