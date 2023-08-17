// ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
    <Button
      title="Go to Profile Detail"
      onPress={() => navigation.navigate('ProfileDetail')}
    />
  </View>
);

export default ProfileScreen;