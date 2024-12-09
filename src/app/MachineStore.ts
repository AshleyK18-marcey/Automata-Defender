import { create } from 'zustand'
import { EdgeFactoryProps, GridDotProps, MachineStoreDef, State } from './Components/Definitions';
import { generateGrid } from './utils';


export const useMachineStore = create<MachineStoreDef>()((set, get) => ({
    grid: [{ id: '0', x: 570, y: 474, state: { id: '0', label: 'Start', color: 'blue', accept: false }, edge: [] },
    ...generateGrid()],
    states: [
        { id: 'state-1', label: 'q1', color: 'blue', accept: false },
        { id: 'accept-1', label: 'accept-1', color: 'green', accept: true }
    ],
    edges: [],
    alphabet: [],
    setAlphabet: (alpha: string[]) => {
        set({ alphabet: alpha })

    },
    resetMachine: () => {
        // To Do: Theres a bug when you drop an accept state and then a normal state and then reset
        set((prevState) => {
            const resetGrid = [{ id: '0', x: 570, y: 474, state: { id: '0', label: 'Start', color: 'blue', accept: false }, edge: [] },
            ...generateGrid()];
            const resetStates = [
                { id: 'state-1', label: 'q1', color: 'blue', accept: false },
                { id: 'accept-1', label: 'accept-1', color: 'green', accept: true }
            ];

            return { grid: resetGrid, states: resetStates, edges: [] }
        })
    },
    setGridState: (newGridState: State, gridId: string) => {
        set((state) => {
            const grid = state.grid.map((dot) =>
                dot.id === gridId ? { ...dot, state: newGridState } : dot
            );
            return { grid };
        });
    }
    ,
    setGridEdges: (sourceGrid: GridDotProps | undefined, targetGrid: GridDotProps | undefined, newEdge: EdgeFactoryProps) => {
        console.log('in set  grid edges');
        set((state) => {
            const updatedGrid = state.grid.map((dot) => {
                if (dot.id === sourceGrid?.id) {
                    // Add the new edge to the source grid
                    return { ...dot, edge: [...(dot.edge || []), newEdge] };
                } else if (dot.id === targetGrid?.id) {
                    // Add the new edge to the target grid (reverse connection)
                    return { ...dot, edge: [...(dot.edge || []), newEdge] };
                }
                return dot; // No change for other grid dots
            });
            console.log(updatedGrid);
            return { grid: updatedGrid };
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

    },
    setEdges: (newEdge: EdgeFactoryProps) => {
        console.log('in set edges');
        set((prevState) => {
           const updatedEdges = [...prevState.edges, newEdge];
           console.log(updatedEdges);
           return {edges: updatedEdges};
        })

    },
    removeEdge(oldEdge: EdgeFactoryProps) {
        set((prevState) => {
            // Update grid: Remove the edge from grid.state.edge for all relevant grid dots
            const updatedGrid = prevState.grid.map((dot) => {
                if (dot.edge) {
                    return {
                        ...dot,
                        edge: dot.edge.filter(
                            (edge) => edge.edgeId !== oldEdge.edgeId // Remove matching edge by ID
                        ),
                    };
                }
                return dot; // Return unchanged dot if no edges exist
            });
    
            // Update edges: Remove the edge from the edges array
            const updatedEdges = prevState.edges.filter(
                (edge) => edge.edgeId !== oldEdge.edgeId // Remove matching edge by ID
            );
    
            return {
                grid: updatedGrid,
                edges: updatedEdges,
            };
        });
    },

}));
/*
set((prevState) => {

            return {}
        })
*/