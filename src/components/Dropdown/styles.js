import {StyleSheet} from 'react-native';

const dropDownTextStyle = {
  // font-family: Google Sans;
  fontStyle: 'normal',
  fontSize: 16,
  lineHeight: 20,
  letterSpacing: 0.03,
  color: 'red',
  paddingRight: 30,
};

const styles = StyleSheet.create({
  dropDownContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputIOS: {
    ...dropDownTextStyle,
  },
  placeholder: {
    ...dropDownTextStyle,
  },
  inputAndroid: {
    ...dropDownTextStyle,
  },

  iconContainer: {
    top: 6,
  },
});

export default styles;
