import axios from 'axios';
import FakeConversationInfo from "../../constant/FakeConversationInfo";

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
    setTimeout(() => {
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
    }, 2000)

  })
}

export const getConversationInfo = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FakeConversationInfo);
    }, 2000)
  })
}

