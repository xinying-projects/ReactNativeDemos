import { StyleSheet, View } from 'react-native';
import React from 'react';

import Colors from '../themes/Colors';

export default function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.lightGrey,
    width: '100%',
    height: 1,
  },
});
