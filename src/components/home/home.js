import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity, 
} from 'react-native';
import styles from './styles.js'

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    }
    constructor(props){
        super(props);
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('./../../../Images/fundo_1.jpg')} style={styles.backgroundImage}>
                <View style={styles.viewHomeLogo}>
                    <Image style={{ width: 30, height: 30 }} source={require('./../../../Images/question.png')} />
                    <Image style={{ width: 30, height: 30 }} source={require('./../../../Images/question_2.png')} />
                </View>
                <View style={styles.viewHomeTitle}>
                    <Text style={styles.textHomeTitle}>PEAC</Text>
                    <Text style={styles.textHomeSubtitle}>Programa Escola Água Cidadã</Text>
                </View>
                <View style={styles.viewHomeContent}>
                    <View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Quiz')}
                            style={styles.buttonHomeQuiz}
                            title="QUIZ"
                            accessibilityLabel="Iniciar Quiz">
                            <Text style={styles.textButton}>QUIZ</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => console.log("Pressed Argolas")}
                            style={styles.buttonHomeArgolas}
                            accessibilityLabel="Iniciar Argolas">
                            <Text style={styles.textButton}>ARGOLAS</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => console.log("Pressed Roleta")}
                            style={styles.buttonHomeRoleta}
                            accessibilityLabel="Iniciar Roleta">
                            <Text style={styles.textButton}>ROLETA</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.viewHomeFooter}>
                    <Text style={styles.textFooter}>Copyright</Text>
                </View>
            </ImageBackground>
        );
    }
}
