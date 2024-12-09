'use client';
import React, { useState, useEffect, useMemo } from 'react';

import styles from '../CSS/fonts.module.css'
import { languageDefProps } from './Definitions';


const LanguageDefBox = ({ languageDefinition }: languageDefProps): JSX.Element => {

    return (
        <div className="fixed top-0 w-full left-1/2 transform -translate-x-1/2 bg-black-900 text-white p-4">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4">
                <p className={styles.syncopate} style={{fontSize:'40px'}}>{languageDefinition}</p>
            </div>
        </div>
    );
}

export default LanguageDefBox;