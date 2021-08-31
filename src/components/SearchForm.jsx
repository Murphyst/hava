import React from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';

import SearchIcon from '../assets/icons/search.svg';

const SearchForm = ({cityName, onPress, onChangeText, navigation}) => {
  return (
    <View>
      <View style={styles.SearchInputWrapper}>
        <TextInput
          value={cityName}
          onChangeText={onChangeText}
          maxLength={28}
          placeholderTextColor="white"
          style={styles.SearchInput}
          placeholder={'Search city'}
        />
        {cityName.length > 2 && (
          <TouchableOpacity onPress={onPress}>
            <SearchIcon height="16" width="16" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchInputWrapper: {
    paddingLeft: 15,
    paddingRight: 30,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'rgba(255,255,255,0.48)',
  },
  SearchInput: {
    letterSpacing: 0.5,
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
    width: '100%',
  },
});

export default SearchForm;
