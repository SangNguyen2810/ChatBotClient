import React, {useState, useEffect} from 'react';
import Left from './Left'
import './Dashboard.scss'
import Center from './Center'
import Right from './Right'
import * as apiUtils from '../../utils/api/api';
import {useDispatch,useSelector} from 'react-redux'
import {firstLoaded} from "../../redux-store/features/conversationReducer";
import PopupManager from '../popup/PopupManager';


export default function Dashboard() {

  const dispatch = useDispatch()


  useEffect(() => {
    apiUtils.getConversationInfo('123')
      .then((convs) => {
        console.log(convs);
        dispatch(firstLoaded({loading: false, convs}))
      })
      .catch((e) => {

      })
  });


  return (
    <div className="dashboard">
      <PopupManager />
      <Left/>
      <Center/>
      <Right/>
    </div>
  );
}