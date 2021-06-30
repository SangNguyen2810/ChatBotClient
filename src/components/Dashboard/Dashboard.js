import React, {useState, useEffect} from 'react';
import Left from './Left'
import './Dashboard.scss'
import Center from './Center'
import Right from './Right'
import * as apiUtils from '../../utils/api/api';
import {useDispatch} from 'react-redux'
import {firstLoaded} from "../../redux-store/features/conversationReducer";


export default function Dashboard() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
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
      <Left/>
      <Center/>
      <Right/>
    </div>
  );
}