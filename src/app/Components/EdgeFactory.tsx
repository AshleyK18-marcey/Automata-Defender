import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { EdgeType, EdgeFactoryProps } from './Definitions';
import { useMachineStore } from '../MachineStore';


const EdgeFactory = ({ sourceGrid, targetGrid, edgeLabel }: EdgeFactoryProps): JSX.Element => {
    const removeEdge = useMachineStore((state) => state.removeEdge); 
    const rightTriangle = {
        width: '0',
        height: '0',
        borderTop: '15px solid transparent',
        borderLeft: '15px solid #fff',
        borderBottom: '15px solid transparent',
        marginRight: "3px", // Spacing between the triangle and the circle
    }

    const leftTriangle = {
        ...rightTriangle,
        borderLeft: '',
        marginRight: "",
        marginLeft: '3px',
        borderRight: '15px solid #fff'
    }

    const [edgeType, setEdgeType] = useState<EdgeType>(EdgeType.straight);
    const [otherEdgeLabel, setOtherEdgeLabel] = useState<string>('');
    const [render, setRender] = useState<JSX.Element>(<></>);
    const [width, setWidth] = useState<string>('');
    const [x, setX] = useState<string>('');
    const [y, setY] = useState<string>('');


    useEffect(() => {
        console.log('in edge factory');
        const source = sourceGrid?.state?.label;
        console.log('source', source);
        const target = targetGrid?.state?.label;
        console.log('target', target);

        if(source === target) {
            console.log('s = t');
            setEdgeType(EdgeType.loop);
        }
        else if(sourceGrid?.edge){
            console.log('multi logic');
            const targetToSourceEdge = sourceGrid.edge.find(e => e.sourceGrid?.state?.label === target && e.targetGrid?.state?.label === source);
            console.log(targetToSourceEdge);
            if(targetToSourceEdge){
                removeEdge(targetToSourceEdge);
                console.log('inside if', targetToSourceEdge);
                setEdgeType(EdgeType.multiDirection);
                setOtherEdgeLabel(targetToSourceEdge.edgeLabel)
            }
        }
        console.log(edgeType);
    }, []);

    useEffect(() => {
        renderEdge();
    }, [edgeType]);

    const straightArrow = (
        <div style={{ display: 'block', width: 'fit-content', position: 'relative' }}>
            <p style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 5px',   // Optional: padding for text spacing
            }}>{edgeLabel}</p>
            <div style={{ display: 'flex', width: 'fit-content' }}>
                <hr style={{ width: '100px', border: '2px solid white', marginTop: '12px' }} />
                <div style={rightTriangle}></div>
            </div>
        </div>


    );

    const loopArrow = (
        <div style={{ position: 'relative', left: '685px', top: '290px', width: 'fit-content' }}>
            <div style={{ display: 'block' }}>
                <p>{edgeLabel}</p>
                <Image src={'/Loop.png'} alt='character' width={80} height={50}></Image>
            </div>

        </div>
    );

    const multiArrow = (
        <div style={{ display: 'block', width: 'fit-content', position: 'relative' }}>
            <p style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 5px',   // Optional: padding for text spacing
            }}>{edgeLabel}</p>

            <div style={{ display: 'flex', width: 'fit-content' }}>
                <hr style={{ width: '100px', border: '2px solid white', marginTop: '12px' }} />
                <div style={rightTriangle}></div>
            </div><div style={{ display: 'flex', width: 'fit-content' }}>
                <div style={leftTriangle}></div>
                <hr style={{ width: '100px', border: '2px solid white', marginTop: '12px' }} />
            </div>
            <p style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 5px',   // Optional: padding for text spacing
            }}>{otherEdgeLabel}</p>
        </div>
    )

    const renderEdge = () => {
        console.log(edgeType, 'ahhhh');
        switch (edgeType) {
            case EdgeType.loop:
                setRender(loopArrow);
                break;
            case EdgeType.straight:
                setRender(straightArrow);
                break;
            case EdgeType.multiDirection:
                setRender(multiArrow);
                break;
            default:
                return null; // Handle unknown edge types
        }
    };





    return (
        <>{render}</>
    );
}

export default EdgeFactory;