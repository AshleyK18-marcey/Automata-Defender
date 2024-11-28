'use client'; // Required for client-side hooks in Next.js App Router

import { useRouter } from 'next/navigation';
//import Image from "next/image";
import MovingNumbers from "./components/MovingNumbers";
import styles from "./CSS/welcome.module.css"

export default function WelcomePage() {
  const router = useRouter();
  const navigateToAgentIntro = () => {
    router.push('/AgentIntroPage')
  }
  const navigateToReview = () => {
    router.push('/ReviewPage')
  }

  return (
    <div className="flec flec-col min-h-screen">
      <div className='relative'>
        <MovingNumbers />
      </div>
      <div>
        <main className="flex-grow flex flex-col justify-center items-center">
          <h1 className={styles.gameTitle} >Automata </h1>
          <h1 className={styles.gameTitle} >Defender </h1>

          <div className={styles.buttonsContainer}>
            <button onClick={navigateToAgentIntro} className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Start Game
            </button>
            <button onClick={navigateToReview} className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Review
            </button>
          </div>
        </main>
        <div className='relative'>
          <MovingNumbers />
        </div>
        <footer className="text-white text-center p-4">
          Made by Ashley Kastler
        </footer>
      </div>
    </div>
  );
}
