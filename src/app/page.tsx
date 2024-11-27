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

  return (
    <>
      <div>
        <MovingNumbers />
      </div>
      <div>
        <main>
          <h1 className={styles.gameTitle}>Automata Defender</h1>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button onClick={navigateToAgentIntro} className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
              Start Game
            </button>
          </div>
        </main>
        <div>
          <MovingNumbers />
        </div>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          Made by Ashley Kastler
        </footer>
      </div>
    </>
  );
}
