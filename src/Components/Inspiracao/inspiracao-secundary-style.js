import {
    StyleSheet
} from 'react-native';

const InspiracaoStyle = StyleSheet.create({
    backInspiracao: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },

    imgBack: {
        flex: 1
    },

    containerRunes: {
        margin: 20,
        flexDirection: 'column',
        flex: 1,

    },

    containerHeaderRune: {
        flexDirection: 'row',
        borderBottomColor: '#3e7cc2',
        borderBottomWidth: 1
    },

    containerHeaderImg: {
        height: 60,
        width: 60,
        marginBottom: 5
    },

    containerHeaderText: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
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
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',
        marginBottom: 10
    },

    containerModal: {
        height: null,
        backgroundColor: '#000016',
        borderColor: 'rgba(62, 124, 194, 0.5)',
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
        color: '#3e7cc2',
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',
        margin: 10
    },

    containerRunesRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        position: 'relative',
        flex: 1
    },

    buttonImgSize: {
        height: 54,
        width: 54,
        borderRadius: 54 / 2,
        borderWidth: 2,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        opacity: 1,
        borderColor: 'rgba(62, 124, 194, 0.5)',
    },

    buttonImgSize4: {
        height: 54,
        width: 54,
        borderRadius: 54 / 2,
        borderWidth: 2,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        opacity: 1,
        borderColor: 'rgba(62, 124, 194, 0.5)',
    },

    buttonImgDefault: {
        height: 54,
        width: 54,
        borderRadius: 54 / 2,
        borderWidth: 2,
        marginTop: 30,
        marginRight: 5,
        marginLeft: 10,
        borderColor: 'rgba(62, 124, 194, 0.5)'
    },

    buttonImgDefault4: {
        height: 54,
        width: 54,
        borderRadius: 54 / 2,
        borderWidth: 2,
        marginTop: 20,
        marginRight: 5,
        marginLeft: 10,
        borderColor: 'rgba(62, 124, 194, 0.5)'
    },

    titleDesc: {
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',
        color: '#3e7cc2',
        fontWeight: '500',

    },

    containerPreviewDescL1: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'flex-start',
        marginTop: 20,
        position: 'relative',
        height: 70

    },

    previewDesc: {
        marginRight: 10,
        color: '#3e7cc2',
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',

    },

    containerRowButtons: {
        flexDirection: 'column',
    },

    containerDesc: {
        position: 'relative',
        alignContent: 'center',
        flex: 1

    },



});

export default InspiracaoStyle;