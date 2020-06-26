import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  LINK_COLOR,
  GOOGLE_REGULAR,
} from '../../style/constant';

export const LinkButton = ({onClick, children}) => {
  return (
    <TouchableOpacity onClick={onClick} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: verticalScale(25),
    marginBottom: verticalScale(33),
  },
  buttonText: {
    color: LINK_COLOR,
    fontFamily: GOOGLE_REGULAR,
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: scale(20),
    letterSpacing: 0.02,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
