import {StyleSheet} from 'react-native';

import {BACKGROUND_COLOR} from '../../style/constant';

const styles = StyleSheet.create({
  chatHeaderBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 9,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 18,
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
  },

  chatUserInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  chatUserName: {
    // font-family: Google Sans;
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,

    textAlign: 'center',
    letterSpacing: 0.03,

    color: '#151413',
  },

  container: {
    flex: 1,
  },

  chatBlock: {
    backgroundColor: BACKGROUND_COLOR,
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
  },

  chatBottom: {
    height: 55,
  },

  chatBottomBlock: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 30,
    alignItems: 'center',
  },

  input: {
    width: 'auto',
    flex: 1,
    height: 55,
    marginLeft: 40,
    marginRight: 5,
    fontWeight: 'normal',

    color: '#000000',

    opacity: 0.87,
  },
});

export default styles;
