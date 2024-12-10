import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import styles from '../CSS/fonts.module.css'
import DialogBox from './DialogBox';

type readyButtonProps = {
    nextPage?: () => void;
};


const ReadyButton = ({ nextPage }: readyButtonProps): JSX.Element => {

    return (
        <button onClick={nextPage} className="fixed top-[75%] right-[5%] bg-black border border-white hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" style={{width: '150px', height: '150px'}}>
            Ready!
        </button>


    );
}

export default ReadyButton;