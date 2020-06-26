import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

// STYLES
import styles from './styles';

// COMPONENTS
import {CardInfo} from './CardInfo';
import {Input} from '../../components/Input';
import {GradientButton} from '../../components/UI/GradientButton';

// CONSTANTS
import {DROP_DOWN_DATE_LIST} from '../../constants/dropDown';

const arrowLeft = require('../../resources/images/arrow-left.svg');
const amountIcon = require('../../resources/images/amount-icon.svg');

export const Payment = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = event => {
    setInputValue(event);
  };

  return (
    <SafeAreaView>
      <View style={styles.headerBlock}>
        <TouchableOpacity style={styles.arrowBlock}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.paymentTitle}>Оплата</Text>
      </View>
      <View style={styles.content}>
        <CardInfo dateList={DROP_DOWN_DATE_LIST} />
        <View style={styles.amountBlock}>
          <Text style={styles.amountTitle}>Сумма</Text>
          <Input
            additionalStyles={styles.amountInput}
            onChangeText={handleChangeInput}
            value={inputValue}
          />
        </View>
        <View style={styles.amountIconBlock}>
          <Image source={amountIcon} />
        </View>
        <View style={styles.amountButton}>
          <GradientButton title={'Оплатить'} onClick={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};
