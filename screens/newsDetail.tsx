import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native!</Text>
      <Text>This is a sample view.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default NewsDetail;
