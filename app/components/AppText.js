import { StyleSheet, Text, Platform } from 'react-native';
import React from 'react';
import _ from 'lodash';

export default function AppText({ children, style = {} }) {
  const mergedStyles = { ...styles.text, ...style };

  return <Text style={mergedStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});
