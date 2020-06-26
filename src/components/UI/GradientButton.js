import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {scale, GOOGLE_REGULAR} from '../../style/constant';
import LinearGradient from 'react-native-linear-gradient';

export const GradientButton = ({title, onClick, additionalStyles}) => {
  return (
    <TouchableOpacity
      style={[styles.test, additionalStyles]}
      onClick={onClick}
      onPress={onClick}>
      <LinearGradient
        useAngle
        angle={134}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={['#424DE7', '#A34889', '#CE3087']}
        locations={[0, 0.7, 0.98]}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 40,
    paddingVertical: 17,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: GOOGLE_REGULAR,
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: scale(20),
    letterSpacing: 0.02,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
