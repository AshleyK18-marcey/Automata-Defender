import { create } from 'zustand'
import { GridDotProps, MachineStoreDef, State } from './Components/Definitions';
import { generateGrid } from './utils';


export const useMachineStore = create<MachineStoreDef>()((set, get) => ({
    grid: [{ id: '0', x: 570, y: 474, state: { id: '0', label: 'Start', color: 'blue', accept: false } },
    ...generateGrid()],
    states: [
        { id: 'state-1', label: 'q1', color: 'blue', accept: false },
        { id: 'accept-1', label: 'accept-1', color: 'green', accept: true }
    ],
    alphabet: [],
    setAlphabet: (alpha: string[]) => {
        set({alphabet: alpha})

    },
    resetMachine: () => {
        // To Do: Theres a bug when you drop an accept state and then a normal state and then reset
        set((prevState) => {
            const resetGrid = [{ id: '0', x: 570, y: 474, state: { id: '0', label: 'Start', color: 'blue', accept: false } },
                ...generateGrid()];
            const resetStates = [
                { id: 'state-1', label: 'q1', color: 'blue', accept: false },
                { id: 'accept-1', label: 'accept-1', color: 'green', accept: true }
            ];

            return {grid: resetGrid, states: resetStates}
        })
    },
    setGrid: (newGridState: State, gridId: string) => {
        set((state) => {
            const grid = state.grid.map((dot) =>
                dot.id === gridId ? { ...dot, state: newGridState } : dot
            );
            return { grid };
        });
    }
    ,
    setStates: (stateId: string, isAccept: boolean, stateColor: string) => {
        set((prevState) => {
            const filteredStates = prevState.states.filter(
                (state) => state.id !== stateId
            );
            const idNum = parseInt(stateId.split('-')[1]);
            const newId = `state-${idNum + 1}`;
            const newLabel = isAccept ? `accept-${idNum + 1}` : `q${idNum + 1}`;
            const newState: State = {
                id: newId,
                label: newLabel,
                color: stateColor,
                accept: isAccept,
            };
            const states = isAccept ? [...filteredStates, newState] : [newState, ...filteredStates];
            return { states }
        })

    }

}));
/*
set((prevState) => {

            return {}
        })
*/