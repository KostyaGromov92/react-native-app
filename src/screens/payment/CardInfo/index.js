// @flow

import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';

// COMPONENTS
import {Dropdown} from '../../../components/Dropdown';
import {Input} from '../../../components/Input';

// STYLES
import styles from './styles';

type Props = {
  dateList: Array<Object>,
};

export const CardInfo = ({dateList}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const dropInputStyle =
    Platform.OS === 'ios' ? styles.cardInfoItemTitle : styles.inputAndroid;

  const handleChangeInput = event => {
    setInputValue(event);
  };

  return (
    <View style={styles.cardInfo}>
      <View style={styles.cardInfoItem}>
        <Text style={styles.cardInfoItemTitle}>Номер карты</Text>
        <Text style={styles.cardInfoItemTitleText}>2345 6462 3511 8617</Text>
      </View>
      <View style={styles.cardInfoItem}>
        <Text style={styles.cardInfoItemTitle}>Имя владельца</Text>
        <Text style={styles.cardInfoItemTitleText}>Имя владельца</Text>
      </View>
      <View style={styles.cvvBlock}>
        <View style={[styles.cardInfoItem, styles.halfWidth]}>
          <Dropdown
            customPlaceholderStyle={styles.cardInfoItemTitle}
            customInputStyle={dropInputStyle}
            textOpacity={0.75}
            placeholder="Дата"
            dropDownItems={dateList}
          />
        </View>
        <View style={[styles.cardInfoItem, styles.halfWidth]}>
          <Input
            additionalStyles={styles.cardInfoItemTitleText}
            placeholder="CVV"
            keyboardType="numeric"
            maxLength={3}
            onChangeText={handleChangeInput}
            value={inputValue}
          />
        </View>
      </View>
    </View>
  );
};
