import {
    StyleSheet
} from 'react-native';

const HomeStyle = StyleSheet.create({
    backhome: {
        backgroundColor:'#000016',

    },

    containerbuttons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    containerName: {
        paddingBottom: 40
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

    inspiracaobutton: {
        height: 64,
        width: 64,
        alignSelf:'center'

    }

});

export default HomeStyle;