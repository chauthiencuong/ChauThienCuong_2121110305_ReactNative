import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
   
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
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          style={styles.txtInput}
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
        <Text style={styles.registerButtonText}>CREATE ACOUNT</Text>
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
