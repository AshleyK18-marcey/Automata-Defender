'use client';
import React, { useState, useEffect, useMemo } from 'react';
 // Required for client-side hooks in Next.js App Router

//import { useRouter } from 'next/navigation';
//import styles from '../CSS/MovingNumbers.module.css';
//import { generateNumbers } from '../utils';

const DialogBox = (): JSX.Element => {
    //const router = useRouter();

    const [currentText, setCurrentText] = useState(""); // The text being displayed
    const [dialogIndex, setDialogIndex] = useState(-1); // Tracks which dialog we're on
    const [typing, setTyping] = useState(false); // Tracks if the typing animation is in progress
    const typingSpeed = 50; // Speed of the typing effect (ms per character)

    const dialogTexts = useMemo(() => ["Agent! You've made it just in time. The Shadow Snake has released his army and we're under attack!",
        "The Shadow Snake is overloading our communication center, flooding it with fake messages. We can't get in contact with our agents on the ground. We need your help!",
        "Here's the situation: Our agents send messages using a specific code - structured patterns we can rely on. But Shadow Snake's forces are jamming us with chaos - signals that break every rule in the book!",
        "If we don't filter this noise, our mission will fail, and the network will collapse. You've been trained for this. It's time to put your skills to the test!",
        "You'll need to create an automata machine capable of identifying valid messages created using our code. Ill walk you through your set up.",
        "Every second counts. The fate of our mission is in your hands! Are you ready, Agent?"
    ], []);

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
            }
        }
    };

    const buttonText = dialogIndex == -1 ? 'Begin' : 'Continue';

    return (
        <div className="fixed bottom-0 w-full bg-black-900 text-white p-4">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 bg-black border border-white text-white p-4">
                <p className="text-lg">{currentText}</p>
                <button
                    onClick={handleNextDialog}
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