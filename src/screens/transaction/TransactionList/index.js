// @flow

import * as React from 'react';
import {Text, View} from 'react-native';

// STYLES
import styles from './styles';

type Props = {
  transactionList: Array<Object>,
};

const TransactionList = ({transactionList}: Props) => {
  console.log(transactionList[0].items);
  return (
    <View style={styles.transactionList}>
      {transactionList.map(transaction => (
        <View style={styles.transactionBlock}>
          <Text style={styles.transactionItemTitle}>{transaction.title}</Text>
          {transaction.items.map(transactionItem => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionItemText}>
                {transactionItem.title}
              </Text>
              <Text
                style={[
                  styles.transactionItemAmount,
                  styles[transactionItem.amountColor],
                ]}>
                {transactionItem.amount}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default TransactionList;
