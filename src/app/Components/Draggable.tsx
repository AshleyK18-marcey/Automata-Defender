import React, { useState, useEffect, useMemo, CSSProperties } from 'react';
import Image from 'next/image';
import { ItemTypes } from '../utils';

import styles from '../CSS/fonts.module.css'
import DialogBox from './DialogBox';
import { useDraggable } from '@dnd-kit/core';

type DraggableStateProps = {
  id: string,
  label: string,
  color: string,

};

const DraggableState = ({ id, label, color, }: DraggableStateProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { label, color }
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    backgroundColor: color,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'grab',
    fontWeight: 'bold',
    color: 'white',
  };


  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {label}
    </div>
  );
};


export default DraggableState;