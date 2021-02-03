import {
    StyleSheet
} from 'react-native';

const InpiracaoStyle = StyleSheet.create({
    backInpiracao: {
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
        borderBottomColor: 'rgba(62, 124, 194, 0.7)',
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
        borderColor: '#3e7cc2',
        borderWidth: 2
    },

    buttonModal: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    titleModal: {
        color: '#3e7cc2',
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },

    textModal: {
        fontFamily: 'Kanit-Regular',
        color: '#3e7cc2',
        textAlign: 'center',
        margin: 10
    },

    headerTitle: {
        textAlign: 'center',
        color: '#3e7cc2',
        fontWeight: '500',
        fontFamily: 'Kanit-Regular',
    },

    headerDesc: {
        marginRight: 10,
        color: '#3e7cc2',
        fontSize: 11,
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
        borderColor: 'rgba(62, 124, 194, 0.4)',
    },

    buttonImgSize4: {
        height: 54,
        width: 54,
        borderRadius: 54/2,
        borderWidth: 2,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        borderColor: 'rgba(62, 124, 194, 0.4)',
    },

    buttonImgDefault: {
        height: 54,
        width: 54,
        borderRadius: 54/2,
        borderWidth: 2,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderColor: 'rgba(62, 124, 194, 0.8)'
    },

    buttonImgDefault4: {
        height: 54,
        width: 54,
        borderRadius: 54/2,
        borderWidth: 2,
        marginRight: 5,
        marginLeft: 10,
        marginTop: 5,
        borderColor: 'rgba(62, 124, 194, 0.8)'
    },

    titleDesc: {
        textAlign: 'center',
        color: '#3e7cc2',
        fontWeight: '500',
        fontFamily: 'Kanit-Regular',
    },

    titleDescL: {
        textAlign: 'center',
        color: '#3e7cc2',
        fontWeight: '500',
        fontFamily: 'Kanit-Regular',
        fontSize: 14
    },

    titleDescLL: {
        textAlign: 'center',
        color: '#3e7cc2',
        fontWeight: '500',
        fontSize: 13
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
        color: '#3e7cc2',
        fontSize: 11,
        textAlign: 'center',

    },

    containerRowButtons: {
        flexDirection: 'row',
        borderBottomColor: 'rgba(62, 124, 194, 0.7)',
        borderBottomWidth: 1,
        height:70
    }



});

export default InpiracaoStyle;