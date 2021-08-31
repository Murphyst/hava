import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const XButton = ({ButtonIcon, onPress, height, width}) => (
  <TouchableOpacity onPress={onPress} style={styles.Button}>
    <ButtonIcon height={height} width={width} />
  </TouchableOpacity>
);

export default XButton;

const styles = StyleSheet.create({
  Button: {
    height: 24,
    width: 24,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: 'white',
    fontSize: 24,
  },
});
