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
