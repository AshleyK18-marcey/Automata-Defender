import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import DraggableState from './Draggable';
import { GridDotProps, State } from './Definitions';
import StaticState from './StaticState';

const GridDot = ({ id, x, y, state, edge }: GridDotProps) => {
    const { isOver, setNodeRef } = useDroppable({
        id,
        data: {
            state
        },
        disabled: state ? true : false
    });

    const render = (
        state ? <div style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            transform: "translate(-50%, -50%)"
        }}>
            <StaticState
                id={state.id}
                label={state.label}
                color={state.color}
                accept={state.accept}
            />
        </div> : <div ref={setNodeRef}
            style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: isOver ? "lightblue" : "gray",
                transform: "translate(-50%, -50%)",
            }} />
    );


    return (
        <>{render}</>

    );
};

export default GridDot;
