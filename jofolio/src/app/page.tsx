'use client'
import Image from "next/image";

import LandingSkillCard from "./components/LandingSkillCard";
import LandingProjectCard from "./components/LandingProjectCard";
import LandingHistoryCard from "./components/LandingHistoryCard";

export default function Home() {
	return (
		<main className="py-1 md:py-6 lg:py-12">

			<Hero />

			<ProjectShowcase />

			<SkillList />

			<DesignShowcase />

		</main>
	);
}

function Hero() {
	return (
		<h1 className="w-full text-center pb-4 text-2xl md:text-4xl md:pb-8 lg:text-6xl mb-8 md:mb-12 lg:mb-20 xl:mb-28 mt-4 font-bold uppercase">
			Research, Design<br />and Resolve 
		</h1>
	);
}

function ProjectShowcase() {
  
	return (
	  <div className="flex flex-col items-center px-2 lg:px-20 mb-8 md:mb-12 lg:mb-20 xl:mb-28">
		  
		  <h2 className="pb-4 font-bold uppercase text-2xl md:text-4xl lg:text-4xl md:pb-8 lg:pb-12 xl:pb-20">
			  <span className="">Projects</span>
		  </h2>
	  
		  <div className="flex flex-row w-full mx-auto space-x-12">
			  <LandingProjectCard projectNumber={0} />
			  <LandingProjectCard projectNumber={1} />
			  <LandingProjectCard projectNumber={2} />
		  </div>  
	  </div>
  );
}

function SkillList() {
	return (
		<div className="flex flex-col items-center mb-8 mx-8 md:mx-20 md:mb-12 lg:mb-20 xl:mb-28">
	
			<h2 className="pb-4 font-bold uppercase text-nowrap text-2xl md:text-4xl lg:text-4xl md:pb-8 lg:pb-12 xl:pb-20">Explore My Offerings</h2>
	
			<div className="flex flex-row w-full">
			
				<LandingSkillCard skillNumber={0}/>
				<div className="w-[1px] border-r-1 border-primary-50"></div>
				<LandingSkillCard skillNumber={1}/>
				<div className="w-[1px] border-r-1 border-primary-50"></div>
				<LandingSkillCard skillNumber={2}/>
		
			</div>

			<div className="w-full h-[1px] border-t-1 border-primary-50"></div>

			<div className="flex flex-row w-full">
			
				<LandingSkillCard skillNumber={3}/>
				<div className="w-[1px] border-r-1 border-primary-50"></div>
				<LandingSkillCard skillNumber={4}/>
				<div className="w-[1px] border-r-1 border-primary-50"></div>
				<LandingSkillCard skillNumber={5}/>
		
			</div>

		</div>
	);
}	

function DesignShowcase() {

	return (

		<div className="flex flex-col items-center mb-8 mx-8 md:mx-20 md:mb-12 lg:mb-20 xl:mb-28">

			<h2 className="pb-4 font-bold uppercase text-nowrap text-2xl md:text-4xl lg:text-4xl md:pb-8 lg:pb-12 xl:pb-20">Why Hire Jo?</h2>

			<div className="flex flex-col w-full items-center *:w-5/6 *:h-[80vh] *:rounded-lg *:bg-background-50 *:p-6 *:mb-8">

				<div>
					<div className="w-full bg-white h-full rounded-lg p-12">

						<h2 className="pb-4 font-bold uppercase text-nowrap text-2xl md:text-4xl lg:text-4xl md:pb-8 lg:pb-12 xl:pb-20">BECAUSE <br/> BLAH BLAH BLAH <br/><br/> DUH.</h2>

					</div>
				</div>

				<div>
					<div className="w-full bg-white h-full rounded-lg p-12">

						<h2 className="pb-4 font-bold uppercase text-nowrap text-2xl md:text-4xl lg:text-4xl md:pb-8 lg:pb-12 xl:pb-20">BECAUSE <br/> BLAH BLAH BLAH <br/><br/> DUH.</h2>

					</div>
				</div>
			</div>

		</div>
	);
}


