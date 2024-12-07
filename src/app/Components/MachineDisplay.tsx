import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import styles from '../CSS/fonts.module.css'
import DialogBox from './DialogBox';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import GridDot from './GridDot';
import DraggableState from './Draggable';

type machineDisplayProps = {


};

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


type DraggingItem = {
    id: string;
    label: string;
    color: string;
};



const MachineDisplay = ({ }: machineDisplayProps): JSX.Element => {

    const [states, setStates] = useState<State[]>([
        { id: 'state-1', label: 'q1', color: 'blue' },
    ]);

    const [grid, setGrid] = useState<GridDotProps[]>([
        {id: '1', x: 550, y: 500, state: undefined }
    ]
    );

    const [isDropped, setIsDropped] = useState(false);

    /*const handleDragEnd = (id: string) => {
        // Check if the dragged state is the last one in the toolbar
        if (states.find((state) => state.id === id)) {
            const newLabel = `q${states.length + 1}`;
            const newState = {
                id: `state-${states.length + 1}`,
                label: newLabel,
                color: 'blue',
            };
            setStates((prev) => [...prev, newState]);
        }
    };*/

    const handleDragEnd = (event: any) => {
        if (event.over && event.over.id === '1') {
            console.log(event.active.id, event.active.data.current.label);
            setIsDropped(true);
            const newState: State = {id: event.active.id, label: event.active.data.current.label, color: event.active.data.current.color}
            const newGrid: GridDotProps = {id: '1', x: 550, y: 500, state: newState };
            setGrid([newGrid]);
            console.log(isDropped);
        }
        console.log(isDropped);
    }


    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4" style={{ width: '900px', height: '500px' }}>
                {grid.map((dot) => (
                            <GridDot
                                key={dot.id}
                                id={dot.id}
                                x={dot.x}
                                y={dot.y}
                                state={dot.state}
                            />
                        ))}
                </div>
            </div>
            {/*Toolbar */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4" style={{ width: '900px', height: '170px' }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                        {states.map((state) => (
                            <DraggableState
                                key={state.id}
                                id={state.id}
                                label={state.label}
                                color={state.color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </DndContext>

    );
}

export default MachineDisplay;