export type State = {
    id: string
    label: string,
    color: string,
    accept: boolean
};

export type GridDotProps = {
    id: string,
    x: number,
    y: number,
    state?: State,
    edge?: EdgeFactoryProps[]
};

export type DialogBoxProps = {
    dialog: string[];
    nextPage: () => void;
    width: string;
    bottom: string;
};

export type characterAreaProps = {
    character: string;
    dialog: string[];
    nextPage: () => void;
    
};

export type languageDefProps = {
    languageDefinition: string;
    
};

export type MachineStoreDef = {
    grid: GridDotProps[]
    states: State[],
    edges: EdgeFactoryProps[],
    alphabet: string[],
    setAlphabet: (alpha: string[]) => void;
    resetMachine: () => void;
    setGridState: (newGridState: State, gridId: string) => void;
    setGridEdges: (sourceGrid: GridDotProps | undefined, targetGrid: GridDotProps | undefined, newEdge:EdgeFactoryProps) => void;
    setStates: (stateId: string, isAccept: boolean, stateColor: string) => void;
    setEdges: (newEdge: EdgeFactoryProps) => void;
    removeEdge: (oldEdge: EdgeFactoryProps) => void;
};

export type CreateEdgeModalProps = {
    onHide: () => void;
};

export type EdgeFactoryProps= {
    sourceGrid: GridDotProps | undefined,
    targetGrid: GridDotProps | undefined,
    edgeLabel: string,
    edgeId: string
}


export enum EdgeType {
    loop,
    straight,
    multiDirection 
}