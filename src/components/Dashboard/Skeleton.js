import React, { useState } from 'react';
import './Skeleton.scss'



export default function Skeleton(props) {
  const {width, height} = props;
  return (
    <div style={{width,height}} className="skeleton"/>
  );
}