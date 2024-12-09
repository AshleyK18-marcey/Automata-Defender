import React, { useState, useEffect, useMemo } from 'react';
import { DndContext } from '@dnd-kit/core';
import GridDot from './GridDot';
import DraggableState from './Draggable';
import { State, GridDotProps } from './Definitions';

const MachineDisplay = (): JSX.Element => {

    const generateGrid = (): GridDotProps[] => {
        const startX = 710;
        const startY = 348;
        const gridSpacing = 126;
        const grid: GridDotProps[] = [];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 5; col++) {
                grid.push({
                    id: `${row}-${col}`, // Unique ID for each dot
                    x: startX + col * gridSpacing, // Calculate X position
                    y: startY + row * gridSpacing, // Calculate Y position
                    state: undefined,
                });
            }
        }
        return grid;
    };

    const [states, setState] = useState<State[]>([
        { id: 'state-1', label: 'q1', color: 'blue', accept: false },
        { id: 'accept-1', label: 'accept-1', color: 'green', accept: true }
    ]);

    const [grid, setGrid] = useState<GridDotProps[]>([
        { id: '0', x: 570, y: 474, state: { id: '0', label: 'Start', color: 'blue', accept: false } },
        ...generateGrid()
    ]);


    const ToolBar: JSX.Element = (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4" style={{ width: '900px', height: '170px' }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    {states.map((state) => (
                        <DraggableState
                            key={state.id}
                            id={state.id}
                            label={state.label}
                            color={state.color}
                            accept={state.accept}
                        />
                    ))}
                </div>
            </div>
        </div>);

    const handleDragEnd = (event: any) => {
        if (event.over && !event.over.disabled) {
            console.log(event.active.id, event.active.data.current.label, event.over.id);
            const newGridState: State = {
                id: event.active.id,
                label: event.active.data.current.label,
                color: event.active.data.current.color,
                accept: event.active.data.current.accept
            }
            setGrid((prevGrid) => prevGrid.map((dot) => dot.id === event.over.id ? { ...dot, state: newGridState } : dot));

            setState((prevStates) => {
                // Remove the dragged state
                const filteredStates = prevStates.filter(
                    (state) => state.id !== event.active.id
                );

                const oldId = parseInt(event.active.id.split('-')[1]);
                const oldAccept = event.active.data.current.accept;
                const oldColor = event.active.data.current.color;

                const newId = `state-${oldId + 1}`;
                const newLabel = oldAccept ? `accept-${oldId + 1}` : `q${oldId + 1}`;

                // Add the new state
                const newState: State = {
                    id: newId,
                    label: newLabel,
                    color: oldColor,
                    accept: oldAccept,
                };

                const sort = oldAccept ? [...filteredStates, newState] : [newState, ...filteredStates];

                return sort;
            });
            console.log(states);
        }
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
            {ToolBar}
        </DndContext>

    );
}

export default MachineDisplay;