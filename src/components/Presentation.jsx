import Question from "./Question";

const Presentation = () => {
  return (
    <div onWheel={(e) => {e.preventDefault()}}>
      <img src="src/assets/header.png"></img>
      <div id="1" class="relative h-[80vh]">
        <img class="absolute" src="src/assets/content.png"></img>
        <div class='absolute w-full h-1/4 bottom-full -mb-[10vh] backdrop-blur-xs'></div>
        <div class='absolute w-full h-1/5 bottom-full -mb-[8vh] backdrop-blur-sm'></div>
        <div class='absolute w-full h-1/6 bottom-full -mb-[6vh] backdrop-blur-sm'>
          <div class='absolute left-3/12'>
            <Question></Question>
          </div>
        </div>
      </div>
      <div id="2" class="relative h-[80vh]">
        <img class="absolute" src="src/assets/section2.png"></img>
        <div class="absolute w-1/2 h-full top-0 left-0">
          <img class="absolute w-3/5 left-1/6 top-1/6" src="src/assets/nanolab.png"></img>
        </div>
        <div class="absolute mt-15 left-1/2 top-0 w-1/2 h-full text-center items-center">
          <h1 class="mt-4 text-4xl font-extrabold text-gray-300">
            Nano Labs
          </h1>
          <p class="text-white">||||||||||||||||||||||||||||||||||||||||||||||||||</p>
          <div class="absolute mt-4 left-1/12 w-10/12 h-3/4 justify-center flex">
            <p class="text-gray-300 text-lg w-9/12 text-center">
            We have proposed several options for DNA sequencing, which encounter some obstacles, be it high cost or inefficiency of some stages.
             Therefore, we have developed online laboratories. Each such laboratory is a cube with a volume of a decimeter.
              Due to such dimensions, we can allocate one room, which will allow us to attract 50,000 people. We plan to involve students
               in research in all, who have shown the best results in chemistry and who do not have access to real equipment.</p>
          </div>
        </div>
        <div class='absolute w-full h-1/4 bottom-full -mb-[10vh] backdrop-blur-xs'></div>
        <div class='absolute w-full h-1/5 bottom-full -mb-[8vh] backdrop-blur-sm'></div>
        <div class='absolute w-full h-1/6 bottom-full -mb-[6vh] backdrop-blur-sm'>
        <div class='absolute left-1/12'>
            <Question></Question>
          </div>
        </div>
      </div>
      <div id="3" class="-mt-2 relative h-[80vh]">
        <img class="absolute" src="src/assets/section4.png"></img>
        <div class="absolute w-1/2 h-full top-0 left-1/2">
          <img class="absolute w-3/5 left-1/6 top-1/6" src="src/assets/earth.png"></img>
        </div>
        <div class="absolute mt-15 left-0 top-0 w-1/2 h-full text-center items-center">
          <h1 class="mt-4 text-4xl font-extrabold text-gray-300">
            Distributed Computing
          </h1>
          <p class="text-white">||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</p>
          <div class="absolute mt-4 left-1/12 w-10/12 h-3/4 flex justify-center">
            <p class="text-gray-300 w-10/12 text-lg text-center">
              Since our chemical research contains many assumptions, we focus on computing power for analyzing DNA sequences. 
              But where to get such power? Of course, by turning the entire planet into a computer.
              This campaign is aimed at people to provide some of their computer resources through a program. In return, 
               they could receive certain benefits from us or from the state.
            </p>
          </div>
        </div>
        <div class='absolute w-full h-1/4 bottom-full -mb-[10vh] backdrop-blur-xs'></div>
        <div class='absolute w-full h-1/5 bottom-full -mb-[8vh] backdrop-blur-sm'></div>
        <div class='absolute w-full h-1/6 bottom-full -mb-[6vh] backdrop-blur-sm'>
          <div class='absolute left-7/12'>
            <Question></Question>
          </div>
        </div>
      </div>
      <div id="4" class="-mt-2 relative h-[80vh]">
        <img class="absolute" src="src/assets/section3.png"></img>
        <div class="absolute mt-15 left-1/2 top-0 w-1/2 h-full text-center items-center">
          <h1 class="mt-4 text-4xl font-extrabold text-gray-300">
            Blockchain
          </h1>
          <p class="text-white">||||||||||||||||||||||||||||||||||||||||||||||||||||||||</p>
          <div class="absolute mt-4 left-1/12 w-10/12 h-3/4 flex justify-center">
            <p class="text-gray-300 w-10/12 text-lg text-center">
            Our system had to be both transparent and confidential. That is why our system is a blockchain.
             Each transaction, each stage of product delivery to the end consumer is added to the chain and supported by all network participants.
              Decentralization makes the system independent of states, but does not ignore it. 
              The system of roles, hierarchy and visibility is implemented through smart contracts or zero-knowledge proof, 
              which allows adding such an actor as the state.</p>
          </div>
        </div>
        <div class="absolute w-1/2 h-full top-0 left-0">
          <img class="absolute w-3/5 left-1/6 top-1/7" src="src/assets/fishirium.png"></img>
        </div>
        <div class='absolute w-full h-1/4 bottom-full -mb-[10vh] backdrop-blur-xs'></div>
        <div class='absolute w-full h-1/5 bottom-full -mb-[8vh] backdrop-blur-sm'></div>
        <div class='absolute w-full h-1/6 bottom-full -mb-[6vh] backdrop-blur-sm'>
          <div class='absolute left-1/12'>
            <Question></Question>
          </div>
        </div>
      </div>
      <div id="5" class="-mt-2 relative h-[80vh]">
        <img class="absolute" src="src/assets/section5.png"></img>
        <div class="absolute mt-15 left-0 top-0 w-1/2 h-full text-center items-center">
          <h1 class="mt-4 text-4xl font-extrabold text-gray-300">
            Eco System
          </h1>
          <p class="text-white">||||||||||||||||||||||||||||||||||||||||||||||||||||||||</p>
          <div class="absolute mt-4 left-1/12 w-10/12 h-3/4 flex justify-center">
            <p class="text-gray-300 w-9/12 text-center text-lg">
            We have worked out access for each participant in the supply chain using the eco system. 
            The "Fish List" database is collected and updated, including everything necessary for fish identification.
             The end user can determine the type of fish and the place of hatching. Our system works 
             on smartphones and on special equipment that can work in different environments with the ability to synchronize. 
             Support for GPS and other add-ons is included.</p>
          </div>
        </div>
        <div class='absolute w-full h-1/4 bottom-full -mb-[10vh] backdrop-blur-xs'></div>
        <div class='absolute w-full h-1/5 bottom-full -mb-[8vh] backdrop-blur-sm'></div>
        <div class='absolute w-full h-1/6 bottom-full -mb-[6vh] backdrop-blur-sm'>
          <div class='absolute left-5/12'>
            <Question></Question>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation;