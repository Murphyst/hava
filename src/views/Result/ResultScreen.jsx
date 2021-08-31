import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import WeatherDetails from '../../components/WeatherDetails';
import Info from '../../components/Info';
import XButton from '../../components/core/XButton';
import {addFavourite, removeFavourite} from '../../redux/actions';
import BackButton from '../../assets/icons/left-arrow.svg';
import AddFavButton from '../../assets/icons/add-favourite.svg';
import RemoveFavButton from '../../assets/icons/remove-favourite.svg';

const ResultScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.error);
  const city = useSelector((state) => state.cityResult);
  const favouritesList = useSelector((state) => state.favouritesList);

  const image = {uri: city?.backgroundImage};

  const addFavouriteHandler = () => {
    dispatch(addFavourite(city));
  };
  const removeFavouriteHandler = () => {
    dispatch(removeFavourite(city?.id));
  };

  const checkAddedToFavList = () =>
    favouritesList.some((fav) => fav.id === city?.id);
  const isAddedToFavList = checkAddedToFavList();

  return (
    <ImageBackground
      source={image}
      style={styles.Container}
      imageStyle={styles.Image}>
      <View>
        <View style={styles.DetailsWrapper}>
          <XButton
            ButtonIcon={BackButton}
            onPress={() => navigation.navigate('Landing')}
          />
          {!error && (
            <XButton
              ButtonIcon={isAddedToFavList ? RemoveFavButton : AddFavButton}
              onPress={
                isAddedToFavList ? removeFavouriteHandler : addFavouriteHandler
              }
            />
          )}
        </View>

        {error ? (
          <Info />
        ) : (
          <WeatherDetails
            name={city?.name}
            temp={city?.temp}
            desc={city?.description}
            timeZone={city?.timezone}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Container: {
    position: 'relative',
    paddingHorizontal: 32,
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'black',
  },
  DetailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight / 15,
  },
  Image: {
    opacity: 0.3,
  },
});

export default ResultScreen;
