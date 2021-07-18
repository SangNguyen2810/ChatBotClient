import React, {useState, useEffect, memo} from 'react';
import Left from './Left'
import './Dashboard.scss'
import Center from './Center'
import Right from './Right'
import * as apiUtils from '../../utils/api/api';
import {useDispatch,useSelector} from 'react-redux'
import {firstLoaded} from "../../redux-store/features/channelReducer";
import PopupManager from '../popup/PopupManager';


function Dashboard(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    apiUtils.getChannelInfos('123')
      .then((chans) => {
        console.log(chans);
        dispatch(firstLoaded({loading: false, chans}))
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

export default memo(Dashboard);