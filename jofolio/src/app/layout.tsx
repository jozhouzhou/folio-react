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
					
					<Navbar />

					<div className="">

						{children}

					</div>

					<Footer />
				
				</Providers>
			</body>
		</html>
  	);
}

function Navbar() {
	return (
		
		<div className="flex flex-row items-center py-4 lg:py-6 justify-between px-6 lg:px-36 bg-background">

			{/* email */}
			<a href="/" className="flex items-center cursor-pointer">
				<h1 className="font-bold text-xl md:text-3xl uppercase text-nowrap">jozhou.uxui@gmail.com</h1>
			</a>

			{/* buttons */}
			<a href="/resume" className="cursor-pointer rounded-full bg-primary-400 text-white text-xs lg:text-base px-4 lg:px-8 py-2">Copy</a>
			<a href="/resume" className="cursor-pointer rounded-full bg-primary-400 text-white text-xs lg:text-base px-4 lg:px-8 py-2">Resume</a>
			
			{/* links */}
			<a href="https://www.google.com"> LinkedIn / Behance</a>

		</div>
  	);
}

function Footer() {
  return (
    <div className="flex flex-col items-center rounded-t-[72px] bg-background pt-48">
		


			<span className="text-2xl md:text-3xl font-bold text-primary mb-8">Tell me about your next project</span>

			<div className="flex flex-row">
				<a href="/resume" className="cursor-pointer rounded-full bg-primary-400 text-white text-xs lg:text-base px-4 lg:px-8 py-2">Email me</a>
				<a href="/resume" className="cursor-pointer rounded-full bg-primary-400 text-white text-xs lg:text-base px-4 lg:px-8 py-2">Text me</a>
			</div>
			
			
			{/* Insert horizontal line here */}


			<div className="flex flex-row w-full  px-20 justify-between">
				<span>2024 All rights reserved.</span>
				<span>LinkedIn / Behance</span>

			</div>



    </div>
  );
}
