import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [SearchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantByPrice = (price) => {
    //price === 2 || 3 || 4
    return restaurants.filter( (restaurant) => {
      return restaurant.restaurant.price_range === price;
    });
  };

  return(
    <>
      <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => SearchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>restaurants found {restaurants.length}</Text> */}
      <ScrollView>
        <RestaurantsList 
          results={filterRestaurantByPrice(2)} 
          title="Cost Effective"
        />
        <RestaurantsList 
          results={filterRestaurantByPrice(3)} 
          title="Bit Pricier"     
        />
        <RestaurantsList 
          results={filterRestaurantByPrice(4)} 
          title="Big Spender"                   
        /> 
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen; 