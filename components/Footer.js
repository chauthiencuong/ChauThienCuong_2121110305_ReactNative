import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity  onPress={() => navigation.push('Home')}>
      <Icon name="home" style={[styles.icon, styles.homeIcon]} />
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.push('Heart')}>
      <Icon name="heart" style={[styles.icon, styles.heartIcon]} />
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.push('Comment')}>
      <Icon name="comment" style={[styles.icon, styles.commentIcon]} />
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.push('Info')}>
        <Icon name="user" style={[styles.icon, styles.userIcon]} />
      </TouchableOpacity>

      <Icon name="list" style={[styles.icon, styles.listIcon]} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  icon: {
    fontSize: 40,
  },
  homeIcon: {
    color: '#696969', 
  },
  heartIcon: {
    color: '#FF3030', 
  },
  commentIcon: {
    color: '#63B8FF', 
  },
  userIcon: {
    color: '#FF7F24', 
  },
  listIcon: {
    color: '#D02090',
  },
});
