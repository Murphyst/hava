import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {SkypeIndicator} from 'react-native-indicators';

import {getWeather} from '../../integration/api';
import {setAppLoadingAction, setError} from '../../redux/actions';

import SearchForm from '../../components/SearchForm';
import Card from '../../components/Card';
import EarthImage from '../../assets/earth.jpg';

const LandingScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const favouritesList = useSelector(state => state.favouritesList);
  const isLoading = useSelector(state => state.isLoading);

  const [cityName, setCityName] = useState('');

  const onChangeTextHandler = val => {
    dispatch(setError(null));
    setCityName(val);
  };
  const onPressHandler = async () => {
    dispatch(setAppLoadingAction(true));
    await getWeather(cityName);
    navigation.navigate('Result');
    dispatch(setAppLoadingAction(false));
    setCityName('');
  };

  return (
    <ImageBackground
      source={EarthImage}
      style={styles.Container}
      imageStyle={styles.Image}>
      <View style={styles.SearchFormWrapper}>
        <SearchForm
          cityName={cityName}
          onPress={onPressHandler}
          onChangeText={onChangeTextHandler}
          navigation={navigation}
        />
        {isLoading && <SkypeIndicator size={60} color="white" />}
      </View>

      {!!favouritesList.length > 0 && (
        <View>
          <Text style={styles.Favourites}>Favourites</Text>
        </View>
      )}

      <ScrollView horizontal>
        {favouritesList.map(i => (
          <Card
            cityId={i.id}
            name={i.name}
            timeZone={i.timezone}
            temp={i.temp}
            desc={i.description}
            key={i.id}
            image={i.backgroundImage}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 16,
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'black',
  },
  Image: {
    opacity: 0.61,
  },
  SearchFormWrapper: {
    marginTop: 130,
    flex: 5,
  },
  Favourites: {
    color: 'white',
    fontWeight: '600',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default LandingScreen;
