import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null, height: null,
    },

    viewQuizTopRow: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
    },
    viewQuizTopRowButton: {
        width: 30,
        height: 50,
    }, 
    viewQuizQuestion: {
        flex: 10
    },
    viewQuizTextQuestion: {
        fontSize: 30, 
        fontWeight: 'bold',
        color: 'white'
    }, 
    viewQuizTextScoreboard: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'white'
    }, 
    viewQuizQuestionContent: {
        backgroundColor: '#FFFFFF',
    },
});