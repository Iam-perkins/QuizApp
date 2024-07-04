import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, useColorScheme } from 'react-native';

interface SearchResult {
  id: string;
  name: string;
}

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#fff' : '#333'; // Determine text color based on color scheme

  const handleSearch = () => {
    // Perform search logic here, such as calling an API or searching a local data source
    // Replace the following code with your actual search implementation

    // Simulating search results
    const results: SearchResult[] = [
      { id: '1', name: 'Result 1' },
      { id: '2', name: 'Result 2' },
      { id: '3', name: 'Result 3' },
    ];

    setSearchResults(results);
  };

  const renderItem = ({ item }: { item: SearchResult }) => (
    <View style={styles.resultItem}>
      <Text style={{ color: textColor }}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Enter search query"
        placeholderTextColor="#999"
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No results found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
   
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    color: '#333', // Set initial text color
  },
  resultItem: {
    marginBottom: 8,
  },
});

export default SearchPage;