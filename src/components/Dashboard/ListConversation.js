import React, { useState } from 'react';
import './ListConversation.scss'
import Skeleton from "./Skeleton";
import {useSelector} from "react-redux";



export default function ListConversation() {
  // Declare a new state variable, which we'll call "count"
  const convInfo = useSelector((state) => {
    return state.convInfo
  });

  const MAX_CONVERSATION_SKELETON = 10;
  const listSkeleton = [];
  for(let i = 0; i < MAX_CONVERSATION_SKELETON; i++){
    const ske = <Skeleton key={i} height='80px' style={{marginTop:'20px'}}/>
    listSkeleton.push(ske);
  }

  if(convInfo.loading){
    return (
      <div className="listConversation">
        {listSkeleton}
      </div>
    );
  }else return(
    <div className="listConversation">
      sadasdsa
    </div>
  )

}