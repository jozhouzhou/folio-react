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
		
		<div className="flex flex-col justify-center">
			<div className="flex flex-row items-center mx-4 my-4 md:mx-16 lg:mx-36 lg:my-6 font-bold justify-between">

				{/* Logo */}
				<a href="/" className="flex items-center cursor-pointer">
					<div className="flex flex-row items-center space-x-2 sm:space-x-4">
						<img src="/logo.svg" className="max-h-8 max-w-8 rounded-full" alt="" />
						<h1 className="font-bold text-xl sm:text-3xl uppercase text-nowrap">Jo Zhou</h1>
					</div>
				</a>

				{/* Nav Links */}
				<div className="hidden md:flex md:flex-row items-center gap-x-4 text-md *:text-center *:rounded-full *:uppercase *:px-4 *:py-2 *:duration-200 *:cursor-pointer">
					<a href="/portfolio" className="border-black border-opacity-0 hover:bg-primary hover:bg-opacity-10">Projects</a>
					<a href="/resume" className="bg-primary text-white border border-primary hover:bg-white hover:text-primary">View Resume</a>
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
		
		<div className="flex justify-center mb-6 md:mb-12">
			<a href="/resume" className="text-center text-sm font-bold md:text-base rounded-full uppercase px-20 lg:px-32 py-2 
				duration-200 cursor-pointer bg-primary text-white border border-primary hover:bg-white hover:text-primary">
				View Resume
			</a>
		</div>
		 
		<div className="flex flex-col px-6 py-8 lg:px-16 lg:py-16 bg-footer text-white">

			{/* Footer Logo */}
			<a href="/">
				<div className="flex flex-row items-center pb-6 space-x-4 lg:pb-8 cursor-pointer">
					<img src="/logo.svg" alt="" className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"/>
					<span className="text-2xl md:text-3xl font-bold uppercase">Jo Zhou</span>
				</div>
			</a>
			
			{/* Description & Links */}
			<div className="flex flex-row justify-between border-b border-gray-700 pb-4 lg:pb-8">
				<div className="hidden lg:flex w-2/5 text-sm lg:text-md xl:text-lg text-gray-400">
					<p>I&apos;m Jo, a User Experience Designer with 3+ years of experience. Passionate about crafting intuitive digital solutions.</p>
				</div>
				<div className="flex flex-row flex-wrap space-x-2">
					<SocialMediaIcon platform={0} />
					<SocialMediaIcon platform={1} />
					<SocialMediaIcon platform={2} />
					<SocialMediaIcon platform={3} />
					<SocialMediaIcon platform={4} />
					<SocialMediaIcon platform={5} />
				</div>
			</div>

			{/* Copyright */}
			<p className="text-xs lg:text-sm text-gray-400 pt-4 lg:pt-8">&copy; 2024 All Rights Reserved by Jo Zhou</p>

	  	</div>

    </div>
  );
}
