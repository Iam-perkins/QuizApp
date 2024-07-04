import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


const BoardScreen: React.FC = () => {
  const leaderboardData = [
    { name: 'John Doe', score: 150, icon: 'md-person', key: 'user1' },
    { name: 'Jane Smith', score: 120, icon: 'md-person', key: 'user2' },
    { name: 'Mike Johnson', score: 100, icon: 'md-person', key: 'user3' },
    { name: 'Emily Brown', score: 90, icon: 'md-person', key: 'user4' },
    { name: 'David Wilson', score: 80, icon: 'md-person', key: 'user5' },
  ];

  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Board</Text>
      <View style={styles.board}>
        <Text style={styles.sectionTitle}>Leaderboard</Text>
        {leaderboardData.map((user) => (
          <View style={styles.leaderboardItem} key={user.key}>
            <Text style={styles.rank}>{user.key}</Text>
            <FontAwesome name='user' size={24} color="#888" style={styles.userIcon} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userScore}>{user.score} points</Text>
            </View>
          </View>
        ))}
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Category 1</Text>
          <Text style={styles.categoryDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Category 2</Text>
          <Text style={styles.categoryDescription}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Category 3</Text>
          <Text style={styles.categoryDescription}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
      </View>
    </View>
    </ScrollView>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'orange',
    
  },
  board: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '90%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rank: {
    width: 30,
    marginRight: 10,
    fontSize: 16,
    color: '#555',
  },
  userIcon: {
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  userScore: {
    fontSize: 16,
    color: '#777',
  },
  category: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default BoardScreen;