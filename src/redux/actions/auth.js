import store from '../store';
import types from '../types';
import { apiGet, apiPost, clearUserData, setUserData } from '../../utils/utils';
import { LOGIN, SIGNUP } from '../../config/urls';
const {dispatch} = store;

const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

const saveViewData = (data) => {
  dispatch({
    type: types.SAVE_VIEW_DATA,
    payload: data,
  });
};
// export function login(data) {
//   saveUserData(data);
//   // setUserData(data)
// }

export const updateInternetConnection = (data) => {
  dispatch({
    type: types.NO_INTERNET,
    payload: data,
  });
};

export const login = (data) => {
  console.log(data, 'the geivn dart');
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then((res) => {
        saveUserData(res.data);
        setUserData(res.data).then((suc) => {
          resolve(res);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signUp = (data) => {
  console.log(data, 'the geiv ndart');
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP, data)
      .then((res) => {
        saveUserData(res.data);
        setUserData(res.data).then((suc) => {
          resolve(res);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const getViewData = (data) => {
  console.log(data, 'the geiv ndart');
  return new Promise((resolve, reject) => {
    apiPost(VIEW_DATA)
      .then((res) => {
        console.log(res, '@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------');
        saveViewData(res.data);
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

