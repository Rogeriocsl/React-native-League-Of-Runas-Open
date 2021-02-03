import {
    StyleSheet
} from 'react-native';

const HomeStyle = StyleSheet.create({
    backhome: {
        backgroundColor: '#000'
    },
    imgback: {
        flex: 1
    },
    containerbuttons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    containerName: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 50
    },
    textname: {
        textAlign: 'center',
        color: '#FFD700',
        fontFamily: 'Kanit-Regular',
        fontSize: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#d9bc76',
        borderTopColor: '#d9bc76',
        borderTopWidth: 2
    },
    rowbuttons: {
        flexDirection: 'row',
        flex:1
    },
    precisaobutton: {
        height: 64,
        width: 64,
        borderRadius: 360,
        borderWidth: 2,
        borderColor: '#daa520',
        marginRight: 5
    },
    dominacaobutton: {
        height: 64,
        width: 64,
        borderRadius: 360,
        borderWidth: 2,
        borderColor: '#daa520',
        marginRight: 5,

    },
    determinacaobutton: {
        height: 64,
        width: 64,
        borderRadius: 360,
        borderWidth: 2,
        borderColor: '#daa520',
        marginRight: 5,
    },
    feiticariabutton: {
        height: 64,
        width: 64,
        borderRadius: 360,
        borderWidth: 2,
        borderColor: '#daa520',
        marginRight: 5
    },
    inspiracaobutton: {
        height: 64,
        width: 64,
        borderRadius: 360,
        borderWidth: 2,
        borderColor: '#daa520',

    }

});

export default HomeStyle;