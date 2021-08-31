import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {removeFavourite} from '../redux/actions';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import XButton from './core/XButton';
import RemoveFavButton from '../assets/icons/remove-favourite.svg';
import {camelize} from '../utils/helpers/appHelpers';

dayjs.extend(utc);
dayjs.extend(timezone);

const Card = ({cityId, name, timeZone, temp, desc, image}) => {
  const dispatch = useDispatch();
  const backgroundImage = {uri: image};
  const removeFavouriteHandler = () => {
    dispatch(removeFavourite(cityId));
  };
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const tick = () => {
    setTime(Math.round(new Date().getTime() / 1000));
  };

  const cityTime = dayjs().tz(timeZone).format('HH:mm a');
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.Container}
      imageStyle={styles.Image}>
      <XButton
        ButtonIcon={RemoveFavButton}
        width={16}
        height={16}
        onPress={removeFavouriteHandler}
      />
      <View style={styles.DetailsWrapper}>
        <Text numberOfLines={1} style={styles.CityName}>
          {name}
        </Text>
        <Text style={styles.CityTime}>{cityTime}</Text>
        <Text style={styles.CityTemp}>{`${temp}°`}</Text>
        <Text style={styles.CityDescription}>{camelize(desc)}</Text>
      </View>
    </ImageBackground>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Container: {
    padding: 16,
    marginRight: 15,
    height: windowHeight / 3,
    width: windowWidth / 2.5,
  },
  Image: {
    borderRadius: 15,
    opacity: 0.5,
  },
  DetailsWrapper: {
    height: '100%',
    paddingTop: '40%',
    alignItems: 'center',
  },
  CityName: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  CityTime: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  CityTemp: {
    marginTop: 20,
    color: 'white',
    fontSize: 38,
    fontWeight: '700',
  },
  CityDescription: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Card;
