// @flow

import React from 'react';
import {TextInput} from 'react-native';

// TYPES
import {StyleObject} from '../../types/propsHelpers';

// STYLES
import styles from './styles';

type Props = {
  additionalStyles: StyleObject,
  onChangeText: (event: Event) => void,
  placeholder: string,
  value: string,
  keyboardType?: string,
  maxLength?: number,
  placeholderTextColor?: string,
};

export const Input = ({
  additionalStyles,
  placeholder,
  value,
  placeholderTextColor,
  keyboardType,
  maxLength,
  onChangeText,
}: Props) => {
  return (
    <TextInput
      style={[styles.input, additionalStyles]}
      placeholder={placeholder}
      onChangeText={event => onChangeText(event)}
      value={value}
      placeholderTextColor={`${placeholderTextColor} || rgba(21, 28, 38, 0.6)`}
      keyboardType={`${keyboardType || 'default'}`}
      returnKeyType="done"
      maxLength={maxLength || 100}
    />
  );
};
