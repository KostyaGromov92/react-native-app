// @flow

import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// STYLES
import styles from './styles';

type Props = {
  additionalTabStyle?: StyleObject,
  additionalTabTextStyle?: StyleObject,
  changeTab: () => void,
  activeTab: number,
  tabs: Array<Object>,
};

export const Tabs = ({
  additionalTabStyle,
  additionalTabTextStyle,
  changeTab,
  activeTab,
  tabs,
}: Props) => {
  return (
    <View style={styles.tabs}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={
            activeTab === tab.label
              ? [styles.tab, styles.activeTab]
              : styles.tab
          }
          accessibilityRole={'button'}
          accessible={true}
          onPress={() => changeTab(tab.label)}>
          <Text
            style={
              activeTab === tab.label
                ? [styles.tabText, styles.activeTabText]
                : [styles.tabText, additionalTabTextStyle]
            }>
            {tab.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
