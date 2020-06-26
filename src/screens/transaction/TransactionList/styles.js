import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  transactionList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 29,
  },

  transactionItemTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: '#424DE7',
    marginBottom: 18,
  },
  transactionBlock: {
    marginBottom: 20,
  },
  transactionItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 19,
    paddingBottom: 19,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 8,
  },

  transactionItemText: {
    // font-family: Google Sans;
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.03,
    maxWidth: 202,
  },

  green: {
    color: '#11A61F',
  },

  red: {
    color: '#F44336',
  },

  transactionItemAmount: {
    // font-family: Google Sans;
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: 0.03,
  },
});

export default styles;
