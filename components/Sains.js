import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const Sains = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [answerColor, setAnswerColor] = useState(Array(4).fill('#7077A1')); // Warna default untuk setiap kotak jawaban
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    axios.get('  https://a773-36-73-35-105.ngrok-free.app/api/quizzes/category/3', {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    })
      .then((response) => {
        setQuiz(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading || !quiz.length) {
    return (
      <View style={{ backgroundColor: '#2D3250', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  const item = quiz[currentQuestion];

  const checkAnswer = (answer, index) => {
    let correctAnswer = quiz[currentQuestion].correct_answer;
    let isCorrect = false;

    // Memeriksa jawaban sesuai nomor soal
    if (currentQuestion === 0) {
      isCorrect = answer === 'b';
    } else if (currentQuestion === 1) {
      isCorrect = answer === 'd';
    } else if (currentQuestion === 2) {
      isCorrect = answer === 'c';
    } else if (currentQuestion === 3) {
      isCorrect = answer === 'c';
    } else if (currentQuestion === 4) {
      isCorrect = answer === 'b';
    } else if (currentQuestion === 5) {
      isCorrect = answer === 'a';
    } else if (currentQuestion === 6) {
      isCorrect = answer === 'a';
    } else if (currentQuestion === 7) {
      isCorrect = answer === 'a';
    } else if (currentQuestion === 8) {
      isCorrect = answer === 'd';
    } else if (currentQuestion === 9) {
      isCorrect = answer === 'c';
    } else if (currentQuestion === 10) {
      isCorrect = answer === 'b';
    } else if (currentQuestion === 11) {
      isCorrect = answer === 'c';
    } else if (currentQuestion === 12) {
      isCorrect = answer === 'a';
    } else if (currentQuestion === 13) {
      isCorrect = answer === 'b';
    } else if (currentQuestion === 14) {
      isCorrect = answer === 'b';
    } else if (currentQuestion === 15) {
      isCorrect = answer === 'b';
    } else {
      isCorrect = answer === correctAnswer;
    }

    setIsAnswerCorrect(isCorrect);
    setSelectedAnswer(answer);

    // Mengatur warna kotak jawaban berdasarkan kebenaran jawaban
    const newAnswerColor = [...answerColor];
    newAnswerColor[index] = isCorrect ? 'green' : 'red';
    setAnswerColor(newAnswerColor);

    // Timeout untuk mengembalikan warna kotak ke default setelah 2 detik
    setTimeout(() => {
      const resetAnswerColor = [...answerColor];
      resetAnswerColor[index] = '#7077A1'; // Warna default
      setAnswerColor(resetAnswerColor);

      setSelectedAnswer(null);
      if (isCorrect) {
        setCorrectCount(correctCount + 1);
      } else {
        setIncorrectCount(incorrectCount + 1);
      }
      if (currentQuestion + 1 < quiz.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizEnded(true);
        navigation.navigate('JawabanBenar');
      }
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizEnded(true);
    }
  };

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    answerBox: {
      borderRadius: 14,
      marginHorizontal: deviceWidth * 0.1,
      padding: 1,
      marginVertical: 10,
      width: deviceWidth * 0.8,
      height: 50,
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      justifyContent: 'center'
    },
    answer: {
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 1,
      color: 'white'
    },
    backgroundImage: {
      flex: 1,
      height: deviceHeight,
      width: deviceWidth,
      resizeMode: 'cover',
      overflow: 'hidden'
    },
    quizText: {
      fontSize: 15,
      fontWeight: 'bold',
      padding: 30,
      paddingHorizontal: 1,
      borderRadius: 10,
      marginBottom: deviceHeight * 0.1,
      textAlign: 'center',
      marginTop: deviceHeight * 0.2,
      color: 'white',
      backgroundColor: 'rgba(45, 50, 80, 0.7)',
    },
    resultSummary: {
      color: 'White',
      textAlign: 'center',
      marginTop: 10
    },
    correctCount: {
      color: 'green',
      fontWeight: 'bold'
    },
    incorrectCount: {
      color: 'red',
      fontWeight: 'bold'
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/bagscience.jpg')} style={styles.backgroundImage}>
        <Text style={styles.quizText}>{item.quiz}</Text>

        <View style={{ flexDirection: 'column' }}>
          {['a', 'b'].map((choice, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => checkAnswer(choice, index)}
              style={[styles.answerBox, { backgroundColor: answerColor[index] }]}
              disabled={!!selectedAnswer}>
              <Text style={styles.answer}>{item[choice]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: 'column' }}>
          {['c', 'd'].map((choice, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => checkAnswer(choice, index + 2)}
              style={[styles.answerBox, { backgroundColor: answerColor[index + 2] }]}
              disabled={!!selectedAnswer}>
              <Text style={styles.answer}>{item[choice]}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ImageBackground>
      <Text style={styles.resultSummary}>
        Benar: <Text style={styles.correctCount}>{correctCount}</Text> | Salah: <Text style={styles.incorrectCount}>{incorrectCount}</Text>
      </Text>
    </View>
  );
};

export default Sains;
