import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  messageTextBlock: {
    backgroundColor: '#ffffff',
    maxWidth: 262,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    marginBottom: 5,
    padding: 10,
  },

  messageItemBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  messageIcon: {
    width: 26,
    height: 26,
  },

  withMargin: {
    marginLeft: 'auto',
  },

  messageText: {
    // font-family: Google Sans;
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.03,

    color: '#000000',

    opacity: 0.87,
  },

  messageIconBlock: {
    width: 26,
    marginRight: 6,
  },

  messageDate: {
    // font-family: Google Sans;
    fontSize: 13,
    lineHeight: 15,
    /* identical to box height, or 115% */

    letterSpacing: 0.03,

    color: '#8C8C8C',
    marginLeft: 32,
  },

  withBackground: {
    backgroundColor: 'rgba(66, 77, 231, 0.12)',
    borderWidth: 0,
  },

  dateWithMargin: {
    marginLeft: 'auto',
  },
});

export default styles;
