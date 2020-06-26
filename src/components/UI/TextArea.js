import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import {scale, HEADER_COLOR, GREY_COLOR} from '../../style/constant';

export const TextArea = props => {
  const maxLetter = 60;
  const [value, onChangeText] = useState('');

  const countLetter = text => {
    console.log(text);
    return maxLetter - text.length;
  };

  return (
    <>
      <TextInput
        multiline
        numberOfLines={3}
        maxLength={maxLetter}
        style={[styles.textArea, props.additionalStyles]}
        onChangeText={text => onChangeText(text)}
        value={value}
        {...props}
      />
      <View style={styles.countBlock}>
        <Text style={styles.countColoredText}>
          {countLetter(value)}
          <Text style={styles.countText}>/{60}</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textArea: {
    fontFamily: 'Google Sans',
    fontSize: scale(16),
    lineHeight: scale(20),
    letterSpacing: 0.03,
    opacity: 0.87,
    borderBottomColor: GREY_COLOR,
    borderBottomWidth: 1,
    padding: scale(2),
    textAlignVertical: 'bottom',
  },
  countBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  countColoredText: {
    fontFamily: 'Google Sans',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: '#B93B88',
  },
  countText: {
    fontFamily: 'Google Sans',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: HEADER_COLOR,
    opacity: 0.54,
  },
});
