import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const Product = ({ navigation, navigateToProductDetail, addToCart }) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [originalData, setOriginalData] = useState(null);
  const SearchRef = useRef(null);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);

  useEffect(() => {
    // Kiểm tra khi giá trị của ô input thay đổi
    if (search === '') {
      // Nếu ô input trống, load dữ liệu lại ban đầu
      setData(originalData);
    } else {
      // Nếu ô input không trống, thực hiện tìm kiếm
      onSearch(search);
    }
  }, [search]);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response) {
        setData(response.data);
        setOriginalData(response.data); // Lưu dữ liệu ban đầu
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        console.log('Finally called');
      });
  };

  const onSearch = text => {
    if (text === '') {
      setData(originalData);
    } else {
      let tempList = originalData.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempList);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToProductDetail(item)}>
      <View style={[styles.productItem, { width: (windowWidth - 48) / 2 }]}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <View style={styles.searchContainer}>
  <View style={styles.searchInputContainer}>
    <TextInput
      ref={SearchRef}
      style={styles.searchInput}
      placeholder="Tìm kiếm sản phẩm"
      value={search}
      onChangeText={txt => {
        setSearch(txt);
      }}
    />
    <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
  </View>
  {search === '' ? null : (
    <TouchableOpacity
      style={styles.clearButton}
      onPress={() => {
        SearchRef.current.clear();
        setSearch('');
      }}
    />
  )}
  <TouchableOpacity onPress={() => {/* Xử lý sự kiện khi nhấn vào nút/hình ảnh */}}>
    <Image
      source={require('../images/footer/filter_.png')}
      style={styles.filter}
    />
  </TouchableOpacity>
</View>


      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.home}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  home: {
    padding: 16,
  },
  productItem: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: 100,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },  
  searchInput: {
    flex: 1,
    height: '100%',
    marginLeft: 8,
  },
  searchIcon: {
    marginLeft: 8,
  },
  clearButton: {
    marginLeft: 8,
    backgroundColor: '#95a5a6',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  filter: {
    width: 50, 
    height: 40, 
  }
});

export default Product;
