import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import {camelize} from '../utils/helpers/appHelpers';

dayjs.extend(utc);
dayjs.extend(timezone);

const WeatherDetails = ({name, timeZone, temp, desc}) => {
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
    <View style={styles.Wrapper}>
      <Text style={styles.CityName}>{name}</Text>
      <Text style={styles.Description}>{`${camelize(desc)}, ${cityTime}
      `}</Text>
      <View style={styles.Details}>
        <Text style={styles.Temp}>{`${temp}°`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    marginTop: '30%',
    alignItems: 'center',
  },
  CityName: {
    fontSize: 52,
    fontWeight: '400',
    color: 'white',
  },
  Description: {
    marginTop: 5,
    fontWeight: '500',
    color: 'white',
  },
  Details: {
    alignItems: 'center',
    marginTop: 100,
  },
  Temp: {
    fontWeight: '700',
    fontSize: 96,
    color: 'white',
  },
});

export default WeatherDetails;
