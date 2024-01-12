import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductDetail({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

  const addToCart = async (product) => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const cart = existingCart ? JSON.parse(existingCart) : [];

      cart.push(product);

      await AsyncStorage.setItem('cart', JSON.stringify(cart));

      Alert.alert(
        'Thông báo',
        'Sản phẩm đã được thêm vào giỏ hàng thành công!',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={35} color="black" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>Giá tiền: ${item.price}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productCategory}>Danh mục: {item.category}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.productRating}>Đánh giá: </Text>
          <Text style={styles.ratingNumber}>{item.rating.rate}</Text>
          <Text style={styles.ratingCount}> ({item.rating.count} đánh giá)</Text>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    padding: 16,
    alignItems: 'center',
    paddingBottom: 20,  
  },
  productImage: {
    width: '100%',
    height: 200,
    aspectRatio: 1,
    resizeMode: 'center',
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  productCategory: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productRating: {
    fontSize: 16,
    color: 'orange',
  },
  ratingNumber: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 16,
    color: 'gray',
  },
  addToCartButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  goBackButton: {
    paddingTop: 35,
  }
});
