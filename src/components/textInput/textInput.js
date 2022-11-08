import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './textInput-css';
const AppTextInput = ({...others}) => {
  return (
    <View style={styles.main}>
      <View style={styles.icon}>
        <Icon name="arrow-back" size={29} color="grey" />
      </View>
      <TextInput style={styles.textInput} {...others} />
    </View>
  );
};
export default AppTextInput;
