import React, { useState } from 'react';
import './UserInfo.scss'
import Skeleton from './Skeleton'
import {useSelector} from "react-redux";

export default function UserInfo() {
  // Declare a new state variable, which we'll call "count"
  const convInfo = useSelector((state) => {
    return state.convInfo
  });


  if(convInfo.loading){
    return(
      <div className="userInfo">
        <Skeleton width="80px" height="50px"/>
        <Skeleton width="200px" height="50px"/>
      </div>
    )
  }else return (
    <div className="userInfo">
      <div className="userInfo__name">Sang Nguyen</div>
      <div className="userInfo__addFriend">+ Add Friend</div>
    </div>
  );
}