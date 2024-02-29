import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const Sejarah = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [answerColor, setAnswerColor] = useState(Array(4).fill('#7077A1')); // Warna default untuk setiap kotak jawaban

  useEffect(() => {
    axios.get('https://17a7-36-73-35-105.ngrok-free.app/api/quizzes',
      { headers: { 'ngrok-skip-browser-warning': 'true' } })
      .then((response) => {
        setQuiz(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const checkAnswer = (answer, index) => {
    let correctAnswer = quiz[currentQuestion].correct_answer;
    let isCorrect = false;

    // Mengecek jawaban berdasarkan nomor soal
    if (currentQuestion === 0 || currentQuestion === 1 || currentQuestion === 2 || currentQuestion === 3) {
      // Jawaban benar adalah 'b' pada pertanyaan 1, 2, 3, dan 4
      isCorrect = answer === 'b';
    } else if (currentQuestion === 4) {
      // Jawaban benar adalah 'a' pada pertanyaan 5
      isCorrect = answer === 'a';
    } else {
      // Memeriksa jawaban yang benar berdasarkan data
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
      // Mengatur warna kotak kembali ke warna default
      const resetAnswerColor = [...answerColor];
      resetAnswerColor[index] = '#7077A1'; // warna default
      setAnswerColor(resetAnswerColor);

      setSelectedAnswer(null);
      if (currentQuestion + 1 < quiz.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizEnded(true);
        navigation.navigate('JawabanBenar'); // Navigasi ke halaman JawabanBenar
      }
    }, 2000);
  };

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    answerBox: {
      borderRadius: 14,
      padding: 10,
      marginHorizontal: 5,
      marginVertical: 5,
      width: deviceWidth / 2.5, // Menggunakan lebar perangkat untuk mendistribusikan tombol jawaban
      height: 90,
      shadowColor: 'grey',
      shadowOffset: { width: 5, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      justifyContent: 'center',
      alignItems: 'center'
    },
    answer: {
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white'
    }
  });

  if (loading) {
    return (
      <View style={{ backgroundColor: '#2D3250', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  const item = quiz[currentQuestion];

  return (
    <View style={{ backgroundColor: '#2D3250', flex: 1 }}>
      <ScrollView>
        <View style={{ paddingTop: 30, backgroundColor: '#F6B17A', height: 340, marginTop: 300, borderRadius: 30, alignItems: 'center' }}>
          <Image style={{ borderRadius: 30, marginTop: -400, width: 300, height: 200 }} source={{ uri: item.image }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 30, paddingHorizontal: 10, borderRadius: 10, marginBottom: 80, textAlign: 'center', marginTop: 50, color: 'white' }}>{item.quiz}</Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['a', 'b', 'c', 'd'].map((choice, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => checkAnswer(choice, index)}
                style={[styles.answerBox, { backgroundColor: answerColor[index] }]}
              >
                <Text style={styles.answer}>{item[choice]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

export default Sejarah;