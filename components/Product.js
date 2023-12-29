import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Product = ({ navigation, navigateToProductDetail, addToCart }) => {
  const [data, setData] = useState(null);
  const [numColumns, setNumColumns] = useState(1); 

  useEffect(() => {
    getDataUsingSimpleGetCall(); 
  }, []); 

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        console.log('Finally called');
      });
  };
  

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToProductDetail(item)}>
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <View style={styles.home}>
        <Text style={styles.Text}>Tất cả sản phẩm</Text>
        {data && (
          <FlatList
            key={numColumns} 
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  home: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  productItem: {
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 80,
  },
  productImage: {
    width: "100%",
    height: 200,
    aspectRatio: 1,
    resizeMode: 'center', 
  },
  productName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
  },
});

export default Product;
