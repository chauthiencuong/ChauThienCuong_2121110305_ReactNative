import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Info({navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.profileContainer}>
       
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.userName}>username: johnd</Text>
        <Text style={styles.userName}>password: m38rmF$</Text>
        <TouchableOpacity
  style={styles.historyButton}
  onPress={() => navigation.navigate('Order')}
>
  <Text style={styles.historyButtonText}>Xem Lịch Sử Đơn Hàng</Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.editButton} onPress={() => navigation.push('Login')}>
          <Text style={styles.editButtonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    padding: 20,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    marginTop:20
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DD0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
  },
  historyButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  historyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
