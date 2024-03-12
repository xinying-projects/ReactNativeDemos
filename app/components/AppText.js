import { StyleSheet, Text } from 'react-native';
import React from 'react';
import _ from 'lodash';

export default function AppText({ children, style = {} }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
