import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null, 
        height: null,
    },

    viewQuizTopRow: {
        backgroundColor: '#0099FF',
        opacity: 1.0,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewQuizTopRowButton: {
        width: 30,
        height: 50,
    }, 
    viewQuizQuestion: {
        flex: 3, 
        paddingTop: 15,

    },
    viewNumberQuestion: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textNumberQuestion: {
        fontSize: 30, 
        fontWeight: 'bold',
        color: 'white',
    }, 
    textScoreboard: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'black',
    }, 
    viewQuizQuestionContent: {
        backgroundColor: '#0099FF',
        opacity: 1.0,
        margin: 5,
        padding: 15,
        borderRadius: 20,
        height: '100%',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    textCounter: {
        fontSize: 18,
        color: 'white',
    },
    viewQuizAnswer: {
        flex: 5,
        marginTop: 10,
    },
    viewAnswerItem: {
        backgroundColor: '#0099FF',
        margin: 5,
        padding: 15, 
        opacity: 1.0,
        borderRadius: 20,
    }
});