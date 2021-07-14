import React, {useState, useEffect} from 'react';
import './PopupManager.scss'
import CreateConversation from './CreateChannel'
import {useDispatch,useSelector} from 'react-redux'


export default function PopupManager(props) {



  const popupManagerState = useSelector((state) => {
    return state.popupManager
  });

  if(popupManagerState.isShowing){
    return (
      <div className="popupManager">
          <CreateConversation/>
      </div>
    );
  }else return null;


}