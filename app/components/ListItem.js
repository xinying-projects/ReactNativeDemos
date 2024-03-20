import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import Colors from '../themes/Colors';

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
    marginRight: 10,
  },
  detailsContainer: {
    justifyContent: 'center',
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: '500',
    paddingVertical: 5,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.mediumGrey,
  },
});
