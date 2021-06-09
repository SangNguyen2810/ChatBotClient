import axios from 'axios';

export const register = (userInfo) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:8000/user/register', {
      ...userInfo,
    }, {
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      })
  })
}
export const login = (userInfo) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:8000/user/login', {
      ...userInfo
    }, {
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      })
  })
}

