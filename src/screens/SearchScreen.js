import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import zomato from '../api/zomato';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [cityID, setCityID] = useState();
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const SearchApi = async () => {
    try {
      const response = await zomato.get('/cities', {
        params: {
          'q' : 'guwahati',
        }
      });
      setResults(response.data.location_suggestions[0].id);
      console.log(results);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    SearchApi('guwahati');
  },[]);

  return(
    <View>
      <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => SearchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Guwahati city is {results}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen; 