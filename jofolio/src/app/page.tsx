'use client'
import Image from "next/image";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

import LandingSkillCard from "./components/LandingSkillCard";
import LandingProjectCard from "./components/LandingProjectCard";
import LandingHistoryCard from "./components/LandingHistoryCard";

export default function Home() {
	return (
		<main className="py-1 md:py-6 lg:py-12">

			<Hero />

			<SkillList />

			<ProjectShowcase />

			<WorkHistory />

		</main>
	);
}

function Hero() {
	return (
		<div className="flex flex-col lg:flex-row justify-center items-center mb-8 md:mb-12 lg:space-x-6 lg:mb-20 xl:space-x-12 xl:mb-28 xl:mx-20">

			<h1 className="w-full lg:w-7/12 xl:w-5/12 text-center pb-4 text-2xl md:text-4xl md:pb-8 lg:text-5xl font-black uppercase">
				Research, Design<br />and Resolve 
			</h1>

			<div className="flex flex-row w-full lg:w-7/12 xl:w-7/12 h-24 md:h-48 lg:h-72 space-x-4 justify-center lg:justify-start md:space-x-8 overflow-hidden">
				<img className="object-fill"  src="/hero-mockup3.png" alt="" />
				<img className="object-fill"  src="/hero-mockup3.png" alt="" />
				<img className="object-fill"  src="/hero-mockup3.png" alt="" />
				<img className="object-fill"  src="/hero-mockup3.png" alt="" />
			</div>
			
		</div>
	);
}

function SkillList() {
	return (
		<div className="flex flex-col items-center mb-8 mx-8 md:mx-20 md:mb-12 lg:mb-20 xl:mb-28">
	
			<h2 className="pb-4 font-black uppercase text-nowrap text-2xl md:text-4xl lg:text-5xl md:pb-8 lg:pb-12 xl:pb-20">Explore <span className="text-highlight">Jo&apos;s</span> Offerings</h2>
	
			<div className="grid grid-cols-1 lg:grid-cols-3 content-evenly w-full gap-2 md:gap-4 lg:gap-y-8 lg:gap-x-6 xl:gap-16">
			
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

function ProjectShowcase() {
	
	let tabs = [
		{
			id: "atoms",
			label: "Atoms",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			id: "molecules",
			label: "Molecules",
			content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			id: "organisms",
			label: "Organisms",
			content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			id: "wireframing",
			label: "Wireframing",
			content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			id: "prototyping",
			label: "Prototyping",
			content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			id: "native-app",
			label: "Native App",
			content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			id: "website",
			label: "Website",
			content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			id: "app-redesign",
			label: "App Redesign",
			content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	];
  
  	return (
		<div className="flex flex-col items-center px-2 lg:px-20 mb-8 md:mb-12 lg:mb-20 xl:mb-28">
			
			<h2 className="pb-4 font-black uppercase text-2xl md:text-4xl lg:text-5xl md:pb-8 lg:pb-12 xl:pb-20">
				<span className="text-highlight">Jo&apos;s</span> Projects
			</h2>
		
			<div className="flex flex-col w-full mx-auto">
				<Tabs 
					items={tabs} 
					color="primary" 
					size="lg" 
					radius="full" 
					fullWidth={true}
					classNames={{
						tabList: "bg-opacity-0",
						tab: "hover:bg-primary hover:bg-opacity-10",
						tabContent: "font-bold text-primaryText md:px-1 text-sm md:text-lg lg:text-xl group-data-[selected=true]:text-primaryText",
						cursor: "bg-secondaryYellow",
					}}
				>
					{(item) => (
					<Tab key={item.id} title={item.label}>
						<Card className="h-[28rem] md:h-[35rem] shadow-none border-2 border-primary rounded-3xl py-2 px-2 md:py-6 md:px-4">
							<CardBody className="text-center">
								<h1 className="text-xl md:text-4xl lg:text-5xl font-black">Great Things To Come!!!</h1><br />
								<span className="text-sm md:text-lg">{item.content}</span>
							</CardBody>
						</Card>  
					</Tab>
					)}
				</Tabs>
			</div>  
		</div>
	);
}

function WorkHistory() {
  return (
    <div className="flex flex-col px-4 lg:px-20 items-center mb-6 md:mb-12 lg:mb-20 xl:mb-28">

		<h2 className="pb-4 font-black uppercase text-2xl md:text-4xl lg:text-5xl md:pb-8 lg:pb-12 xl:pb-20">
			<span className="text-highlight">Jo&apos;s</span> History
		</h2>

		<div className="space-y-6 *:bg-opacity-5 *:border-l-4 *:rounded-r-2xl *:px-6">

			{/* Work History Section */}
			<div className="flex flex-col pt-4 border-primary bg-primary">
			
				<div className="">
					<h3 className="uppercase -mb-3 lg:mb-0 text-md md:text-xl font-bold">Work Experience</h3>
				</div>

				<LandingHistoryCard workHistoryNumber={0} />
				<div className="border-b border-primary border-opacity-10"></div>
				<LandingHistoryCard workHistoryNumber={0} />
				<div className="border-b border-primary border-opacity-10"></div>
				<LandingHistoryCard workHistoryNumber={0} />

			</div>
			
			{/* Education Section */}
			<div className="flex flex-col py-4 border-primary bg-primary">
			
				<h3 className="uppercase mb-2 lg:mb-0 text-md md:text-xl font-bold">Education</h3>

				<h4 className="text-sm md:text-lg font-bold">Master of Communication and Media Studies, Monash University</h4>
				<p className="text-xs md:text-sm text-gray-500 pb-4">2016 - 2017</p>

				<h4 className="text-sm md:text-lg font-bold">UX/UI & Frontend Development Bootcamp, Monash University</h4>
				<p className="text-xs md:text-sm text-gray-500">2021 - 2022</p>

			</div>

			{/* Skills Section */}
			<div className="flex flex-col py-4 border-primary bg-primary">
				
				<h3 className="uppercase mb-2 lg:mb-0 text-md md:text-xl font-bold">Skills</h3>

				<div className="flex flex-col items-start md:flex-row md:flex-wrap gap-y-1 md:gap-y-2 text-xs md:text-base md:space-x-4 md:pl-0 
		  			*:rounded-full *:bg-white *:md:px-6 *:px-3 *:py-2">
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
