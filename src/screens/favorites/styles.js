import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  images: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  tabText: {
    opacity: 0.54,
  },

  messagesIconBlock: {
    position: 'relative',
  },

  content: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#F5F6FA',
    height: '100%',
  },

  linearGradient: {
    width: '100%',
    height: 266,
    position: 'absolute',
    bottom: 266,
    left: 0,
  },
});

export default styles;
