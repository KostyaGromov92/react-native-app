import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 31,
    letterSpacing: 0.03,
    color: '#1c1f4a',
  },
  transactionBlock: {
    paddingTop: 37,
    paddingBottom: 37,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#F5F6FA',
    height: '100%',
  },
});

export default styles;
