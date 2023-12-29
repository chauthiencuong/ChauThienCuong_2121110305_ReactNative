import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.header}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tìm kiếm"
          placeholderTextColor="black"
          style={styles.txtInput}
        />
        <Icon name="search" style={styles.icon} />
        <Icon name="microphone" style={styles.icon} />
      </View>
      <View style={styles.upperRightIcons}>
        <Icon name="bell" style={styles.iconbell} />
        <TouchableOpacity onPress={() => navigation.push('Cart')}>
          <Icon name="shopping-cart" style={styles.iconcart} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 10,
    width: 270, 
    backgroundColor: '#E0EEEE'
  },
  txtInput: {
    height: 40,
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    fontSize: 20,
    color: 'black',
    marginRight: 10,
  },
  iconbell: {
    fontSize: 30,
    color: '#CD853F',
    marginRight: 10,
  },
  iconcart: {
    fontSize: 30,
    color: '#FF3030',
    marginRight: 10,
  },
  upperRightIcons: {
    flexDirection: 'row',
  },
});
