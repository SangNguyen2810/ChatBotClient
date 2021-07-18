import React, { useState } from 'react';
import './ChannelContainer.scss'
import Search from './Search'
import ListChannel from './ListChannel'
import {useSelector} from "react-redux";
import Skeleton from "./Skeleton";

export default function Center() {
  // Declare a new state variable, which we'll call "count"

  const NUMBER_OF_CONVERSATION_LOADING = 10;

  return (
    <div className="channelContainer">
      <Search />
      <ListChannel />
    </div>
  );
}