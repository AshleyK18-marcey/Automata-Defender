'use client';
import { useRouter } from 'next/navigation';
import DialogBox from "../components/DialogBox";
import Image from "next/image";

export default function AgentIntroPage() {
  const router = useRouter();
  const navigateToTutorial = () => {
    router.push('/TutorialPage')
  }

  const dialogTexts: string[] =  ["Agent! You've made it just in time. The Shadow Snake has released his army and we're under attack!",
        "The Shadow Snake is overloading our communication center, flooding it with fake messages. We can't get in contact with our agents on the ground. We need your help!",
        "Here's the situation: Our agents send messages using a specific code - structured patterns we can rely on. But Shadow Snake's forces are jamming us with chaos - signals that break every rule in the book!",
        "If we don't filter this noise, our mission will fail, and the network will collapse. You've been trained for this. It's time to put your skills to the test!",
        "You'll need to create an automata machine capable of identifying valid messages created using our code. Ill walk you through your set up.",
        "Every second counts. The fate of our mission is in your hands! Are you ready, Agent?"
    ];
  return (
    <>
      <main className="min-h-screen bg-[url('/agent-background.jpg')] bg-cover bg-center bg-no-repeat">
        <Image className="mx-auto" src="/Agent_Whiskers.png" alt="agent_whiskers" width={600} height={600}></Image>
      </main>
      <div className="min-h-screen bg-grey-100">
        <DialogBox dialog={dialogTexts} nextPage={navigateToTutorial} width='w-full' bottom='bottom-0' />
      </div>
    </>
  );
}
