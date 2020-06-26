import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale, HEADER_COLOR, GOOGLE_REGULAR} from '../../style/constant';

export const BodyText = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: HEADER_COLOR,
    fontFamily: GOOGLE_REGULAR,
    fontSize: scale(13),
    lineHeight: scale(17),
    letterSpacing: 0.03,
    textAlign: 'center',
    opacity: 0.54,
  },
});
