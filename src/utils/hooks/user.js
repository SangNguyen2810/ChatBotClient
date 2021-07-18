import { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useUserInfo} from '../selector/userSelector'

export function useHandleCreateChannel(channelName) {
  const userInfo = useUserInfo();
  console.log("hook: ",userInfo);

  return userInfo;
}

