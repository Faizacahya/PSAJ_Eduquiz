import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Matematika = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [answerColor, setAnswerColor] = useState(Array(4).fill('#7077A1')); // Warna default untuk setiap kotak jawaban

  useEffect (()=>{
    axios.get('https://a773-36-73-35-105.ngrok-free.app/api/quizzes/category/1',
    {headers:{'ngrok-skip-browser-warning':'true'}})
    .then((response)=>{
      setQuiz(response.data.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    });
  },[]);

  const checkAnswer = (answer, index) => {
    let correctAnswer = quiz[currentQuestion].correct_answer;
    let isCorrect = false;

    // Mengecek jawaban berdasarkan nomor soal
    if (currentQuestion === 0 || currentQuestion === 1) {
      // Jika nomor soal 1 atau 2, maka jawaban benar jika pengguna memilih "a"
      isCorrect = answer === 'c';
    } else if (currentQuestion === 2) {
      // Jika nomor soal 3, maka jawaban benar jika pengguna memilih "c"
      isCorrect = answer === 'a';
    } else if (currentQuestion === 3) {
      // Jika nomor soal 4, maka jawaban benar jika pengguna memilih "b"
      isCorrect = answer === 'a';
    } else if (currentQuestion === 4) {
      // Jika nomor soal 5, maka jawaban benar jika pengguna memilih "a"
      isCorrect = answer === 'a';
    } else {
      // Jika nomor soal lainnya, memeriksa jawaban sesuai dengan yang benar dari data
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

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizEnded(false);
    }
  };

  const styles = StyleSheet.create({
    answerBox: {
      borderRadius: 14,
      marginHorizontal: 0.1 * windowWidth,
      padding: 1,
      margin: 0.03  * windowWidth,
      marginTop: 0.01 * windowHeight,
      width: 0.8 * windowWidth,
      height: 0.1 * windowHeight,
      shadowColor: 'grey', 
      shadowOffset: { width: 5, height: 4 }, 
      shadowOpacity: 0.5, 
      shadowRadius: 3
    },
    answer: {
      fontSize: 14,
      textAlign:'center',
      fontWeight:'bold',
      marginTop: 0.03 * windowHeight,
      color:'white'
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
    <ImageBackground source={require('../assets/bagmatematika.jpg')} style={{ flex: 1, height: windowHeight, width: windowWidth }} opacity={0.5}>
      <ScrollView>
        
      
    
          <Text style={{ fontSize: 0.05 * windowWidth, fontWeight: 'bold', padding: 0.05 * windowWidth, paddingHorizontal: 0.1 * windowWidth, borderRadius: 0.03 * windowWidth, marginBottom: 0.15 * windowHeight, textAlign: 'center', marginTop: 0.09 * windowHeight, color: 'white', backgroundColor: '#2D3250'}}>{item.quiz}</Text>
        
          <View style={{ flexDirection: 'column' }}>
            {['a', 'b'].map((choice, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => checkAnswer(choice, index)} 
                style={[styles.answerBox, { backgroundColor: answerColor[index] }]}
              >
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
              >
                <Text style={styles.answer}>{item[choice]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        
      </ScrollView>
    </ImageBackground>
  );
};

export default Matematika;
