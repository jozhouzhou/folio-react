"use client"

import React, { useRef, useState } from 'react';
import { Lunasima } from "next/font/google";
import {Providers} from "./providers";

import "./globals.css";

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
		
		<div className="flex flex-row items-center py-8 justify-between px-6 lg:px-36 bg-background">

			<div className="flex items-center justify-start space-x-4">

				{/* email */}
				<span className="text-xl underline underline-offset-[3px] decoration-1">jozhou.uxui@gmail.com</span>

				{/* buttons */}
				<a href="/resume" className="cursor-pointer rounded-full text-base bg-white border-background border drop-shadow-sm px-8 py-3">
					<div className="flex flex-row items-center space-x-3">
						
						<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.0934 14.2871H5.64941" stroke="#373737" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
							<path d="M9.03144 10.5039H5.64844" stroke="#373737" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
							<path d="M5.1912 19.25H16.6752V6.068L11.5682 0.75H1.3252V19.25" stroke="#373737" stroke-width="1.5" stroke-linecap="square"/>
							<path d="M11.0918 3.30469V6.64969H16.1988" stroke="#373737" stroke-width="1.5" stroke-linecap="square"/>
						</svg>

						<span>Resume</span>

					</div>
				</a>

			</div>

			{/* links */}
			<div>
				<a href="https://www.linkedin.com/in/jozhou-uxui/" className="text-xl underline">LinkedIn</a>
				<span className="cursor-default px-[15px]">/</span>
				<a href="https://www.behance.net/iozhou" className="text-xl underline">Behance</a>
			</div>

		</div>
  	);
}

function Footer() {
  return (
    <div className="flex flex-col items-center rounded-t-[72px] bg-background pt-40">
		
		{/* footer icon */}
		<svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9997 8.02148C17.2416 8.02148 8.52051 16.7426 8.52051 27.5006C8.52051 38.2587 17.2416 46.9798 27.9997 46.9798C38.7577 46.9798 47.4788 38.2587 47.4788 27.5006C47.4788 16.7426 38.7577 8.02148 27.9997 8.02148ZM5.08301 27.5006C5.08301 14.8441 15.3431 4.58398 27.9997 4.58398C40.6562 4.58398 50.9163 14.8441 50.9163 27.5006C50.9163 40.1572 40.6562 50.4173 27.9997 50.4173C15.3431 50.4173 5.08301 40.1572 5.08301 27.5006Z" fill="#373737"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9834 28.7637C19.9834 33.1907 23.5722 36.7796 27.9993 36.7796C32.4263 36.7796 36.0152 33.1907 36.0152 28.7637H39.4527C39.4527 35.0892 34.3248 40.2171 27.9993 40.2171C21.6738 40.2171 16.5459 35.0892 16.5459 28.7637H19.9834Z" fill="#373737"/>
		</svg>

		{/* footer title */}
		<h1 className="text-5xl font-bold py-8 bg-gradient-to-r from-[#373737]  via-[#373737] via-70% to-[#9D9D9D] text-transparent bg-clip-text">Tell me about your next project</h1>

		{/* email button */}
		<a href="/resume" className="cursor-pointer rounded-full bg-secondary border-white border drop-shadow-sm text-white text-base px-10 py-4">
			<div className="flex flex-row items-center space-x-3">
				
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 7.79688L12.0399 12.5695L17.9131 7.79688L18.8591 8.96099L12.0399 14.5023L5.2207 8.96099L6.16667 7.79688Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.25H22.75V21.75H1.25V2.25ZM2.75 3.75V20.25H21.25V3.75H2.75Z" fill="white"/>
				</svg>

				<span>Email me</span>

			</div>
		</a>
		
		{/* horizontal line */}
		<div className="flex w-full px-48 pt-16 pb-20"><div className="w-full border-t-1 border-[#AFAFAF]"></div></div>

		{/* bottom section */}
		<div className="flex flex-row w-full justify-between text-xl px-48 mb-36">
			<span>2024 All rights reserved.</span>
			
			{/* links */}
			<div>
				<a href="https://www.linkedin.com/in/jozhou-uxui/" className="text-xl underline">LinkedIn</a>
				<span className="cursor-default px-[15px]">/</span>
				<a href="https://www.behance.net/iozhou" className="text-xl underline">Behance</a>
			</div>

		</div>

    </div>
  );
}
