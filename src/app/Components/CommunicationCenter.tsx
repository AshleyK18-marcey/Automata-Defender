import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import styles from '../CSS/fonts.module.css'
import DialogBox from './DialogBox';



const CommunicationCenter = (): JSX.Element => {

    return (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-black-800 text-white p-4 flex flex-col items-center justify-center">
            <Image src="/communication-center.png" alt="commIcon" width={200} height={200} className="filter invert" />
        </div>

    );
}

export default CommunicationCenter;