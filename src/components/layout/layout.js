import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './layout-css';
const Layout = ({children}) => {
  return <SafeAreaView style={styles.main}>{children}</SafeAreaView>;
};
export default Layout;
