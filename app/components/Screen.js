import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';

export default function Screen({ children, style = {} }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
