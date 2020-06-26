import {StyleSheet} from 'react-native';

import {BACKGROUND_COLOR} from '../../style/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  topBlock: {
    paddingTop: 15,
    paddingLeft: 9,
    marginBottom: 12,
  },

  button: {
    marginTop: 'auto',
  },

  emptyBlock: {
    height: 62,
  },

  textArea: {
    marginTop: 35,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.24)',
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 25,
    fontWeight: 'normal',
  },

  content: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
  },

  bottomBlock: {
    marginTop: 'auto',
  },
});

export default styles;
