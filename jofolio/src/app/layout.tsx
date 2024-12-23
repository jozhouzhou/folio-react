"use client"

import { Lunasima } from "next/font/google";
import * as React from "react";
import { useState } from 'react';
import {Providers} from "./providers";

import "./globals.css";
import SocialMediaIcon from "./components/SocialMediaIcon";

const base_font = Lunasima({
	subsets: ["latin"],
	weight: ['400', '700']
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  	return (
		<html lang="en">
			<body className={base_font.className}>
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

			<div className="flex justify-start items-center">

				{/* email */}
				<span className="text-lg">jozhou.uxui@gmail.com</span>

				{/* buttons */}
				<a href="/resume" className="cursor-pointer rounded-full bg-primary-400 text-xs lg:text-base px-4 lg:px-8 py-2">Copy</a>
				<a href="/resume" className="cursor-pointer rounded-full bg-primary-400 text-xs lg:text-base px-4 lg:px-8 py-2">Resume</a>
			
			</div>
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
