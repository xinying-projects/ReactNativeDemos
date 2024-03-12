import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import Colors from '../themes/Colors';

export default function Panel({ items }) {
  return (
    <>
      {items.map(item => (
        <TouchableOpacity
          key={item.title}
          style={styles.panel}
          onPress={() => item.action()}>
          <AppText style={styles.title}>{item.title}</AppText>
          <View>{item.icon}</View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  panel: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 26,
    justifyContent: 'space-between',
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.12,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 10,
    backgroundColor: Colors.white,
    marginBottom: 12,
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
    color: Colors.inActiveText,
  },
});
