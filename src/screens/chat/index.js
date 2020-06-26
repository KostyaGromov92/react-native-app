/**
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

// STYLES
import styles from './styles';

// COMPONENTS
import {ChatComponent} from '../../components/Chat';
import {Input} from '../../components/Input';

// CONSTANTS
import {CHAT_MESSAGES} from '../../constants/chat';

const arrowBack = require('../../resources/images/arrow-left.svg');
const avatar = require('../../resources/images/kfc-avatar.svg');
const closeIcon = require('../../resources/images/close.svg');
const errorIcon = require('../../resources/images/error.svg');
const sendIcon = require('../../resources/images/send-message-icon.svg');
const addIcon = require('../../resources/images/add.svg');

export const Chat = () => {
  const [message, setMessage] = useState('');

  const handleMessage = currentMessage => {
    setMessage(message);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.chatHeaderBlock}>
          <TouchableOpacity accessibilityRole={'button'} accessible={true}>
            <Image source={arrowBack} />
          </TouchableOpacity>
          <View style={styles.chatUserInfo}>
            <Image source={avatar} />
            <Text style={styles.chatUserName}>Крылышкожарщик</Text>
          </View>
          <TouchableOpacity accessibilityRole={'button'} accessible={true}>
            <Image source={closeIcon} />
          </TouchableOpacity>
          <Image source={errorIcon} />
        </View>
        <ScrollView style={styles.chatBlock}>
          <ChatComponent chatData={CHAT_MESSAGES} />
        </ScrollView>
        <KeyboardAvoidingView
          style={styles.chatBottomBlock}
          behavior="padding"
          enabled>
          <TouchableOpacity>
            <Image source={addIcon} />
          </TouchableOpacity>
          <Input onChangeText={handleMessage} additionalStyles={styles.input} />
          <TouchableOpacity>
            <Image source={sendIcon} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};
