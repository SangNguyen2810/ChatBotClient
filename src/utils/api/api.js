import axios from "axios";
import FakeConversationInfo from "../../constant/FakeConversationInfo";
import HTTP_STATUS from "../../static/httpStatus";

export const register = (userInfo) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "http://localhost:8000/user/register",
        {
          ...userInfo,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
export const login = (userInfo) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "http://localhost:8000/user/login",
        {
          ...userInfo,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const createChannel = (channelName) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "http://localhost:8000/user/createChannel",
        { channelName },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status == HTTP_STATUS.CREATED) {
          return resolve(res.data);
        } else return null;
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const getConversationInfo = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FakeConversationInfo);
    }, 2000);
  });
};

export const getChannelInfos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:8000/user/topChannel", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == HTTP_STATUS.CREATED) {
          return resolve(res.data);
        } else return null;
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
