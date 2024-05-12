'use client'
import Image from "next/image";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

import LandingSkillCard from "./components/LandingSkillCard";
import LandingProjectCard from "./components/LandingProjectCard";
import LandingHistoryCard from "./components/LandingHistoryCard";

export default function Home() {
	return (
		<main className="py-12">

		<Hero />

    	<SkillList />

		<ProjectShowcase />

		<WorkHistory />

		</main>
	);
}

function Hero() {
	return (
		<div className="flex flex-row justify-center items-center space-x-12 mb-36 mx-20">

			<h1 className="w-5/12 text-center text-5xl font-black uppercase">
				Research, Design<br />and Resolve 
			</h1>

			<div className="w-7/12 flex flex-row h-72 space-x-8 overflow-hidden">
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
	  <div className="flex flex-col px-20 items-center mb-36">
  
		<h2 className="pb-20 text-5xl font-black uppercase">Explore <span className="text-highlight">Jo&apos;s</span> Offerings to You</h2>
  
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

		<div className="flex flex-col px-20 items-center mb-8">
			
			<h2 className="pb-12 text-5xl font-black uppercase">
				<span className="text-highlight">Jo&apos;s</span> Projects
			</h2>
		
			<div className="flex flex-col w-full mx-auto mb-16">
				<Tabs 
					items={tabs} 
					color="primary" 
					size="lg" 
					radius="full" 
					fullWidth={true}
					classNames={{
						tabList: "bg-opacity-0",
						tab: "hover:bg-primary hover:bg-opacity-10",
						tabContent: "font-bold text-primaryText px-1 text-lg group-data-[selected=true]:text-primaryText",
						cursor: "bg-secondaryYellow",
					}}
				>
					{(item) => (
					<Tab key={item.id} title={item.label}>
						<Card className="h-[35rem] shadow-none border-2 border-primary rounded-3xl py-6 px-4">
						<CardBody className="text-center">
							<h1 className="text-5xl font-black">Great Things To Come!!!</h1><br /><br />
							{item.content}
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
    <div className="flex flex-col px-20 items-center mb-36">

		<h2 className="pb-12 text-5xl font-black uppercase">
			<span className="text-highlight">Jo&apos;s</span> History
		</h2>

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
			<div className="flex flex-col py-4 border-primary bg-primary">
			
			<h3 className="uppercase text-xl font-bold pb-2">Education</h3>

			<h4 className="text-lg font-bold">Master of Communication and Media Studies, Monash University</h4>
			<p className="text-md text-gray-500 pb-4">2016 - 2017</p>

			<h4 className="text-lg font-bold">UX/UI & Frontend Development Bootcamp, Monash University</h4>
			<p className="text-md text-gray-500">2021 - 2022</p>

			</div>

			{/* Skills Section */}
			<div className="flex flex-col py-4 border-primary bg-primary">
				
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
