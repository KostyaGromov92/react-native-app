import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {scale, HEADER_COLOR, GOOGLE_REGULAR} from '../../style/constant';

export const Header = ({children}) => {
  return <Text style={styles.headerText}>{children}</Text>;
};

const styles = StyleSheet.create({
  headerText: {
    color: HEADER_COLOR,
    fontFamily: GOOGLE_REGULAR,
    fontWeight: '500',
    fontSize: scale(24),
    lineHeight: scale(31),
    letterSpacing: 0.03,
    textAlign: 'center',
  },
});
