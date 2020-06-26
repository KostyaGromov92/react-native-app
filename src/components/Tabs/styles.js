import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 24,
    paddingLeft: 24,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#B93B88',
  },
  tab: {
    width: '50%',
    paddingBottom: 17,
  },
  activeTabText: {
    color: '#B93B88',
    fontWeight: 'bold',
  },
  tabText: {
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});

export default styles;
