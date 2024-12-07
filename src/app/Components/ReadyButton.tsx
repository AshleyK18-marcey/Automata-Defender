import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import styles from '../CSS/fonts.module.css'
import DialogBox from './DialogBox';

type readyButtonProps = {
    nextPage?: () => void;
};


const ReadyButton = ({ nextPage }: readyButtonProps): JSX.Element => {

    return (
        <button onClick={nextPage} className="fixed top-[75%] right-[7.3%] bg-black border border-white hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" style={{width: '200px', height: '200px'}}>
            Ready!
        </button>


    );
}

export default ReadyButton;