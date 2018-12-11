import React, { Component } from 'react';
import {
    ImageBackground,
    View,
    Text,
    TouchableOpacity, FlatList
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles.js'

const listaPerguntas = [
    {
        enunciado: "Enunciado 0",
        correta: "a",
        alternativas: [
            {
                id: "a",
                texto: "Alternativa 0",
            },
            {
                id: "b",
                texto: "Alternativa 1",
            },
            {
                id: "c",
                texto: "Alternativa 2",
            },
            {
                id: "d",
                texto: "Alternativa 3",
            },
        ]
    }
]

export default class Quiz extends Component {


    constructor(props) {
        super(props);
        this.state = {
            counterQuestions: 1,
            counterRights: 0,
            perguntas: listaPerguntas,
            perguntaAtual: 0,
            respostaAtual: "",
        };

    }

    static navigationOptions = {
        title: 'Quiz',
        header: null
    }

    avaliaResposta(indicePergunta, resposta) {
        if(this.state.perguntas[indicePergunta].correta === resposta) {
            var i = this.state.counterRights + 1;
            this.setState({ counterRights: i});
        }
    }

    render() {

        return (
            <ImageBackground source={require('./../../../Images/fundo_3.png')} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.viewQuizTopRow}>
                    <Icon
                        name="arrow-back"
                        color="white"
                        size={40}
                        onPress={() => this.props.navigation.navigate('Home')} />
                    <Text style={styles.textCounter}>Acertou {this.state.counterRights} de {this.state.counterQuestions} perguntas</Text>
                </TouchableOpacity>
                <View style={styles.viewNumberQuestion}>
                    <Text style={styles.textNumberQuestion}>Pergunta {this.state.counterQuestions}</Text>
                </View>
                <View style={styles.viewQuizQuestion}>
                    <TouchableOpacity style={styles.viewQuizQuestionContent}>
                        <Text style={styles.text}>{this.state.perguntas[0].enunciado}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewQuizAnswer}>
                    <FlatList
                        data={this.state.perguntas[0].alternativas}
                        renderItem={({ item }) => (
                            <TouchableOpacity key={item.id} style={styles.viewAnswerItem} onPress={this.avaliaResposta(0, item.id)}>
                                <Text key={"a"+item.id} style={styles.text}>{item.texto}</Text>
                            </TouchableOpacity>
                        )}
                            />
                </View>
            </ImageBackground>
                );
            }
        }
