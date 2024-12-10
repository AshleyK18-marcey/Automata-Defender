'use client';
import { useRouter } from 'next/navigation';
import LanguageDefBox from '../Components/LanguageDefBox';
import CharacterArea from '../Components/CharacterArea';
import { generateLanguage } from '../utils'
import CommunicationCenter from '../Components/CommunicationCenter';
import ReadyButton from '../Components/ReadyButton';
import MachineDisplay from '../Components/MachineDisplay';
import Toolbar from '../Components/Draggable';
import { DndContext } from '@dnd-kit/core';
import { useMachineStore } from '../MachineStore';
import { useEffect } from 'react';

export default function Tutorial() {

    const router = useRouter();
    const navigateToTutorial = () => {
        router.push('/TutorialPage')
    }

    const language = generateLanguage('easy');

    const setAlphabet = useMachineStore((state) => state.setAlphabet);

    useEffect(() => {
        // TO DO: extract this from the defined language 
        setAlphabet(['0','1', '0, 1']);
    }, []);

    const dialogTexts: string[] = [
        "At the top of your screen, you'll find the agent code. This outlines the qualities of messages your machine should accept.",
        "The center of the screen is where you'll build your machine. On the right is the communication center, where accepted messages are processed.",
        "Beware! If a corrupted message gets through your machine, it will destroy the communication center, and you'll need to start over.",
        "Your toolbox is at the bottom. Drag and drop states into the center to start building your machine.",
        "To connect states, use the Create Edge button. Select the source state, the target state, and the input that triggers the transition.",
        "If you make a mistake, use the Reset button in the toolbox to start over.",
        "When your machine is ready, click the 'Ready' button at the bottom right to submit your creation."
    ];
    
    return (
        <DndContext>
            <main className="min-h-screen bg-[url('/tut-background.avif')] bg-cover bg-center bg-no-repeat">
                <LanguageDefBox languageDefinition={language} />
                <MachineDisplay />
                <CharacterArea character='/Agent_Whiskers.png' dialog={dialogTexts} nextPage={navigateToTutorial} />
                <CommunicationCenter />
                <ReadyButton />
            </main>
        </DndContext>






    );
}
