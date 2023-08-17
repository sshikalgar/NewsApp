// HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios, { isCancel, AxiosError } from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [responseData, setResponseData] = useState([]);

  const goToHomeDetail = () => {
    if (responseData.length > 0) {
      navigation.navigate('HomeDetail', { element: responseData[0] });
    }
  };

  const fetchData = async () => {
    try {
      const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=04a86d9570f642059244891d53d49d1d';
      const resp = await axios.get(url)
      console.log(resp.data.articles);
      setResponseData(resp.data.articles); // Store the entire JSON response object
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once, on component mount

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Button title="Go to details" onPress={goToHomeDetail} />
          <Text>Home Screen</Text>
          {responseData && <Text>Fetched Data: {JSON.stringify(responseData)}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;