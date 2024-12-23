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
		
		<div className="bg-background rounded-b-[72px] flex flex-col items-center">
			
			<div className="bg-red-500 h-[250px] w-[250px] ">Image</div>
			
			<h1 className="w-full text-center pb-4 text-2xl md:pb-8 lg:text-6xl mb-8 md:mb-12 lg:mb-20 xl:mb-28 mt-4 font-bold uppercase">
				Building digital products, brands and experience.
			</h1>

			<div className="bg-red-500 h-[50px] w-1/4 ">BUTTON</div>
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