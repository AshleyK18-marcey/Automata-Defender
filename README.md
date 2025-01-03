Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Introduction and Motivation:
Automata theory forms the foundation for understanding computational systems and their capabilities. Among the most fundamental concepts in this area are deterministic finite automata (DFA) and nondeterministic finite automata (NFA). While both models are mathematically equivalent in terms of the languages they recognize, their structures and operational paradigms differ significantly, which can be confusing for students who are new to the subject. Traditional teaching methods, which often rely on static diagrams and dense mathematical definitions, may fail to engage students. 
To address this gap, I developed Automata Defender, an educational game designed to introduce students to automata theory in an interactive and engaging format. Drawing on research that highlights the importance of narrative-driven gameplay for sustaining attention and promoting learning, I created a storyline where players act as government agents tasked with protecting a critical communication system by building an automata machine. 
The game integrates the narrative with pattern recognition challenges, requiring players to identify valid string patterns and design automata to solve increasingly complex problems. This approach aligns with gamification principles, providing guided challenges, instant feedback, and a sense of progression. By merging story-driven engagement with hands-on visualization and manipulation of automata, Automata Defender transforms the learning experience. It demonstrates the potential for educational tools to make abstract computational concepts more accessible, relatable, and enjoyable for students without prior knowledge to automata theory. 

 
### Related Work:
As the new generation continues to grow alongside technology, it’s important that education evolves to meet their need for engagement and stimulation. The trend of gamifying educational topics continues to grow and that includes automata theory.
For instance, Jordaan et al (2024) proposed AutomaTutor: An Educational Mobile App for Teaching Automata Theory, that particularly focuses on guiding beginners through interactive exercises and providing immediate feedback. While this tool provides valuable learning support, it does not fully capitalize on the game-like aspects that can sustain student engagement and make the learning process more enjoyable. 
A different approach that utilizes gamification more thoroughly is AutomataMind, proposed by Vieria and Sarinho (2019). This game integrates logical problem-solving with automata theory concepts, inspired by the classic game Mastermind. Players attempt to uncover a secret code within a limited number of guesses, promoting critical thinking in a fun and competitive setting.

Building on this work, Automata Defender aims to develop a modern game that combines the principles of gamification with a focus on teaching DFA and NFA machines. By drawing inspiration from the interactive and visual elements from tools like AutomaTutor and AutomataMind, this game will provide a stimulating and educational experience.
 
### Concepts:
Automata Defender is grounded in automata theory concepts such as deterministic finite automata (DFA) and nondeterministic finite automata (NFA) to teach players about their equivalence, state transition systems, and language recognition. By providing a hands-on and visual approach, Automata Defender aims to make these abstract concepts more approachable to new learners. 
Beyond automata theory, the methods used in this project are informed by principles of gamification and educational psychology. Gamification strategies such as real-time feedback, visual aids, and incremental difficulty are essential to the design. These strategies have been shown to increase student motivation and learning outcomes by integrating game design elements into educational environments (Amisa, 2022). Real-time feedback reinforces correct decisions and highlights errors, while visual aid offers an intuitive understanding of automata structures and state transitions. Incorporating these elements ensures that learning remains interactive and engaging.
Another key element to a successful educational project is the use of narrative-driven engagement. A strategy supported by research indicating that storytelling in games can capture attention, sustain motivation, and deepen learning by creating purpose and immersion (Rowe et al., 2011). The narrative of Automata Defender provides context to gameplay, making the abstract task of building DFA and NFA machines more relatable and meaningful. The narrative enhances immersion and fosters a sense of urgency and responsibility, motivating players to engage actively with the challenges. 
Pattern recognition is also central to the project, both as a gameplay mechanic and an approach to teaching. Players must identify patterns in input strings and design automata that can accurately accept or reject these patterns based on predefined rules. This process mirrors real-world problem-solving scenarios and reinforced key computation thinking skills. Leveraging concepts like Gestalt principles, which suggest that humans naturally seek patterns to make sense of complex systems (Interaction Design Foundation, n.d), the game encourages players to develop pattern recognition as a core skill. By integrating narrative engagement and pattern recognition, the project not only teaches theoretical concepts but also cultivates critical analytical skills in an interactive and enjoyable way. 


### Completed Work:
Developing Automata Defender was an ambitious endeavor that combined gamification, narrative-driven engagement, and pattern recognition to teach users how to create DFA and NFA machines. Although the process was challenging and remains incomplete, the work done has laid a solid foundation for further development and provides valuable lessons for educational game design. Here's what I accomplished, what I learned, and how this experience can inform others.
To create a compelling and effective educational game, I began with extensive research. This involved revisiting my coursework on DFA and NFA machines to ensure a solid understanding of the concepts I intended to teach. I then studied successful games like Candy Crush and Angry Birds to uncover the cognitive and engagement principles that make these games so captivating. For instance, the article "Why Candy Crush Saga Is So Successful and Popular (But Will Never Be an Angry Birds)" provided insights into user engagement, which I adapted to suit an educational context. I also drew inspiration from puzzle games like Wordle, tower defense mechanics, and even nostalgic games like the Club Penguin virus defense mini-game to design an engaging narrative.
With these ideas in mind, I created a prototype and storyboarded the game’s narrative. In Automata Defender, players take on the role of a government agent tasked with building automata machines to filter valid and invalid messages. A villainous hacker called the Shadow Snake sends malicious scripts, while friendly agents communicate using predefined code (regular language). Players build and test their machines to defend the communication system, progressing through increasingly complex challenges. The prototype included an introductory story with intriguing characters, a tutorial, and a basic implementation of gameplay mechanics, such as the drag and drop functionality to build the machine and visually validating state transitions by highlighting the current state for the current string character during the machine's operation.
For development, I used React with TypeScript within the Next.js framework, which allowed me to handle heavy user interaction efficiently. While I had prior experience with these technologies, I faced challenges implementing complex interactivity and animations, particularly for the validation mechanics. Despite this, I successfully completed the tutorial phase, including an engaging narrative and the core gameplay loop where the user can build the machine. 

