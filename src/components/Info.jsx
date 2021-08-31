import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {camelize} from '../utils/helpers/appHelpers';

const Info = () => {
  const error = useSelector((state) => state.error);
  return <Text style={styles.ErrorMessage}>{camelize(error)}</Text>;
};

const styles = StyleSheet.create({
  ErrorMessage: {
    marginTop: 150,
    textAlign: 'center',
    fontSize: 42,
    color: 'white',
  },
});

export default Info;
