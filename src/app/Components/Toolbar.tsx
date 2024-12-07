import React, { useState, useEffect, useMemo } from 'react';
import { useDrag } from "react-dnd";
import Image from 'next/image';

import styles from '../CSS/fonts.module.css'
import DialogBox from './DialogBox';

type toolBarProps = {


};

const Toolbar = ({ }: toolBarProps): JSX.Element => {

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4" style={{width:'900px', height:'170px'}}>
        </div>
      </div>      

    );
}

export default Toolbar;