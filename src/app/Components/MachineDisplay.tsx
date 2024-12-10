import React, { useState, useEffect, useMemo } from 'react';
import { DndContext } from '@dnd-kit/core';
import GridDot from './GridDot';
import DraggableState from './Draggable';
import { State, GridDotProps } from './Definitions';
import CreateEdgeModal from './CreateEdgeModal';
import { useMachineStore } from '../MachineStore';
import EdgeFactory  from './EdgeFactory';

const MachineDisplay = (): JSX.Element => {

    const grid = useMachineStore((state) => state.grid);

    const states = useMachineStore((state) => state.states);

    const resetmachine = useMachineStore((state) => state.resetMachine);

    const setGridState = useMachineStore((state) => state.setGridState);

    const setStates = useMachineStore((state) => state.setStates);

    const edges = useMachineStore((state) => state.edges);

    const [createEdgeOpen, setCreateEdgeOpen] = useState<boolean>(false);

    const hideCreateEdgeModal = () => {
        setCreateEdgeOpen(false);
    };


    // Tool bar cant be its own component because it messes with the drag and drop
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
                    <div style={{ display: 'block' }}>
                        <button onClick={() => setCreateEdgeOpen(true)} className=" bg-black border border-white hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" style={{ width: '200px', height: '50px', position: 'absolute', right: '20px', top: '20px' }}>
                            Create Edge
                        </button>
                        <button onClick={resetmachine} className=" bg-black border border-white hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" style={{ width: '200px', height: '50px', position: 'absolute', right: '20px', bottom: '20px' }}>
                            Reset 
                        </button>
                    </div>
                </div>
            </div>
        </div>);

    const handleDragEnd = (event: any) => {
        if (event.over && !event.over.disabled) {
            const newGridState: State = {
                id: event.active.id,
                label: event.active.data.current.label,
                color: event.active.data.current.color,
                accept: event.active.data.current.accept
            }
            setGridState(newGridState, event.over.id);
            setStates(event.active.id, event.active.data.current.accept, event.active.data.current.color);
        }
    }


    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4" style={{ width: '80%', height: '55vh', position: 'relative' }}>
                    {grid.map((dot) => (
                        <GridDot
                            key={dot.id}
                            id={dot.id}
                            x={dot.x}
                            y={dot.y}
                            state={dot.state}
                            edge={dot.edge}
                        />
                    ))}
                </div>
            </div>
            {ToolBar}
            {createEdgeOpen && <CreateEdgeModal onHide={hideCreateEdgeModal} />}
        </DndContext>

    );
}

export default MachineDisplay;