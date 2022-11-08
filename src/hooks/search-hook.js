import React, {useState} from 'react';
import {api} from '../networks/http';
const SearchHook = () => {
  const [userInfo, setUserInfo] = useState('');
  const [text, setText] = useState('');
  const search = async text => {
    try {
      setText(text);
      let res = await api().get(`/?name=${text}`);
      setUserInfo(res.data);
    } catch (err) {
      console.log('err', err);
    }
  };
  return {
    userInfo,
    text,
    search,
  };
};
export default SearchHook;
