import React, {useState} from 'react';
import './Search.scss'
import {useSelector} from "react-redux";
import Skeleton from './Skeleton'

export default function Search() {
  // Declare a new state variable, which we'll call "count"
  const channelInfo = useSelector((state) => {
    return state.channelInfo
  });


  if (channelInfo.loading) {
    return (
      <div className="search">
        <Skeleton width="100%" height="100%"/>
      </div>
    );
  } else {
    return (
      <div className="search">
        <div className="search--input">
          <input type="text"/>
        </div>
        <div className="search--filter">
          <div className="search--filter__container">
            <img alt="filter" src="/icon/filter.svg"/>
          </div>
        </div>
      </div>
    );
  }

}