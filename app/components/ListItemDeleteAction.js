import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="delete" color={Colors.white} size={30} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dangerRed,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.white,
  },
});
