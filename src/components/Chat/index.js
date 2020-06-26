/**
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, Image} from 'react-native';

// STYLES
import styles from './styles';

// CONSTANTS
import {CURRENT_USER_ID} from '../../constants/user';

// TODO Need change, need take user image url from API
const userAvatar = require('../../resources/images/kfc-avatar.svg');

type Props = {
  chatData: Array<Object>,
};

export const ChatComponent = ({chatData}: Props) => {
  return (
    <View>
      {chatData.map(chatItem => (
        <View
          style={[
            styles.messageBlock,
            chatItem.userId !== CURRENT_USER_ID && styles.withMargin,
          ]}>
          {chatItem.messagesGroup.map((messageText, index) => (
            <View style={styles.messageItemBlock}>
              <View style={styles.messageIconBlock}>
                {chatItem.messagesGroup.length - 1 === index &&
                  chatItem.withImage && (
                    <Image source={userAvatar} style={styles.messageIcon} />
                  )}
              </View>
              <View
                style={[
                  styles.messageTextBlock,
                  chatItem.userId !== CURRENT_USER_ID && styles.withBackground,
                ]}>
                <Text style={styles.messageText}>{messageText}</Text>
              </View>
            </View>
          ))}
          <Text
            style={[
              styles.messageDate,
              chatItem.userId !== CURRENT_USER_ID && styles.dateWithMargin,
            ]}>
            {chatItem.date}
          </Text>
        </View>
      ))}
    </View>
  );
};
