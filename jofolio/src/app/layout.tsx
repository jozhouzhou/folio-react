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
	
	return (
		
		<div className="flex flex-col justify-center mx-6 lg:mx-36 border-b border-primary-50">
			<div className="flex flex-row items-center my-4 lg:my-6 justify-between">

				{/* Logo */}
				<a href="/" className="flex items-center cursor-pointer">
					<h1 className="font-bold text-xl md:text-3xl uppercase text-nowrap">Jo Zhou</h1>
				</a>

				{/* Nav Links */}
				<a href="/resume" className="cursor-pointer rounded-full bg-primary-400 text-white text-xs lg:text-base px-4 lg:px-8 py-2">My Resume</a>

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
