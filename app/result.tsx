import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ProgressBarAndroid, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QuestionScreen: React.FC = () => {

  interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      correctAnswer: "Mars",
    },
    {
        question: "What is the plural form of child",
        options: ["child", "childs", "children", "childreds"],
        correctAnswer: "children",
      },
      {
        question: "What is the capital of Cameroon",
        options: ["Yaounde", "buea", "bamenda", "Kwakwa"],
        correctAnswer: "Yaounde",
      },
      {
        question: "I would like ________ a doctor someday",
        options: ["becomes", "to become", "become", "becoming"],
        correctAnswer: "to become",
      },
      {
        question: "We've known each other ________ we were children.",
        options: ["since", "for", "from", "during"],
        correctAnswer: "since",
      },
      {
        question: "The package arrived ________ the expected delivery date.",
        options: ["on", "in", "at", "before"],
        correctAnswer: "before",
      },
      {
        question: "He went to the store ________ buy some groceries.",
        options: ["too", "to", "two", "2"],
        correctAnswer: "to",
      }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    const isCorrect = (selectedAnswer === question.correctAnswer);
  
    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
  
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              selectedAnswer === option && styles.selectedAnswerButton,
              isCorrect && selectedAnswer === option
                ? styles.correctAnswerButton
                : selectedAnswer === option
                ? styles.wrongAnswerButton
                : null,
            ]}
            onPress={() => handleAnswerSelect(option)}
          >
            <Text
              style={[
                styles.answerButtonText,
                selectedAnswer === option && styles.selectedAnswerButtonText,
                isCorrect && selectedAnswer === option
                  ? styles.correctAnswerButtonText
                  : selectedAnswer === option
                  ? styles.wrongAnswerButtonText
                  : null,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
  
        {selectedAnswer !== '' && !isCorrect && (
          <View style={styles.correctAnswerContainer}>
            <Text style={styles.correctAnswerText}>
              Correct Answer: {question.correctAnswer}
            </Text>
          </View>
        )}
      </View>
    );
  };

  const renderProgressBar = () => {
    const progress = (currentQuestionIndex + 1) / questions.length;

    return <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress} />;
  };

  const renderButtons = () => {
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
      <View style={styles.buttonContainer}>
        {!isFirstQuestion && (
          <TouchableOpacity style={styles.button} onPress={handlePreviousQuestion}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}

        {isLastQuestion && showResult ? (
          <TouchableOpacity style={styles.button} onPress={() => console.log('Quiz Result:', score)}>
            <Text style={styles.buttonText}>Show Result (Score: {score}/{questions.length})</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grammar Quiz</Text>

      {renderQuestion()}

      {renderProgressBar()}

      {renderButtons()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  wrongAnswerButton: {
    backgroundColor: '#ffcccc',
  },
  wrongAnswerButtonText: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  questionContainer: {
    marginBottom: 24,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 16,
  },
  answerButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  selectedAnswerButton: {
    backgroundColor: '#cde6c7',
  },
  correctAnswerButton: {
    backgroundColor: '#b2e5bf',
  },
  answerButtonText: {
    fontSize: 16,
  },
  selectedAnswerButtonText: {
    fontWeight: 'bold',
  },
  correctAnswerButtonText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  correctAnswerContainer: {
    marginTop: 12,
  },
  correctAnswerText: {
    fontWeight: 'bold',
    color: '#28a745',
  },
});

export default QuestionScreen;