What I Learned and What Others Should Take Away
One of the biggest takeaways from this project is that crafting a meaningful educational game requires a balance between technical execution, engaging design, and pedagogical goals. My research emphasized the importance of intuitive user interfaces, feedback mechanisms, and clear instructions in maintaining engagement while teaching new concepts. For instance, using visual indicators for state transitions helped players understand the flow of the automata machine, making abstract concepts tangible.
Another key lesson is the value of iterative development. Starting with a prototype and refining it through testing and feedback would have improved the final product, but limited time prevented me from conducting extensive user testing. This highlights the need for realistic planning and resource allocation in future projects.

Gaps and Future Directions
This project revealed gaps in my knowledge, particularly in creating advanced animations and managing state complexity in React. To address these, I plan to deepen my understanding of React's animation libraries and learn better strategies for handling state in complex applications. Additionally, the game remains incomplete, with only the tutorial phase where players can build the machine developed. Finishing the visual validation of the machine, expanding to more levels, incorporating NFAs, and conducting user testing to refine the educational experience are key next steps.
Ultimately, Automata Defender is a draft with great potential. By sharing my approach, challenges, and solutions, I hope others can learn from my experience to avoid similar pitfalls and build upon these ideas to create engaging and impactful educational games.

 
### Future Work:
Despite the progress made on Automata Defender, there are several gaps and opportunities for future development. The most significant area for improvement is the inclusion of more automata models, such as NFAs, PDAs, and DPDAs, to expand the game's educational scope.
Currently, the game focuses on the hands-on construction of DFA machines, but it lacks sufficient guidance and teaching about the foundational concepts. For example, players are not explicitly taught the critical properties of a DFA, such as the requirement for every input character to have an associated edge. This gap in instructional content limits the effectiveness of the game as an educational tool.
Future iterations should prioritize completing the planned prototype by completing the visual validation of the machine and introducing additional levels and more complex language definitions. Beyond the basics, adding features that enhance engagement and gamification, such as in-game hints for players who are stuck, could significantly improve the learning experience. Similarly, refining gameplay mechanics, such as enabling players to click and drag connections between states to create an edge, would create a smoother, more intuitive interaction and boost the game's visual appeal.
The most impactful feature of the prototype, the visual walkthrough of state transitions during input string evaluation, should be completed and further refined. This feature is instrumental in helping students understand how their automata function, making abstract concepts more accessible. Overall, Automata Defender has a solid foundation, and with additional development and user-focused enhancements, it could become an invaluable tool for teaching automata theory.

 
### Bibliography:
CHFP, C. M. (2016, May 13). Why candy crush saga is so successful and popular but will never be an angry birds: A cognitive tear down of the user experience (UX). Mauro Usability Science. https://www.maurousabilityscience.com/blog/why-candy-crush-saga-is-so-successful-and-popular-but-will-never-be-an-angry-birds-a-cognitive-tear-down-of-the-user-experience

Interaction Design Foundation. (2024, December 7). What are the gestalt principles? - updated 2024. The Interaction Design Foundation. https://www.interaction-design.org/literature/topics/gestalt-principles

Integrating learning, problem solving, and engagement in ... (n.d.). https://intellimedia.ncsu.edu/wp-content/uploads/sites/42/rowe-ijaied-2011.pdf

Jordaan, S., Timm, N., Marshall, L. (2024). AutomaTutor: An Educational Mobile App for Teaching
Automata Theory. In: Barbosa, H., Zohar, Y. (eds) Formal Methods: Foundations and Applications.
SBMF 2023. Lecture Notes in Computer Science, vol 14414. Springer, Cham.
https://doi.org/10.1007/978-3-031-49342-3_8

McLean, C. (2024, January 31). 5 benefits of bringing gamification to your classroom. AMISA. https://www.amisa.us/post/5-benefits-of-bringing-gamification-to-your-classroom

Overview: @dnd-kit – documentation. kit. (n.d.). https://docs.dndkit.com/

Smithsonian Science Education Center. (2016, March 10). 5 benefits of Gamification.
https://ssec.si.edu/stemvisions-blog/5-benefits-gamification

Vieira, M., Sarinho, V. (2019). AutomataMind: A Serious Game Proposal for the Automata Theory
Learning. In: van der Spek, E., Göbel, S., Do, EL., Clua, E., Baalsrud Hauge, J. (eds) Entertainment
Computing and Serious Games. ICEC-JCSG 2019. Lecture Notes in Computer Science(), vol 11863.
Springer, Cham. https://doi.org/10.1007/978-3-030-34644-7_45

### LLMs Appendix
ChatGPT was used to enhance the writing of this paper. It was given original writing and asked to improve the clarity or conciseness of the original writing. Its suggestions were then considered and included manually for specific sentences. Entire responses were not copied and pasted. 
Example prompt:
“<Original paragraph> - How can I improve clarity in this paragraph?”

