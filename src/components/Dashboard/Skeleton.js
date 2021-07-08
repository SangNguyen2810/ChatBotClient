import React, { useState } from 'react';
import './Skeleton.scss'



export default function Skeleton(props) {
  let {width, height, style} = props;
  if(width == undefined){
    width = '100%'
  }
  if(height == undefined){
    height = '100%'
  }

  let styleInline = {
    width,
    height,
    ...style
  }
  return (
    <div style={styleInline} className="skeleton"/>
  );
}