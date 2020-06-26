/**
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';

// COMPONENTS
import {Tabs} from '../../components/Tabs';
import TransactionList from './TransactionList';

// STYLES
import styles from './styles';

// CONSTANTS
import {HISTORY_TAB, BALANCE_TAB} from '../../constants/tabs';

const userAvatar = require('../../resources/images/avatar.svg');
const userName = require('../../resources/images/userLetter.svg');
const messagesIcon = require('../../resources/images/messages.svg');

type Props = {
  transactionList: Array<Object>,
};

export const Transaction = ({transactionList}: Props) => {
  const [activeTab, setActiveTab] = useState(HISTORY_TAB);

  const changeTabHandle = type => {
    setActiveTab(type);
  };

  const tabsData = [
    {id: 0, text: 'Баланс', label: BALANCE_TAB},
    {id: 1, text: 'История', label: HISTORY_TAB},
  ];

  return (
    <>
      <SafeAreaView>
        <View style={styles.images}>
          <Image source={userAvatar} />
          <Image source={userName} />
          <Image source={messagesIcon} />
        </View>
        <Tabs
          tabs={tabsData}
          additionalTabTextStyle={styles.tabText}
          changeTab={changeTabHandle}
          activeTab={activeTab}
        />
        <View style={styles.transactionBlock}>
          <Text style={styles.title}>Ваши транзакции</Text>
          <TransactionList transactionList={transactionList} />
        </View>
      </SafeAreaView>
    </>
  );
};
