import React, { useState } from 'react';
import './ConversationContainer.scss'
import Search from './Search'
import ListConversation from './ListConversation'
import {useSelector} from "react-redux";
import Skeleton from "./Skeleton";

export default function Center() {
  // Declare a new state variable, which we'll call "count"
  const convInfo = useSelector((state) => {
    return state.convInfo
  });

  const NUMBER_OF_CONVERSATION_LOADING = 10;

  if(convInfo.loading){
    return(
      <div className="conversationContainer__loading">
        <Skeleton width="80px" height="50px"/>
        <Skeleton width="200px" height="50px"/>
        <div className="conversationContainer__loading__listConversation">
        </div>
      </div>
    )
  }else return (
    <div className="conversationContainer">
      <Search />
      <ListConversation />
    </div>
  );
}