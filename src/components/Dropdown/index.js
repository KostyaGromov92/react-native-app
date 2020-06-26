// @flow

import React from 'react';
import {Image, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// TYPES
import {StyleObject} from '../../types/propsHelpers';

// STYLES
import styles from './styles';

type Props = {
  dropDownItems: Array<Object>,
  customPlaceholderStyle?: StyleObject,
  customInputStyle?: StyleObject,
  textOpacity?: number,
  iconSource?: string,
  placeholder: string,
};

const dropDownIcon = require('../../resources/images/drop-down-icon.svg');

export const Dropdown = ({
  dropDownItems,
  customPlaceholderStyle,
  customInputStyle,
  textOpacity,
  iconSource,
  placeholder,
}: Props) => {
  const dropDownTextOpacity = textOpacity ? textOpacity : 1;

  return (
    <View style={styles.dropDownContainer}>
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        placeholder={{
          label: `${placeholder}` || 'Выбирите данные',
          value: null,
        }}
        items={dropDownItems}
        Icon={() => (
          <Image
            style={styles.dropDownIcon}
            source={iconSource || dropDownIcon}
          />
        )}
        style={{
          ...styles,
          placeholder: {
            ...customPlaceholderStyle,
            opacity: dropDownTextOpacity,
          },
          inputIOS: {
            ...customInputStyle,
            opacity: dropDownTextOpacity,
          },
          inputAndroid: {
            ...customInputStyle,
            opacity: dropDownTextOpacity,
          },
        }}
      />
    </View>
  );
};
