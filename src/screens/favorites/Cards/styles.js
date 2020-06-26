import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // card: {
  //   backgroundColor: '#ffffff',
  //   paddingTop: 17,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   paddingBottom: 18,
  //   borderRadius: 7,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  // },

  cardInfo: {
    marginLeft: 6,
    marginTop: -5,
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'row',
  },

  cardTitleBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
    marginLeft: -7,
  },

  cardTitle: {
    // font-family: Google Sans;
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: 0.03,
    color: '#000000',
    opacity: 0.87,
    marginRight: 7,
  },

  cardWorkExperience: {
    // font-family: Google Sans;
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#424DE7',
    marginBottom: 3,
  },

  cardLocationBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardLocation: {
    //font-family: Google Sans;
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: 10,
  },

  cardLocationIcon: {
    width: 6,
    height: 6,
    borderRadius: 6 / 2,
    backgroundColor: '#11F81A',
    marginTop: -7,
    marginRight: 9,
    marginLeft: 2,
  },

  cardSearchBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  cardSearch: {
    marginLeft: 5,
  },

  cardSearchIcon: {
    marginTop: 5,
  },

  cardDescription: {
    // font-family: Google Sans;
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#000000',
    opacity: 0.7,
    marginTop: 12,
  },

  cardOpacity: {
    opacity: 0.38,
    color: '#000000',
  },

  iconOpacity: {
    backgroundColor: 'rgba(0,0,0, 0.38)',
  },
});

export default styles;
