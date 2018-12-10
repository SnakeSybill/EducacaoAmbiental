import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null, height: null,
    },

    viewHomeLogo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    viewHomeTitle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textHomeTitle: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center'
    },

    textHomeSubtitle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

    viewHomeContent: {
        flex: 2,
        marginTop: 40,
        marginHorizontal: 70,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    viewHomeContentRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    viewHomeFooter: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    buttonHomeQuiz: {
        padding: 15,
        width: 150,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#00CC00',
    },

    buttonHomeArgolas: {
        padding: 15,
        width: 150,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFCC00',
    },

    buttonHomeRoleta: {
        padding: 15,
        width: 150,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#0099FF',
    },

    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },

    textFooter: {
        color: 'white',
        fontSize: 8,
    }
});