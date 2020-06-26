import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardInfo: {
    display: 'flex',
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },

  cardInfoItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(21, 28, 38, 0.1)',
    borderBottomWidth: 1,
    minHeight: 40,
    paddingBottom: 16,
    paddingTop: 16,
  },

  cardInfoItemTitle: {
    //   font-family: Google Sans;
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#151C26',
    opacity: 0.6,
  },

  cardInfoItemTitleText: {
    color: '#424DE7',
  },

  cvvBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  halfWidth: {
    width: '100%',
    maxWidth: 145,
  },
});

export default styles;
