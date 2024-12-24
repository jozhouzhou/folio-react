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
	
	{/* copy to clipboard logic */}
	const [copySuccess, setCopySuccess] = useState('');
	const textAreaRef = useRef(null);
  
	function copyToClipboard(e) {
	  document.execCommand('copy');
	  e.target.focus();
	};
	
	return (
		
		<div className="flex flex-row items-center py-8 justify-between px-6 lg:px-36 bg-background">

			<div className="flex items-center justify-start space-x-2">

				{/* email */}
				<span className="text-xl">jozhou.uxui@gmail.com</span>

				{/* buttons */}
				<button onClick={copyToClipboard} ref={textAreaRef} value='jozhou.uxui@gmail.com' className="cursor-pointer rounded-full text-base bg-white border-background border drop-shadow-sm px-12 py-2.5">Copy</button>
				<a href="/resume" className="cursor-pointer rounded-full text-base bg-white border-background border drop-shadow-sm px-12 py-2.5">Resume</a>
			
			</div>

			{/* links */}
			<div>
				<a href="https://www.google.com" className="text-xl underline">LinkedIn</a>
				<span className="cursor-default px-[15px]">/</span>
				<a href="https://www.google.com" className="text-xl underline">Behance</a>
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
		<h1 className="text-5xl font-bold my-8">Tell me about your next project</h1>

		{/* buttons */}
		<div className="flex flex-row space-x-4">
			
			<a href="/resume" className="cursor-pointer rounded-full bg-secondary border-white border drop-shadow-sm text-white text-base px-10 py-4">
				<div className="flex flex-row space-x-3">
					
					<span>Email me</span>

					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 7.79688L12.0399 12.5695L17.9131 7.79688L18.8591 8.96099L12.0399 14.5023L5.2207 8.96099L6.16667 7.79688Z" fill="white"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.25H22.75V21.75H1.25V2.25ZM2.75 3.75V20.25H21.25V3.75H2.75Z" fill="white"/>
					</svg>

				</div>
			</a>

			<a href="/resume" className="cursor-pointer rounded-full bg-white border-background border drop-shadow-sm text-base px-10 py-4">
				<div className="flex flex-row space-x-3">
					
					<span>Text me</span>

					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0175 6.00335C14.711 2.69655 9.33823 2.69655 6.0318 6.00421C4.37258 7.66306 3.54633 9.83175 3.54794 12.0032C3.54919 13.6824 3.53712 15.9847 3.52476 17.8658C3.51858 18.8066 3.51232 19.6426 3.50761 20.2434L3.50596 20.4478C3.56736 20.4474 3.63196 20.447 3.69956 20.4465C4.29364 20.4428 5.12012 20.4386 6.04978 20.4365C7.90704 20.4325 10.1834 20.4374 11.8407 20.4732C14.0711 20.5214 16.3129 19.6963 18.0175 17.9916C21.3243 14.6844 21.3301 9.31634 18.0175 6.00335ZM2.74975 21.2035L1.99978 21.1969L2.00765 20.2316C2.01236 19.6313 2.01862 18.7959 2.0248 17.8559C2.03715 15.9752 2.04918 13.6776 2.04794 12.0043C2.04605 9.45081 3.0189 6.8954 4.97094 4.94374C4.97089 4.94379 4.97099 4.94369 4.97094 4.94374M4.97094 4.94374C8.8632 1.05022 15.186 1.05012 19.0782 4.94274C22.9772 8.8422 22.97 15.1599 19.0782 19.0522C17.0726 21.0579 14.4309 22.0295 11.8083 21.9728C10.1703 21.9374 7.90933 21.9325 6.05303 21.9365C5.12591 21.9386 4.30156 21.9428 3.70901 21.9465C3.41275 21.9484 3.17448 21.9501 3.01034 21.9514L2.75747 21.9535L2.74975 21.2035L2.75646 21.9535L1.99316 21.9603L1.99978 21.1969L2.74975 21.2035" fill="#333333"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M7.46582 11.6309H9.06456V13.1309H7.46582V11.6309Z" fill="#333333"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2002 11.6309H12.7989V13.1309H11.2002V11.6309Z" fill="#333333"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9346 11.6309H16.5333V13.1309H14.9346V11.6309Z" fill="#333333"/>
					</svg>

				</div>
			</a>

		</div>
		
		{/* Insert horizontal line here */}
		<div className="flex w-full px-20 pt-16 pb-20"> <div className="w-full border-t-1 border-[#AFAFAF]"></div></div>

		{/* bottom section */}
		<div className="flex flex-row w-full justify-between text-xl px-20 mb-36">
			<span>2024 All rights reserved.</span>
			
			{/* links */}
			<div>
				<a href="https://www.google.com" className="text-xl underline">LinkedIn</a>
				<span className="cursor-default px-[15px]">/</span>
				<a href="https://www.google.com" className="text-xl underline">Behance</a>
			</div>

		</div>

    </div>
  );
}
