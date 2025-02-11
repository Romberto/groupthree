import React from 'react';
import styled from './Tooltip.module.css'

type TooltipType = {
  className?:string;
}

export const Tooltip: React.FC<TooltipType> = ({className}) => {
  const  cls = `${styled.tooltip} ${className ? className : ""}`
  return (
    <div className={cls}>
      <p className={styled.text}>Only registered users can add to favorites.</p>
    </div>
  );
};

