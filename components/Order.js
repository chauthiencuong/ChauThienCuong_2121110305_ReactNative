import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Order = ({ route, navigation }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [productMapping, setProductMapping] = useState({}); 

  useEffect(() => {
    const loadOrderItems = async () => {
      try {
        const orderItemsData = await AsyncStorage.getItem('orderItems') || '[]';
        const parsedOrderItems = JSON.parse(orderItemsData);
        const consolidatedItems = consolidateOrderItems(parsedOrderItems);
        setOrderItems(consolidatedItems);
      } catch (error) {
        console.error('Lỗi khi đọc dữ liệu đơn hàng:', error);
      }
    };

    const loadProductMapping = async () => {
      try {
        const productMappingData = await AsyncStorage.getItem('productMapping') || '{}';
        setProductMapping(JSON.parse(productMappingData));
      } catch (error) {
        console.error('Lỗi khi đọc dữ liệu ánh xạ sản phẩm:', error);
      }
    };

    loadOrderItems();
    loadProductMapping();
  }, []);

  const consolidateOrderItems = (items) => {
    const consolidatedItems = items.reduce((result, currentItem) => {
      const existingItem = result.find(item => item.id === currentItem.id);

      if (existingItem) {
        existingItem.quantity += currentItem.quantity;
        existingItem.totalPrice += currentItem.totalPrice;
      } else {
        result.push({ ...currentItem });
      }

      return result;
    }, []);

    return consolidatedItems;
  };

  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const handleDeleteOrderItem = async (index) => {
    try {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems.splice(index, 1);
      await AsyncStorage.setItem('orderItems', JSON.stringify(updatedOrderItems));
      setOrderItems(updatedOrderItems);
    } catch (error) {
      console.error('Lỗi khi xóa đơn hàng:', error);
    }
  };

  const handleDeleteOrder = async () => {
    try {
      await AsyncStorage.removeItem('orderItems');
      setOrderItems([]);
      console.log('Đơn hàng đã bị xóa');
      navigation.goBack(); 
    } catch (error) {
      console.error('Lỗi khi xóa đơn hàng:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={35} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>Đơn hàng của bạn</Text>

      {orderItems && orderItems.length > 0 ? (
        <View style={styles.orderList}>
          {orderItems.map((item, index) => (
  <View key={index} style={styles.orderItem}>
    <Text style={styles.itemText}>ID sản phẩm: {item.id} </Text>
    <Text style={styles.itemText}>Số lượng: {item.quantity}</Text>
    <Text style={styles.itemText}>Giá tiền: ${item.totalPrice.toFixed(2)}</Text>
    <TouchableOpacity style={styles.deleteOrderItemButton} onPress={() => handleDeleteOrderItem(index)}>
      <Icon name="times" size={20} color="red" />
    </TouchableOpacity>
  </View>
))}

          <Text style={styles.totalText}>Tổng tiền: ${calculateTotalPrice().toFixed(2)}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Không có sản phẩm trong đơn hàng.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 60,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    marginTop: 20,
  },
  orderList: {
    marginTop: 20,
  },
  orderItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginLeft: 200,
    color: 'green',
  },
  deleteOrderItemButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default Order;
