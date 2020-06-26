import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 10,
    marginBottom: 12,
    backgroundColor: 'white',
  },

  arrowBlock: {
    position: 'absolute',
    left: 9,
  },

  paymentTitle: {
    // fontFamily: Google Sans;
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,

    textAlign: 'center',
    letterSpacing: 0.03,

    color: '#151413',
  },

  content: {
    paddingTop: 39,
    paddingBottom: 39,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#F5F6FA',
    height: '100%',
  },

  amountIconBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
    marginBottom: 43,
  },

  amountBlock: {
    marginTop: 48,
  },

  amountTitle: {
    // font-family: Google Sans;
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 31,
    marginBottom: 10,
    letterSpacing: 0.03,
    color: '#1C1F4A',
  },

  amountInput: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 20,
    borderBottomColor: '#424DE7',
    borderBottomWidth: 2,
    opacity: 0.87,
  },
});

export default styles;
