"use client"

import { Alegreya_Sans } from "next/font/google";
import * as React from "react";
import { useState } from 'react';
import {Providers} from "./providers";

import "./globals.css";
import SocialMediaIcon from "./components/SocialMediaIcon";

const inter = Alegreya_Sans({
	subsets: ["latin"],
	weight: ['400', '700', '800']
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					
					<NavMenu />

					<div className="mx-4 md:mx-16">

						{children}

					</div>

					<Footer />
				
				</Providers>
			</body>
		</html>
  	);
}

function NavMenu() {

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		
		setIsOpen(!isOpen);
	};
	
	return (
		
		<div className="flex flex-col justify-center mx-4 md:mx-16 lg:mx-36 border-b border-primary-50">
			<div className="flex flex-row items-center my-4 lg:my-6 justify-between">

				{/* Logo */}
				<a href="/" className="flex items-center cursor-pointer">
					<h1 className="font-bold text-xl sm:text-3xl uppercase text-nowrap">Jo Zhou</h1>
				</a>

				{/* Nav Links */}
				<div className="hidden md:flex md:flex-row items-center gap-x-4 text-md *:text-center *:rounded-full *:px-8 *:py-2 *:duration-200 *:cursor-pointer">
					<a href="/resume" className="bg-primary-400 text-white">My Resume</a>
				</div>

				{/* Burger Bar (Mobile only) */}
				<button
					onClick={handleClick}
					className="md:hidden flex flex-col justify-center items-center *:bg-primary *:block *:transition-all
						*:duration-300 *:ease-out *:h-0.5 *:w-6">

					<span className={`${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
					<span className={`my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
					<span className={`${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
				</button>

			</div>

			{/* Burger Bar Menu */}
			<div
				className={`overflow-hidden flex flex-col w-full shadow-md shadow-b rounded-md transition-all duration-500 ease-out
					${!isOpen ? 'h-0 opacity-0 mb-0' : 'h-20 mb-2'}`}>

				<div className="flex flex-col items-center space-y-1 text-sm font-bold *:text-center *:rounded-full *:uppercase *:px-4 *:py-1.5 *:duration-200 *:cursor-pointer">
					<a href="/portfolio" className="border-black border-opacity-0 hover:bg-primary hover:bg-opacity-10">Projects</a>
					<a href="/resume" className="bg-primary text-white border border-primary hover:bg-white hover:text-primary">View Resume</a>
				</div>

			</div>
			
		</div>
  	);
}

function Footer() {
  return (
    <div className="flex flex-col">
		
		
		 
		<div className="flex flex-col items-center border-t border-primary-50 px-6 py-8 lg:px-16 lg:py-16 mx-4 md:mx-16 lg:mx-36">

			<span className="text-2xl md:text-3xl font-bold uppercase text-primary-400 mb-8">Jo Zhou</span>
				
			<div className="flex flex-row flex-wrap space-x-4">
				<SocialMediaIcon iconNumber={0} />
				<SocialMediaIcon iconNumber={1} />
				<SocialMediaIcon iconNumber={2} />

			</div>

	  	</div>

    </div>
  );
}
