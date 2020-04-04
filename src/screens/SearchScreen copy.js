import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import zomato from '../api/zomato';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [resTypes, setResTypes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const restaurentsTypes = async () => {
    try {
      const response = await zomato.get('/establishments', {
        params: {
          'city_id' : 21,
        }
      });
      setResTypes(response.data);
      console.log(resTypes);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  return(
    <View>
      <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => restaurentsTypes()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen; 