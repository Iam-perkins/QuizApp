import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const LibraryScreen: React.FC = () => {
  const categories = [
    { id: '1', title: 'History', description: 'Test your knowledge of historical events.' },
    { id: '2', title: 'Science', description: 'Explore the wonders of the scientific world.' },
    { id: '3', title: 'Geography', description: 'Learn about different countries and landmarks.' },
    { id: '4', title: 'Sports', description: 'Challenge your sports trivia skills.' },
    { id: '5', title: 'Movies', description: 'Guess the movie based on famous quotes.' },
  ];

  const renderCategory = (category: { id: string; title: string; description: string }) => {
    return (
      <TouchableOpacity key={category.id} style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        <Text style={styles.categoryDescription}>{category.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Library</Text>
      <ScrollView contentContainerStyle={styles.categoryList}>
        {categories.map(renderCategory)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  categoryList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  categoryContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default LibraryScreen;