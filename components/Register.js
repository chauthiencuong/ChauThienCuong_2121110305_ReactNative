import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'john@gmail.com',
          username: username,
          password: password,
          name: {
            firstname: 'John',
            lastname: 'Doe',
          },
          address: {
            city: 'kilcoole',
            street: '7835 new road',
            number: 3,
            zipcode: '12926-3874',
            geolocation: {
              lat: '-37.3159',
              long: '81.1496',
            },
          },
          phone: '1-570-236-7033',
        }),
      });

      if (response.ok) {
        // Người dùng đã được thêm thành công
        console.log('Người dùng đã được thêm thành công!');
        navigation.goBack(); // Chuyển về màn hình trước đó sau khi đăng ký thành công
      } else {
        // Xử lý lỗi nếu có
        console.error('Lỗi khi thêm người dùng:', response.statusText);
      }
    } catch (error) {
      console.error('Lỗi kết nối:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/77/01/2d/77012dbb137f0dc37843f252fe78f3ce.jpg' }}
        style={styles.image}
      />
      <Text style={styles.headerText}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" style={styles.icon} />
        <TextInput
          placeholder="Enter your username"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          style={styles.txtInput}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          style={styles.txtInput}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          placeholder="Confirm your password"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          style={styles.txtInput}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={35} color="white" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '40',
    textAlign: 'center',
    marginBottom: 40
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    marginBottom: 20,
    width: 300,
  },
  txtInput: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    color: 'white',
    flex: 1,
  },
  registerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  icon: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    marginTop:20
  },
});

export default Register;
