import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView, SafeAreaView } from 'react-native';
import { AuthSession } from 'expo';
import { FlatList } from 'react-native-gesture-handler';

const RestaurantsShowScreen = ({ navigation }) => {
  const result = navigation.getParam('result');

  return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={{uri: result.thumb}} />
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.name}>Timings</Text>
        <Text>{result.timings}</Text>
        <Text style={styles.name}>Average Cost For Two</Text>
        <Text>{result.average_cost_for_two}</Text>
        <Text style={styles.name}>Cuisines</Text>
        <Text>{result.cuisines}</Text>
        <Text style={styles.name}>Highlights</Text>
        <FlatList
          data={result.highlights}
          keyExtractor={ (it) => it}
          renderItem={ ({ item }) =>{
            return<Text>{item}</Text>;
          }}
        />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15
  },
  image: {
    width: 'auto',
    height: 120,
    borderRadius: 4,
    marginTop: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue'
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5
  }
});

export default RestaurantsShowScreen;