/**
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// STYLES
import styles from './styles';

// CONSTANTS
import {VACANCY_TAB, FAVORITES_TAB} from '../../constants/tabs';
import {CARDS_LIST} from '../../constants/cards';

// COMPONENTS
import {Tabs} from '../../components/Tabs';
import {Cards} from './Cards';

const userAvatar = require('../../resources/images/avatar.svg');
const userName = require('../../resources/images/gradient-user-icon.svg');
const newMessage = require('../../resources/images/new-message.svg');

type Props = {
  transactionList: Array<Object>,
};

export const Favorites = ({transactionList}: Props) => {
  const [activeTab, setActiveTab] = useState(FAVORITES_TAB);

  const changeTabHandle = type => {
    setActiveTab(type);
  };

  const tabsData = [
    {id: 0, text: 'Вакансия', label: VACANCY_TAB},
    {id: 1, text: 'Избранное', label: FAVORITES_TAB},
  ];

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.images}>
            <Image source={userAvatar} />
            <Image source={userName} />
            <Image source={newMessage} />
          </View>
          <Tabs
            tabs={tabsData}
            additionalTabTextStyle={styles.tabText}
            changeTab={changeTabHandle}
            activeTab={activeTab}
          />
          <View style={styles.content}>
            <Cards cardsList={CARDS_LIST} />
          </View>
          <LinearGradient
            style={styles.linearGradient}
            useAngle
            angle={180}
            locations={[0, 1.0]}
            colors={['rgba(245, 246, 250, 0)', '#F5F6FA']}>
            {null}
          </LinearGradient>
        </View>
      </SafeAreaView>
    </>
  );
};
