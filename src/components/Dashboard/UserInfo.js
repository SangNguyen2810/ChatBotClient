import React, { useState } from 'react';
import './UserInfo.scss'
import Skeleton from './Skeleton'
import {useSelector,useDispatch} from "react-redux";
import {show} from "../../redux-store/features/popupReducer";

export default function UserInfo() {
  // Declare a new state variable, which we'll call "count"
  const convInfo = useSelector((state) => {
    return state.convInfo
  });

  const dispatch = useDispatch()

  const openPopupChannel = () => {
    dispatch(show())
  }


  if(convInfo.loading){
    return(
      <div className="userInfo">
        <Skeleton width="80px" height="40px"/>
        <Skeleton width="200px" height="40px"/>
      </div>
    )
  }else return (
    <div className="userInfo">
      <div className="userInfo__name">Sang Nguyen</div>
      <div onClick={()=>{openPopupChannel()}} className="userInfo__addFriend">+ Create Channel</div>
    </div>
  );
}