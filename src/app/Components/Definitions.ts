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
    state?: State
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
    alphabet: string[],
    setAlphabet: (alpha: string[]) => void;
    resetMachine: () => void;
    setGrid: (newGridState: State, gridId: string) => void;
    setStates: (stateId: string, isAccept: boolean, stateColor: string) => void;
};

export type CreateEdgeModalProps = {
    onHide: () => void;
};