import {
    StyleSheet
} from 'react-native';

const DeterminacaoStyle = StyleSheet.create({
    backDeterminacao: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },

    imgBack: {
        flex: 1
    },

    containerRunes: {
        margin: 20,
        flexDirection: 'column',
        flex:1
    },

    containerHeaderRune: {
        flexDirection: 'row',
        borderBottomColor: 'rgba(145, 220, 90, 0.5)',
        borderBottomWidth: 1,

    },

    containerHeaderImg: {
        height: 60,
        width: 60,
        marginBottom: 5
    },

    containerHeaderText: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex:1
    },

    containerModal: {
        height: null,
        backgroundColor: '#000016',
        borderColor: '#91dc5a',
        borderWidth: 2
    },

    buttonModal: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    titleModal: {
        color: '#91dc5a',
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },

    textModal: {
        color: '#91dc5a',
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',
        margin: 10
    },

    headerTitle: {
        textAlign: 'center',
        color: '#91dc5a',
        fontWeight: '500',
        fontFamily: 'Kanit-Regular',
    },

    headerDesc: {
        marginRight: 10,
        color: '#91dc5a',
        fontSize: 11,
        textAlign:'center',
        fontFamily: 'Kanit-Regular',
        marginBottom: 10,
    },

    containerRunesRow: {
        flexDirection: 'row',
        marginTop: 5,
    },

    buttonImgSize: {
        height: 54,
        width: 54,
        borderRadius: 54/2,
        borderWidth: 2,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderColor: 'rgba(145, 220, 90, 0.5)',
    },

    buttonImgSize4: {
        height: 54,
        width: 54,
        borderRadius: 54/2,
        borderWidth: 2,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        borderColor: 'rgba(145, 220, 90, 0.5)',
    },

    buttonImgDefault: {
        height: 54,
        width: 54,
        borderRadius: 54/2,
        borderWidth: 2,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderColor: 'rgba(145, 220, 90, 0.5)'
    },

    buttonImgDefault4: {
        height: 54,
        width: 54,
        borderRadius: 54/2,
        borderWidth: 2,
        marginRight: 5,
        marginLeft: 10,
        marginTop: 5,
        borderColor: 'rgba(145, 220, 90, 0.5)'
    },

    titleDesc: {
        textAlign: 'center',
        color: '#91dc5a',
        fontWeight: '500',
        fontFamily: 'Kanit-Regular',
    },

    containerPreviewDescL1: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        flex: 1,

    },

    containerPreviewDescL2: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        flex: 1,


    },

    containerPreviewDescL3: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        flex: 1,

    },

    containerPreviewDescL4: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        flex: 1,


    },

    previewDesc: {
        marginRight: 10,
        color: '#91dc5a',
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',

    },

    containerRowButtons: {
        flexDirection: 'row',
        borderBottomColor: 'rgba(145, 220, 90, 0.5)',
        borderBottomWidth: 1,
        height:70
    }



});

export default DeterminacaoStyle;