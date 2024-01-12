import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Info({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/416284036_1032857854447056_8310309380794702521_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHLfRaW5sSH9354gzZZNRq594j99AS4a973iP30BLhr3qsiEGMlncXVwy9E9u6kIpM9G3DCryUX_-4Ka5m-Z7Rb&_nc_ohc=lEjAbB2EFBYAX92D90j&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBVp4XK2z86DPe-ZYdIbFO2AOColpCT7Q6MmOpJzAO94w&oe=65A67B30' }}
        />
        <Text style={styles.userName}>Châu Thiên Cường</Text>
        <Text style={styles.userInfo}>Android Developer</Text>
        <Text style={styles.userInfo}>Nơi sống: Thành phố Hồ Chính Minh</Text>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="pencil" size={20} color="#fff" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
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
  userName: {
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
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
    marginLeft: 10,
  },
});
