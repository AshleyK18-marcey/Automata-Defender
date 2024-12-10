import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { EdgeType, EdgeFactoryProps, GridDotProps } from './Definitions';
import { useMachineStore } from '../MachineStore';
import { isWithinThreshold } from '../utils';


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

    const downTriangle = {
        width: '0',
        height: '0',
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderTop: '15px solid #fff', // Solid border at the top
        marginTop: "3px", // Optional spacing
    };
    

    const upTriangle = {
        width: '0',
        height: '0',
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderBottom: '15px solid #fff', // Solid border at the bottom
        marginBottom: "3px", // Optional spacing
    };
    

    const [edgeType, setEdgeType] = useState<EdgeType>(EdgeType.straight);
    const [otherEdgeLabel, setOtherEdgeLabel] = useState<string>('');
    const [render, setRender] = useState<JSX.Element>(<></>);
    const [width, setWidth] = useState<string>('');
    const [x, setX] = useState<string>('');
    const [y, setY] = useState<string>('');
    const [rotate, setRotate] = useState<string>('');


    useEffect(() => {
        console.log('in edge factory');
        const source = sourceGrid?.state?.label;
        console.log('source', source);
        const target = targetGrid?.state?.label;
        console.log('target', target);

        if (source === target) {
            console.log('s = t');
            setEdgeType(EdgeType.loop);
        }
        else if (targetGrid?.edge) {
            console.log('multi logic');
            // Check for a reverse edge
            const reverseEdge = targetGrid?.edge?.find(
                (e) =>
                    e.sourceGrid?.state?.label === target &&
                    e.targetGrid?.state?.label === source
            );

            console.log('Reverse Edge:', reverseEdge);
            if (reverseEdge) {
                removeEdge(reverseEdge);
                console.log('inside if', reverseEdge);
                setEdgeType(EdgeType.multiDirection);
                setOtherEdgeLabel(reverseEdge.edgeLabel);
            }
        } 

        calculateEdgeProperties(sourceGrid, targetGrid);
    }, []);

    useEffect(() => {
        renderEdge();
    }, [edgeType, x, y, width]);

    const calculateEdgeProperties = (source: GridDotProps | undefined, target: GridDotProps | undefined) => {
        if (source && target) {
            if (source === target) {
                setX((source.x).toString());
                setY((source.y - 110).toString());
            } else {
                // Destructure coordinates
                const { x: x1, y: y1 } = source;
                const { x: x2, y: y2 } = target;
                console.log(x1, 'HEY');

                console.log('Calculating properties for edge:', { x1, y1, x2, y2 });

                console.log(isWithinThreshold(x1, x2, 126));
                console.log(isWithinThreshold(y1, y2, 126));

                if ((isWithinThreshold(x1, x2, 126) && isWithinThreshold(y1, y2, 126)) || (isWithinThreshold(x1, x2, 110) && isWithinThreshold(y1, y2, 126))) {
                    console.log('Diagonal edge');
                    setWidth('61')
                    setX((x1).toString());
                    setY((y1).toString());
                    setRotate('45');
                    

                } else if ((isWithinThreshold(x1, x2, 126) && y1 === y2) || (isWithinThreshold(x1, x2, 110) && y1 === y2) || (isWithinThreshold(y1, y2, 126) && x1 === x2)) {
                    if ((isWithinThreshold(x1, x2, 110) && y1 === y2)) {
                        setWidth('40');
                    } else {
                        setWidth('50');
                    }
                    console.log('Straight edge');

                    const minx = Math.min(x1,x2);
                    const miny = Math.min(y1,y2);
                    setX((minx).toString());
                    setY(((miny)).toString());
                }


            }


        }
    };

    const straightRightArrow = (
        <div style={{ display: 'block', width: 'fit-content', position: 'absolute', left: `${x}px`, top: `${y}px`, transform: `translate(50%, -50%)` }}>
            <p style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 5px',   // Optional: padding for text spacing
            }}>{edgeLabel}</p>
            <div style={{ display: 'flex', width: 'fit-content' }}>
                <hr style={{ width: `${width}px`, border: '2px solid white', marginTop: '12px' }} />
                <div style={rightTriangle}></div>
            </div>
        </div>


    );

    const straightLeftArrow = (
        <div style={{ display: 'block', width: 'fit-content', position: 'absolute', left: `${x}px`, top: `${y}px`, transform: 'translate(50%, -50%)' }}>
            <p style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 5px',   // Optional: padding for text spacing
            }}>{edgeLabel}</p>
            <div style={{ display: 'flex', width: 'fit-content' }}>
                <div style={leftTriangle}></div>
                <hr style={{ width: `${width}px`, border: '2px solid white', marginTop: '12px' }} />
            </div>
        </div>
    );

    const straightUpaArrow = (
        <div
            style={{
                display: 'block',
                width: 'fit-content',
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -100%)',
            }}
        >
            {/* Container for the triangle and line */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Triangle */}
                <div style={{ ...upTriangle, position: 'absolute', top: '-20px' }}></div>
                {/* Vertical line */}
                <hr
                    style={{
                        height: `${width}px`,
                        border: '2px solid white',
                        margin: 0, // Remove default margin for better alignment
                        zIndex: -1, // Ensure the triangle is visually above the line
                    }}
                />
            </div>
    
            {/* Text to the right of the line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <p
                    style={{
                        margin: 0,
                        padding: '0 5px', // Optional padding
                        color: 'white', // Ensure text color matches the design
                    }}
                >
                    {edgeLabel}
                </p>
            </div>
        </div>
    );

    const straightUpArrow = (
        <div
            style={{
                display: 'block',
                width: 'fit-content',
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -100%)',
            }}
        >
            {/* Container for the triangle, line, and text */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {/* Triangle */}
                <div style={{ ...upTriangle, position: 'absolute', top: '-20px', left: '50%', transform: 'translate(-50%, 0)' }}></div>
    
                {/* Vertical line */}
                <hr
                    style={{
                        height: `${width}px`,
                        border: '2px solid white',
                        margin: 0, // Remove default margin for better alignment
                    }}
                />
    
                {/* Text to the right of the line */}
                <p
                    style={{
                        margin: 0,
                        padding: '0 5px', // Optional padding
                        color: 'white', // Ensure text color matches the design
                    }}
                >
                    {edgeLabel}
                </p>
            </div>
        </div>
    );
    
    
    

    const straightDownArrow = (
        <div style={{ display: 'block', width: 'fit-content', position: 'absolute', left: `${x}px`, top: `${y}px`, transform: 'translate(50%, -50%)' }}>
            <p style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 5px',   // Optional: padding for text spacing
            }}>{edgeLabel}</p>
            <div style={{ display: 'flex', width: 'fit-content' }}>
                <hr style={{ width: `${width}px`, border: '2px solid white', marginTop: '12px' }} />
                <div style={downTriangle}></div>
            </div>
        </div>


    );
    

    const loopArrow = (
        <div style={{ position: 'absolute', left: `${x}px`, top: `${y}px`, width: 'fit-content', transform: 'translate(-50%)' }}>
            <div style={{ display: 'block' }}>
                <p>{edgeLabel}</p>
                <Image src={'/Loop.png'} alt='character' width={80} height={50}></Image>
            </div>

        </div>
    );

    const multiArrow = (
        <div style={{ display: 'block', width: 'fit-content', position: 'absolute', left: `${x}px`, top: `${y}px`, transform: 'translate(50%, -50%)' }}>
            <p style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 5px',   // Optional: padding for text spacing
            }}>{otherEdgeLabel}</p>

            <div style={{ display: 'flex', width: 'fit-content' }}>
                <hr style={{ width: `${width}px`, border: '2px solid white', marginTop: '12px' }} />
                <div style={rightTriangle}></div>
            </div><div style={{ display: 'flex', width: 'fit-content' }}>
                <div style={leftTriangle}></div>
                <hr style={{ width: `${width}px`, border: '2px solid white', marginTop: '12px' }} />
            </div>
            <p style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 5px',   // Optional: padding for text spacing
            }}>{edgeLabel}</p>
        </div>
    )

    const renderEdge = () => {
        console.log(x, y, '@@@');
        switch (edgeType) {
            case EdgeType.loop:
                setRender(loopArrow);
                break;
            case EdgeType.straight:
                const sourceX = sourceGrid?.x ?? 0;
                const sourceY = sourceGrid?.y ?? 0;
                const targetX = targetGrid?.x ?? 0;
                const targetY = targetGrid?.y ?? 0;
                if (targetY < sourceY && sourceX === targetX){
                    setRender(straightUpArrow);
                } else if(targetY > sourceY && sourceX === targetX){
                    setRender(straightDownArrow);
                } else if (targetX > sourceX && sourceY === targetY) {
                    setRender(straightRightArrow);
                } else if (targetX < sourceX && sourceY === targetY) {
                    setRender(straightLeftArrow);
                }
                
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