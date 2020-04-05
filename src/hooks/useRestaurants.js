import {useEffect, useState} from 'react';
import zomato from '../api/zomato';

export default () => {
  //const [cityID, setCityID] = useState(21);
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const SearchApi = async (searchTerm) => {
    // try {
    //   const response = await zomato.get('/cities', {
    //     params: {
    //       'q' : searchTerm,
    //     }
    //   });
    //   setCityID(response.data.location_suggestions[0].id);
    //   console.log(cityID);
    // } catch (err) {
    //   setErrorMessage('Something went wrong finding cityID');
    // }
    try {
      const response = await zomato.get('/search', {
        params: {
          'entity_id' : 21,
          'entity_type' : 'city',
          'q' : searchTerm
          //'count' : 1
        }
      });
      setRestaurants(response.data.restaurants);
      //console.log(restaurants);
    } catch (err) {
      setErrorMessage('Something went wrong finding restaurants');
    }
  };

  useEffect(() => {
    SearchApi('pasta');
  },[]);

  return [SearchApi, restaurants, errorMessage];
};