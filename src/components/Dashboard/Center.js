import React, { useState } from 'react';
import './Center.scss'
import UserInfo from './UserInfo'
import ConversationContainer from './ConversationContainer'
import { useSelector } from 'react-redux'

export default function Center() {
  return (
    <div className="center">
      <div className="center__container">
        <UserInfo />
        <ConversationContainer/>
      </div>

    </div>
  );
}