import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import styles from '../CSS/fonts.module.css'
import DialogBox from './DialogBox';
import { characterAreaProps } from './Definitions';


const CharacterArea = ({ character, dialog, nextPage }: characterAreaProps): JSX.Element => {

    return (
        <div className="fixed top-0 left-0 h-full w-1/4 bg-black-800 text-white p-4 flex flex-col items-center justify-center">
            <div className="fixed top-0 w-full left-1/2 transform -translate-x-1/2">
                <Image src={character} alt='character' width={400} height={400}></Image>
            </div>
            <DialogBox dialog={dialog} nextPage={nextPage} width='w-1/4' bottom='bottom-0'></DialogBox>
            
        </div>
    );
}

export default CharacterArea;