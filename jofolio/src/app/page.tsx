'use client'
import Image from "next/image";

import LandingSkillCard from "./components/LandingSkillCard";
import LandingProjectCard from "./components/LandingProjectCard";
import LandingDesignShowcaseCard from "./components/LandingDesignShowcaseCard";

export default function Home() {
	return (
		<main className="py-1 md:py-6 lg:py-12">

			<Hero />
			<ProjectShowcase />
			<DesignShowcase />
			<SkillList />

		</main>
	);
}

function Hero() {
	return (
		
		<div className="bg-background rounded-b-[72px] flex flex-col items-center">
			
			<div className="bg-red-500 h-[250px] w-[250px] ">Image</div>
			
			<h1 className="w-full text-center pb-4 text-2xl md:pb-8 lg:text-6xl mb-8 md:mb-12 lg:mb-20 xl:mb-28 mt-4 font-bold uppercase">
				Building digital products, brands and experience.
			</h1>

			<div className="bg-red-500 h-[50px] w-1/4 ">BUTTON</div>
		</div>
	);
}

function ProjectShowcase() {
  
	return (
	  <div className="flex flex-col items-center px-2 lg:px-20 mb-8 md:mb-12 lg:mb-20 xl:mb-28">
		  
		  <h2 className="pb-4 font-bold uppercase text-xl lg:text-4xl md:pb-8 lg:pb-12 xl:pb-20">
			  <span className="">Projects</span>
		  </h2>
	  
		  <div className="flex flex-col lg:flex-row w-full mx-auto space-y-4 lg:space-y-0 lg:space-x-8">
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
	
			<h2 className="pb-4 font-bold uppercase text-nowrap text-xl lg:text-4xl md:pb-8 lg:pb-12 xl:pb-20">Explore My Offerings</h2>
	
			<div className="flex flex-col lg:flex-row w-full">
			
				<LandingSkillCard skillNumber={0}/>
				<div className="lg:w-[1px] lg:border-r-1 lg:border-primary-50 lg:my-0"></div>
				<div className="md:hidden h-[1px] border-t-1 border-primary-50 my-2"></div>
				<LandingSkillCard skillNumber={1}/>
				<div className="lg:w-[1px] lg:border-r-1 lg:border-primary-50 lg:my-0"></div>
				<div className="md:hidden h-[1px] border-t-1 border-primary-50 my-2"></div>
				<LandingSkillCard skillNumber={2}/>
		
			</div>

			<div className="w-full h-[1px] border-t-1 border-primary-50 my-2 lg:my-0"></div>

			<div className="flex flex-col lg:flex-row w-full">
			
				<LandingSkillCard skillNumber={3}/>
				<div className="lg:w-[1px] lg:border-r-1 lg:border-primary-50 lg:my-0"></div>
				<div className="md:hidden h-[1px] border-t-1 border-primary-50 my-2"></div>
				<LandingSkillCard skillNumber={4}/>
				<div className="lg:w-[1px] lg:border-r-1 lg:border-primary-50 lg:my-0"></div>
				<div className="md:hidden h-[1px] border-t-1 border-primary-50 my-2"></div>
				<LandingSkillCard skillNumber={5}/>
		
			</div>

		</div>
	);
}	

function DesignShowcase() {

	return (

		<div className="flex flex-col items-center px-2 lg:px-20 mb-8 lg:mb-28">
		
			<h2 className="pb-4 font-bold uppercase text-nowrap text-xl lg:text-4xl md:pb-8 lg:pb-12 xl:pb-20">Why Hire Jo?</h2>

			<LandingDesignShowcaseCard>
				<div>
				<h2 className="pb-4 font-bold uppercase text-nowrap text-lg lg:text-2xl lg:pb-20">BECAUSE <br/> BLAH BLAH BLAH <br/><br/> DUH.</h2>
				</div>
			</LandingDesignShowcaseCard>

			<LandingDesignShowcaseCard>
				<div>
				<h2 className="pb-4 font-bold uppercase text-nowrap text-lg lg:text-2xl lg:pb-20">BECAUSE <br/> BLAH BLAH BLAH <br/><br/> DUH.</h2>
				</div>
			</LandingDesignShowcaseCard>

			<LandingDesignShowcaseCard>
				<div>
				<h2 className="pb-4 font-bold uppercase text-nowrap text-lg lg:text-2xl lg:pb-20">BECAUSE <br/> BLAH BLAH BLAH <br/><br/> DUH.</h2>
				</div>
			</LandingDesignShowcaseCard>

		</div>
	);
}


