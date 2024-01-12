import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Heart = ({navigation}) => {
  return (
    <View style={styles.container}>
         <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={35} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>Chưa có sản phẩm yêu thích</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    marginTop:20
  },
});

export default Heart;
