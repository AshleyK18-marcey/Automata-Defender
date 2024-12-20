import React, { useState, useEffect, useMemo, CSSProperties } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { State, GridDotProps } from './Definitions';

const DraggableState = ({ id, label, color, accept }: State) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { label, color, accept }
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    backgroundColor: color,
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'grab',
    fontWeight: 'bold',
    color: 'white'
  };

  const acceptStyle = {
    ...style, border: '5px solid white'
  };


  return (
    <div
      ref={setNodeRef}
      style={accept ? acceptStyle : style}
      {...listeners}
      {...attributes}
    >
      {label}
    </div>
  );
};


export default DraggableState;