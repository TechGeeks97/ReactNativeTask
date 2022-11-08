import axios from 'axios';
import {base_url} from './api-url';

const api = () => {
  const responseHandler = response => {
    return response;
  };
  const handleError = error => {
    console.log(JSON.stringify(error));
    console.log('response error', error.response.data);

    // switch (error.response.status) {
    //   case 400:
    //     store.dispatch(
    //       displayError({
    //         status: true,
    //         message:
    //           error?.response?.data?.error_description ||
    //           error?.response?.data?.message,
    //       })
    //     );
    //     break;
    //   case 401:
    //     store.dispatch(setUser(null));
    //     store.dispatch(
    //       displayError({
    //         status: true,
    //         message:
    //           error?.response?.data?.error_description ||
    //           error?.response?.data?.message,
    //       })
    //     );
    //     break;
    // }
    throw error;
  };

  const instance = axios.create({
    baseURL: base_url,
  });
  instance.interceptors.request.use(async config => {
    return config;
  });

  instance.interceptors.response.use(
    response => responseHandler(response),
    error => handleError(error),
  );

  return instance;
};

export {api};
