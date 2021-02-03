import {
  StyleSheet
} from 'react-native';

const MyRunaStyle = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexBasis: 0,
    margin:5,
    flexGrow: 1,
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },

  container: {
    backgroundColor: '#000016',
    flex: 1,
  },

  containerBack: {
    flex: 1,
    justifyContent: 'center'
  },

  containerTextInput: {
    flexDirection: 'row',
    margin: 10
  },

  textInput: {
    color: '#e8a157',
    flex: 1,
    backgroundColor: '#000016',
    borderBottomColor: 'rgba(218, 165, 32, 0.5)',
    borderBottomWidth: 2,
    borderTopColor: 'rgba(218, 165, 32, 0.5)',
    borderTopWidth: 2,
    borderLeftColor: 'rgba(218, 165, 32, 0.5)',
    borderLeftWidth: 2,
    fontFamily: 'Kanit-Regular',
    fontSize: 16,
    paddingLeft: 10
  },

  containerButton: {
    padding: 10,
    backgroundColor: '#000016',
    borderBottomColor: 'rgba(218, 165, 32, 0.5)',
    borderBottomWidth: 2,
    borderTopColor: 'rgba(218, 165, 32, 0.5)',
    borderTopWidth: 2,
    borderRightColor: 'rgba(218, 165, 32, 0.5)',
    borderRightWidth: 2
  },

  textButton: {
    color: "#e8a157",
    textAlign: 'center',
    fontFamily: 'Kanit-Regular',
    fontSize: 16

  },

  containerFlat: {
    flex: 1
  },

  containerItemBack: {
    height: 200,
    width: 150,
    margin:5,
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'flex-end'
  },

  buttonItem: {
    flex: 1,
    justifyContent: 'flex-end',
    width: 172,

  },

  textItem: {
    color: '#fff',
    textAlign:'left',
    marginLeft:5,
    fontSize: 14,
    fontFamily: 'Kanit-Regular'

  },

  containerImgType: {
    flexDirection: 'row',
    borderBottomColor: '#000016',
    borderBottomWidth: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    borderTopWidth: 1,
  }

});

export default MyRunaStyle;