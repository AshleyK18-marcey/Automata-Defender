import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import DraggableState from './Draggable';

type State = {
    id: string,
    label: string,
    color: string,
};

type GridDotProps = {
    id: string,
    x: number,
    y: number,
    // onDrop
    state?: State

};

const GridDot = ({ id, x, y, state }: GridDotProps) => {
    const { isOver, setNodeRef } = useDroppable({
        id,
    });




    return (
        <div ref={setNodeRef}
            style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: isOver ? "lightblue" : "gray",
                transform: "translate(-50%, -50%)",
            }}>{state ? <DraggableState
                id={state.id}
                label={state.label}
                color={state.color}
            /> : (null)}
            </div>
    );
};

export default GridDot;
