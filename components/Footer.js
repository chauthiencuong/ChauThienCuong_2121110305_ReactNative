import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Icon name="home" style={[styles.icon, styles.homeIcon]} />
      <Icon name="heart" style={[styles.icon, styles.heartIcon]} />
      <Icon name="comment" style={[styles.icon, styles.commentIcon]} />
      <Icon name="user" style={[styles.icon, styles.userIcon]} />
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
