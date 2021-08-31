import React from 'react';
import {Image, StyleSheet} from 'react-native';
import EarthImage from '../assets/earth.jpg';

const Loading = () => {
  return (
    <Image
      resizeMethod={'scale'}
      style={styles.Container}
      source={EarthImage}
    />
  );
};

const styles = StyleSheet.create({
  Container: {
    resizeMode: 'stretch',
  },
});

export default Loading;
