import React from 'react';
import {View} from 'react-native';
import AppTextInput from '../../components/textInput/textInput';
import Layout from '../../components/layout/layout';
import AppText from '../../components/text/app-text';
import {styles} from './home-css';
import SearchHook from '../../hooks/search-hook';
const Home = () => {
  const {userInfo, text, search} = SearchHook();
  return (
    <Layout>
      <View style={styles.main}>
        <AppTextInput
          value={text}
          testID="search"
          onChangeText={e => search(e)}
          placeholder="Enter text to search"
        />
        <View style={styles.textContainer}>
          <AppText testID="username">{userInfo?.name}</AppText>
        </View>
      </View>
    </Layout>
  );
};
export default Home;
