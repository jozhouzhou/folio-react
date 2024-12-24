'use client'
import Image from "next/image";

export default function Home() {
	return (
		<main className="">

			<Hero />
			<ServicesList />	

		</main>
	);
}

function Hero() {
	return (
		
		<div className="bg-background rounded-b-[72px] flex flex-col items-center pt-12 pb-14">
			
			{/* hero image */}
			<div className="relative h-44 w-44 mb-6">

				<div className="bg-red-500 rounded-full w-full h-full border-3 border-white">
					{/* Insert image here */}
				</div>	
				
				<div className="absolute top-10 -right-16 -rotate-[15deg] rounded-full text-center text-lg drop-shadow bg-white py-2.5 px-6">Jo 👋</div>
			</div>
			
			{/* title */}
			<h1 className="text-center text-5xl leading-tight font-bold mb-7">
				Building digital products,<br />
				brands and experiences.
			</h1>

			{/* button */}
			<div className="flex flex-row rounded-full text-center text-base text-white bg-secondary space-x-2 py-4 px-9">

				<span>Latest Shots</span>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M7.43945 18.9999L14.4395 11.9999L7.43945 4.99989L8.50011 3.93923L16.5608 11.9999L8.50011 20.0605L7.43945 18.9999Z" fill="white"/>
				</svg>
			</div>

		</div>
	);
}

function ServicesList() {
	return (

		<div className="flex flex-col items-center px-20 my-24">

			<h1>Services</h1>

			<div className="flex flex-row pt-12 space-x-8">

				<div className="w-[160px] h-[160px] bg-blue-200"></div>
				<div className="w-[160px] h-[160px] bg-blue-200"></div>
				<div className="w-[160px] h-[160px] bg-blue-200"></div>
			</div>

		</div>
	);
}