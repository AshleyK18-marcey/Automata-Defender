import React, { useState, useEffect, useMemo } from 'react';

import styles from '../CSS/fonts.module.css'

import { DialogBoxProps } from './Definitions';

const DialogBox = ({ dialog, nextPage, width, bottom }: DialogBoxProps): JSX.Element => {

    const [currentText, setCurrentText] = useState(""); // The text being displayed
    const [dialogIndex, setDialogIndex] = useState(-1); // Tracks which dialog we're on
    const [typing, setTyping] = useState(false); // Tracks if the typing animation is in progress
    const typingSpeed = 25; // Speed of the typing effect (ms per character)

    
    const dialogTexts = useMemo(() => dialog,[]);

    useEffect(() => {
        if (typing) {
            const text = dialogTexts[dialogIndex];
            let i = -1;

            const typeCharacter = () => {
                setCurrentText((prev) => prev + text.charAt(i));
                i++;
                if (i < text.length) {
                    setTimeout(typeCharacter, typingSpeed);
                } else {
                    setTyping(false); // Typing complete
                }
            };

            typeCharacter();
        }
    }, [typing, dialogIndex, dialogTexts, typingSpeed]);

    const handleNextDialog = () => {
        if (!typing) {
            if (dialogIndex < dialogTexts.length - 1) {
                setCurrentText(""); // Clear the text for the new message
                setDialogIndex(dialogIndex + 1);
                setTyping(true); // Start typing the new message
            } else {
                console.log("End of dialogs");
                setDialogIndex(-2);
            }
        }
    };

    const buttonText = dialogIndex == -1 ? 'Begin' : 'Continue';

    return (
        <div className={`fixed ${bottom} ${width} bg-black-900 text-white p-4`}>
            <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4 silkScreen">
                <p className={styles.silkScreen}>{currentText}</p>
                <button
                    onClick={(dialogIndex == -2) ? nextPage : handleNextDialog}
                    className={`self-end bg-black-600 hover:bg-gray-700 text-white px-4 py-2 rounded ${
                        typing ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={typing} // Disable the button while typing
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default DialogBox;