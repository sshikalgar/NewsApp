// HomeDetailScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const HomeDetailScreen = ({ route }) => {
  const { element } = route.params; // Access the passed parameter

  return (
    <View>
      <Text>First Element from JSON Array:</Text>
      <Text>{JSON.stringify(element)}</Text>
    </View>
  );
};

export default HomeDetailScreen;