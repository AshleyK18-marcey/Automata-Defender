import React, { useState, useEffect } from 'react';
import styles from '../CSS/fonts.module.css'
import { useMachineStore } from '../MachineStore';
import { CreateEdgeModalProps, EdgeFactoryProps } from './Definitions';
import { generateUUID } from '../utils';

const CreateEdgeModal = ({ onHide }: CreateEdgeModalProps) => {

    const grid = useMachineStore((state) => state.grid);

    const setEdges = useMachineStore((state) => state.setEdges);

    const edges = useMachineStore((state) => state.edges);

    const setGridEdges = useMachineStore((state) => state.setGridEdges);

    const alphabet = useMachineStore((state) => state.alphabet);

    const [selectedSourceValue, setSelectedSourceValue] = useState<string>('default');
    const [selectedTargetValue, setSelectedTargetValue] = useState<string>('default');
    const [selectedLabelValue, setSelectedLabelValue] = useState<string>('default');

    const [stateOptions, setStateOptions] = useState<string[]>([]);

    const [error, setError] = useState<string | undefined>(undefined);

    const [isCreateDisabled, setIsCreateDisabled] = useState<boolean>(true);

    const handleSourceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSourceValue(event.target.value)
        setError(undefined);
        handleIsCreateDisabled();
    };

    const handleTargetSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTargetValue(event.target.value)
        setError(undefined);
        handleIsCreateDisabled();
    };

    const handleLabelSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLabelValue(event.target.value)
        setError(undefined);
        handleIsCreateDisabled();
    };

    useEffect(() => {
        const stateLabels = grid
            .filter((dot) => dot.state?.label !== undefined) // Filter entries with defined labels
            .map((dot) => dot.state!.label); // Map to labels (safe to assert with ! here)

        setStateOptions(stateLabels);
    }, [grid]);

    const handleIsCreateDisabled = () => {
        console.log('here', selectedSourceValue, selectedTargetValue, selectedLabelValue);
        if (selectedSourceValue !== 'default' && selectedTargetValue !== 'default' && selectedLabelValue !== 'default') {
            setIsCreateDisabled(false);
            console.log("inside");
        }
    };


    const drawEdge = () => {
        console.log('clicked');
        const sourceGrid = grid.find(dot => dot.state?.label === selectedSourceValue);
        console.log(sourceGrid, 'sg');
        console.log(grid);
        const targetGrid = grid.find(dot => dot.state?.label === selectedTargetValue);
        console.log(targetGrid, 'tg');
        const edgeId = generateUUID();
        console.log(edgeId, 'eid');
        const newEdge: EdgeFactoryProps = {
            sourceGrid,
            targetGrid,
            edgeLabel: selectedLabelValue,
            edgeId
        }

        console.log(edges[0], newEdge);


        const matchingEdges = edges.some(edge =>
            edge.sourceGrid?.state?.label === newEdge.sourceGrid?.state?.label &&
            edge.targetGrid?.state?.label === newEdge.targetGrid?.state?.label &&
            edge.edgeLabel === newEdge.edgeLabel
        );
        if (matchingEdges) {
            setError('Cannot create duplicate edges. Try again.')

        }else {
            setEdges(newEdge);
            setGridEdges(sourceGrid, targetGrid, newEdge);
        }

        console.log(matchingEdges, 'matching edge');

        console.log(newEdge, 'newEdge');
        

    }


    return (
        <div className={'fixed fixed top-0 right-10 h-full w-1/4 bg-black-800 text-white p-4 flex flex-col items-center justify-center'} style={{ zIndex: '5' }}>
            <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4 silkScreen" style={{ width: '400px' }}>
                <p style={{ fontSize: '40px', alignSelf: 'center' }}>Create Edge</p>
                <label htmlFor='source' style={{ fontSize: '20px' }}>Choose a source state</label>
                <select
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid white',
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: '16px'
                    }}
                    id='source'
                    value={selectedSourceValue}
                    onChange={handleSourceSelectChange}

                >
                    <option value="default" disabled>
                        Select a State
                    </option>
                    {stateOptions.map((state) => (
                        <option value={state} key={state}>
                            {state}
                        </option>
                    ))}
                </select>
                <label htmlFor='target' style={{ fontSize: '20px' }}>Choose a target state</label>
                <select
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid white',
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: '16px'
                    }}
                    id='target'
                    value={selectedTargetValue}
                    onChange={handleTargetSelectChange}
                >
                    <option value="default" disabled>
                        Select a State
                    </option>
                    {stateOptions.map((state) => (
                        <option value={state} key={state}>
                            {state}
                        </option>
                    ))}
                </select>
                <label htmlFor='label' style={{ fontSize: '20px' }}>Choose a label</label>
                <select
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid white',
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: '16px'
                    }}
                    id='target'
                    value={selectedLabelValue}
                    onChange={handleLabelSelectChange}
                >
                    <option value="default" disabled>
                        Select a label
                    </option>
                    {alphabet.map((char) => (
                        <option value={char} key={char + selectedSourceValue}>
                            {char}
                        </option>
                    ))}
                </select>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
                    <button onClick={onHide} className='px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Cancel</button>
                    <button onClick={drawEdge} className='px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' disabled={false}>Create</button>
                </div>
                {error && <div className="bg-red-500 text-white p-4 text-center rounded-lg">
                        {error}
                    </div>}
            </div>
        </div>
    );
};

export default CreateEdgeModal;