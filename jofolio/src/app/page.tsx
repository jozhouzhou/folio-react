import Image from "next/image";
import LandingSkillCard from "./components/LandingSkillCard";
import LandingProjectCard from "./components/LandingProjectCard";
import LandingHistoryCard from "./components/LandingHistoryCard";


export default function Home() {
  return (
    <main className="py-12">

      <Hero />
      
      <HeroMockups />

      <SkillList />

      <ProjectList />

      <WorkHistory />

    </main>
  );
}

export function Hero() {
  return (
    <div className="flex flex-col items-center mb-16 px-20">

      <h1 className="text-center text-5xl font-black uppercase pb-12">
        <span className="text-primary">I&apos;m Jo,</span> who spends time on researching, designing and resolving products.  
      </h1>

      <div className="flex flex-row w-full items-center justify-center space-x-12 font-semibold text-xl *:duration-200">
        <button className="rounded-full w-1/3 shadow-md py-2 uppercase border border-black hover:bg-gray-100 hover:text-primary">My Experience</button>
        <button className="rounded-full w-1/3 shadow-md py-2 uppercase text-white bg-primary hover:bg-primaryHover">Let&apos;s Chat</button>
      </div>

    </div>
  );
}

export function HeroMockups() {
  return (

    <div className="flex flex-row justify-center space-x-10 px-20 mb-36 *:w-1/5">

      <img className="object-fill"  src="/hero-mockup3.png" alt="" />
      <img className="object-fill"  src="/hero-mockup3.png" alt="" />
      <img className="object-fill"  src="/hero-mockup3.png" alt="" />
      <img className="object-fill"  src="/hero-mockup3.png" alt="" />
      
    </div>

  )
}

export function HeroMockupsOld() {
  return (
    <div className="flex flex-row h-auto space-x-10 px-20 mb-36 *:rounded-3xl *:overflow-hidden">

      <div className="w-1/3">
        <img className="object-fill"  src="/hero-mockup1.png" alt="" />
      </div>

      <div className="w-2/3 bg-gray-800">
        <img className="object-fill"  src="/hero-mockup2.png" alt="" />
      </div>
      
    </div>
  )
}

export function SkillList() {
  return (
    <div className="flex flex-col px-20 items-center mb-36">

      <h2 className="pb-20 text-5xl font-black uppercase">Explore <span className="text-primary">Jo&apos;s</span> Offerings to You</h2>

      <div className="grid grid-cols-3 content-evenly w-full gap-16">
        
        <LandingSkillCard skillNumber={0}/>
        <LandingSkillCard skillNumber={1}/>
        <LandingSkillCard skillNumber={2}/>
        <LandingSkillCard skillNumber={3}/>
        <LandingSkillCard skillNumber={4}/>
        <LandingSkillCard skillNumber={5}/>

      </div>

    </div>
  );
}

export function ProjectList() {
  return (
    <div className="flex flex-col px-20 items-center mb-36">

      <h2 className="pb-20 text-5xl font-black uppercase"><span className="text-primary">Jo&apos;s</span> Projects</h2>

      <div className="grid grid-cols-2 content-evenly w-full gap-16">
        
        <LandingProjectCard projectNumber={0}/>
        <LandingProjectCard projectNumber={1}/>

      </div>

    </div>
  );
}

export function WorkHistory() {
  return (
    <div className="flex flex-col px-20 items-center mb-36">

      <h2 className="pb-20 text-5xl font-black uppercase">My History</h2>

      <div className="space-y-6 *:w-full *:bg-opacity-5 *:border-l-4 *:rounded-r-2xl *:px-6">

        {/* Work History Section */}
        <div className="flex flex-col pt-4 border-primary bg-primary">
          
          <div className="">
            <h3 className="uppercase text-xl font-bold">Work Experience</h3>
          </div>

          <LandingHistoryCard workHistoryNumber={0} />
          <div className="border-b border-primary border-opacity-10"></div>
          <LandingHistoryCard workHistoryNumber={0} />
          <div className="border-b border-primary border-opacity-10"></div>
          <LandingHistoryCard workHistoryNumber={0} />

        </div>
        
        {/* Education Section */}
        <div className="flex flex-col py-4 border-secondary bg-secondary">
          
          <h3 className="uppercase text-xl font-bold pb-2">Education</h3>

          <h4 className="text-lg font-bold">Master of Communication and Media Studies, Monash University</h4>
          <p className="text-md text-gray-500 pb-4">2016 - 2017</p>

          <h4 className="text-lg font-bold">UX/UI & Frontend Development Bootcamp, Monash University</h4>
          <p className="text-md text-gray-500">2021 - 2022</p>

        </div>

        {/* Skills Section */}
        <div className="flex flex-col py-4 border-tertiary bg-tertiary">
            
          <h3 className="uppercase text-xl font-bold pb-2">Skills</h3>

          <div className="flex flex-row flex-wrap space-x-4 *:rounded-full *:bg-white *:px-6 *:py-2">
            <div>Figma Prototyping</div>
            <div>Project Coordination</div>
            <div>Design Critique</div>
            <div>Design Conceptualisation & Presentation</div>
            <div>Stakeholder Communication</div>
          </div>

        </div>

      </div>

    </div>
  );
}
