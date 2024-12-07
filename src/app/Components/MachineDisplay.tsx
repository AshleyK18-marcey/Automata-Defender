import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import styles from '../CSS/fonts.module.css'
import DialogBox from './DialogBox';

type machineDisplayProps = {


};

const MachineDisplay = ({ }: machineDisplayProps): JSX.Element => {

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4" style={{width:'900px', height:'500px'}}>
            </div>
        </div>

    );
}

export default MachineDisplay;