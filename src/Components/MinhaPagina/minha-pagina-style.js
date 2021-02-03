import {
  StyleSheet
} from 'react-native';

const MPstyle = StyleSheet.create({
  containerBack: {
    flex: 1
  },

  containerLogo: {
    alignItems: 'center',
    marginTop: 10
  },

  containerItems: {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  containerNomePage: {
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 2,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5
  },

  logo: {
    height: 100
  },

  nomePage: {
    color: '#e8a157',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Kanit-Regular'
  },

  containerRuna1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 20
  },


  textR1: {
    color: '#e8a157',
    textAlign: 'center',
    paddingTop: 22,
    fontSize: 14,
    fontFamily: 'Kanit-Regular'
  },

  containerR2R6: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 20
  },

  imgR1R6: {
    height: 40,
    width: 40,
    marginRight: 20
  },

  textR1R6: {
    color: '#94ecff',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 14,
    fontFamily: 'Kanit-Regular'
  },

});

export default MPstyle;