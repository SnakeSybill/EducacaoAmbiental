import React, { Component } from 'react';
import {
    ImageBackground,
    Button,
    View,
    Text,
    TouchableOpacity, 
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles.js'

export default class Quiz extends Component {
    static navigationOptions = {
        title: 'Quiz',
        header: null
    }

    render() {
        return (
            <ImageBackground source={require('./../../../Images/fundo_Quiz.jpg')} style={styles.backgroundImage}>
                <View style={styles.viewQuizTopRow}>
                    <Icon
                        name="left"
                        color="white"
                        style={styles.viewQuizTopRowButton}
                        onPress={() => this.props.navigation.navigate('Home')} />
                    <View>
                        <Text style={styles.viewQuizTextScoreboard}>Acertou x de y perguntas</Text>
                        <Text style={styles.viewQuizTextQuestion}>Pergunta 1</Text>
                    </View>
                </View>
                <View style={styles.viewQuizQuestion}>
                    <TouchableOpacity style={styles.viewQuizQuestionContent}>
                        <Text>Enunciado</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
