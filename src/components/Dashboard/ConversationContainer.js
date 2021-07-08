import React, { useState } from 'react';
import './ConversationContainer.scss'
import Search from './Search'
import ListConversation from './ListConversation'
import {useSelector} from "react-redux";
import Skeleton from "./Skeleton";

export default function Center() {
  // Declare a new state variable, which we'll call "count"

  const NUMBER_OF_CONVERSATION_LOADING = 10;

  return (
    <div className="conversationContainer">
      <Search />
      <ListConversation />
    </div>
  );
}