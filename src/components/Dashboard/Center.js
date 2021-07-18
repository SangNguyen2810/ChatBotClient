import React from 'react';
import './Center.scss'
import UserInfo from './UserInfo'
import ChannelContainer from './ChannelContainer'
import * as Redux from 'react-redux'

function Center(props) {


  return (
    <div className="center">
      <div className="center__container">
        <UserInfo sang={123}/>
        <ChannelContainer/>
        
      </div>

    </div>
  );
}

export default React.memo(Center);