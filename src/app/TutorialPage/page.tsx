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

export default function Tutorial() {

    const router = useRouter();
    const navigateToTutorial = () => {
        router.push('/TutorialPage')
    }

    const language = generateLanguage('easy');

    const dialogTexts: string[] = ["You can see our friendly agent code at the top of your screen. This describes what qualities of a message you should accept on.",
        "In the middle of your screen is where you will build your machine. The heart of the communication center is on the right. This is where all accepted messages go.",
        "If a corrupted message gets through your machine it will destroy the communication center and you'll have to start over!",
        "At the bottom is your tool box where you can drag and drop states into the middle to build your machine.",
        "Then you can click a state and drag to the state you would like to connect it to. This will create an edge that you must label correctly according to the code above.",
        "Once you are finished creating you machine, click the button on the bottom right that says Ready!"
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
