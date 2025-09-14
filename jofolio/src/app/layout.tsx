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
			<head>
				<title>jo.design</title>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
			</head>
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
	
	{/* logic for copy email popup */}
	const [isAnimating, setIsAnimating] = useState(false);

	const handleClick = () => {
		setIsAnimating(false);
		setTimeout(() => setIsAnimating(true), 0); // Reset animation state

		const textToCopy = 'jozhou.uxui@gmail.com';
    	navigator.clipboard.writeText(textToCopy);
	};
	
	return (
		
		<div className="flex flex-row justify-between items-center bg-background py-8 px-8 lg:px-36">

			{/* email popup */}
			<div className={`z-10 fixed bottom-5 left-[50%] translate-x-[-50%] text-nowrap cursor-default rounded-full py-3 px-6 bg-foreground text-sm text-white opacity-0 ${isAnimating ? 'animate-popup' : ''} `}>
				‘jozhou.uxui@gmail.com’ copied to your clipboard
			</div>

			<div className="flex items-center justify-start lg:space-x-4">

				{/* email */}
				<div onClick={handleClick} className="hidden lg:flex cursor-pointer text-lg underline underline-offset-[3px] decoration-1 transition duration-300 ease-out hover:text-[#370505] hover:text-hover-shadow hover:decoration-2">jozhou.uxui@gmail.com</div>

				{/* email button - mobile only */}
				<div onClick={handleClick} className="cursor-pointer rounded-full text-base bg-foreground border-white border drop-shadow-sm transition duration-250 ease-out hover:bg-white [&>*:first-child]:hover:fill-foreground py-3 px-10 mr-2 lg:m-0 lg:p-0 lg:hidden">
					
					<svg className="fill-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 7.79688L12.0399 12.5695L17.9131 7.79688L18.8591 8.96099L12.0399 14.5023L5.2207 8.96099L6.16667 7.79688Z" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.25H22.75V21.75H1.25V2.25ZM2.75 3.75V20.25H21.25V3.75H2.75Z" />
					</svg>

				</div>

				{/* resume button */}
				<a href="/resume-jozhou.pdf" target="_blank" className="cursor-pointer rounded-full text-base bg-white border-background border drop-shadow-sm transition duration-250 ease-out hover:bg-foreground [&>*:first-child]:hover:text-white [&>*:first-child]:[&>*:first-child]:hover:stroke-white py-3 px-10 lg:px-8 lg:py-4">
					<div className="flex flex-row items-center lg:space-x-3">
						
						<svg className="icon stroke-foreground" width="24" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.0934 14.2871H5.64941"  stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
							<path d="M9.03144 10.5039H5.64844"  stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
							<path d="M5.1912 19.25H16.6752V6.068L11.5682 0.75H1.3252V19.25" stroke-width="1.5" stroke-linecap="square"/>
							<path d="M11.0918 3.30469V6.64969H16.1988" stroke-width="1.5" stroke-linecap="square"/>
						</svg>

						<span className="text hidden lg:flex">Resume</span>

					</div>
				</a>

			</div>

			<Links />

		</div>
  	);
}

function Footer() {

	{/* logic for copy email popup */}
	const [isAnimating, setIsAnimating] = useState(false);

	const handleClick = () => {
		setIsAnimating(false);
		setTimeout(() => setIsAnimating(true), 0); // Reset animation state

		const textToCopy = 'jozhou.uxui@gmail.com';
    	navigator.clipboard.writeText(textToCopy);
	};

  	return (
		<div className="flex flex-col items-center rounded-t-[70px] lg:rounded-t-[100px] bg-background pt-16 lg:pt-40">
			
			{/* footer icon */}
			<svg className="w-[48px] h-[48px] lg:w-[55px] lg:h-[55px]" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9997 8.02148C17.2416 8.02148 8.52051 16.7426 8.52051 27.5006C8.52051 38.2587 17.2416 46.9798 27.9997 46.9798C38.7577 46.9798 47.4788 38.2587 47.4788 27.5006C47.4788 16.7426 38.7577 8.02148 27.9997 8.02148ZM5.08301 27.5006C5.08301 14.8441 15.3431 4.58398 27.9997 4.58398C40.6562 4.58398 50.9163 14.8441 50.9163 27.5006C50.9163 40.1572 40.6562 50.4173 27.9997 50.4173C15.3431 50.4173 5.08301 40.1572 5.08301 27.5006Z" fill="#373737"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9834 28.7637C19.9834 33.1907 23.5722 36.7796 27.9993 36.7796C32.4263 36.7796 36.0152 33.1907 36.0152 28.7637H39.4527C39.4527 35.0892 34.3248 40.2171 27.9993 40.2171C21.6738 40.2171 16.5459 35.0892 16.5459 28.7637H19.9834Z" fill="#373737"/>
			</svg>

			{/* footer title */}
			<h1 className="text-center text-[24px] leading-tight font-bold bg-gradient-to-r from-[#373737]  via-[#373737] via-70% to-[#9D9D9D] text-transparent bg-clip-text pt-6 pb-6 lg:pb-8 lg:pt-8 lg:text-5xl">Tell me about your next <br className="flex lg:hidden"/>project</h1>

			{/* email button */}
			<div onClick={handleClick} className="cursor-pointer rounded-full bg-foreground border-white border drop-shadow-sm text-white text-[13px] transition duration-250 ease-out hover:bg-white [&>*:first-child]:hover:text-foreground [&>*:first-child]:[&>*:first-child]:hover:fill-foreground px-8 py-3 lg:py-4 lg:text-base">
				<div className="flex flex-row items-center space-x-3">
					
					<svg className="fill-white w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 7.79688L12.0399 12.5695L17.9131 7.79688L18.8591 8.96099L12.0399 14.5023L5.2207 8.96099L6.16667 7.79688Z" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.25H22.75V21.75H1.25V2.25ZM2.75 3.75V20.25H21.25V3.75H2.75Z" />
					</svg>

					<span>Email me</span>

				</div>
			</div>

			{/* email popup */}
			<div className={`z-10 fixed bottom-5 left-[50%] translate-x-[-50%] text-nowrap cursor-default rounded-full py-3 px-6 bg-foreground text-sm text-white opacity-0 ${isAnimating ? 'animate-popup' : ''} `}>
				‘jozhou.uxui@gmail.com’ copied to your clipboard
			</div>
			
			{/* horizontal line */}
			<div className="flex w-full px-8 pt-6 pb-16 lg:px-48 lg:pt-20 lg:pb-28"><div className="w-full border-t-1 border-[#AFAFAF]"></div></div>

			{/* bottom section */}
			<div className="flex flex-row w-full items-center justify-between text-[13px] px-8 pb-8 lg:px-48 mb-36 lg:pb-0 lg:text-base">

				<span>2025 All rights reserved.</span>
				
				<Links />

			</div>

		</div>
  	);
}

function Links() {

	return (

		<div>

			{/* desktop */}
			<div className="hidden lg:flex">
				<div className="cursor-pointer text-lg underline underline-offset-[3px] decoration-1 transition duration-300 ease-out hover:text-[#370505] hover:text-hover-shadow hover:decoration-2"><a href="https://www.linkedin.com/in/jozhou-uxui/" target="_blank">LinkedIn</a></div>

				<span className="text-lg cursor-default px-[15px]">/</span>

				<div className="cursor-pointer text-lg underline underline-offset-[3px] decoration-1 transition duration-300 ease-out hover:text-[#370505] hover:text-hover-shadow hover:decoration-2"><a href="https://dribbble.com/j000zhou" target="_blank">Latest Shots</a></div>
			</div>

			{/* mobile */}
			<div className="flex lg:hidden">
				
				<a href="https://www.linkedin.com/in/jozhou-uxui/" target="_blank" className="rounded-full bg-white transition duration-250 ease-out hover:bg-foreground [&>*:first-child]:hover:fill-white mr-3">
					<svg className="fill-foreground" width="35" height="35" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM7.6875 12.4688V22.5H10.875V12.4688H7.6875ZM7.5 9.28125C7.5 10.3125 8.25 11.0625 9.28125 11.0625C10.3125 11.0625 11.0625 10.3125 11.0625 9.28125C11.0625 8.25 10.3125 7.5 9.28125 7.5C8.34375 7.5 7.5 8.25 7.5 9.28125ZM19.3125 22.5H22.3125V16.3125C22.3125 13.2187 20.4375 12.1875 18.6562 12.1875C17.0625 12.1875 15.9375 13.2187 15.6562 13.875V12.4688H12.6562V22.5H15.8437V17.1563C15.8437 15.75 16.7812 15 17.7187 15C18.6562 15 19.3125 15.4688 19.3125 17.0625V22.5Z"/>
					</svg>
				</a>
				
				<a href="https://dribbble.com/j000zhou" target="_blank" className="rounded-full bg-white transition duration-250 ease-out hover:bg-foreground [&>*:first-child]:hover:fill-white">
					<svg className="fill-foreground" width="35" height="35" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71377 0 0 6.71864 0 14.9973C0 22.8667 6.0712 29.3261 13.7833 29.9459V30H15C23.2862 30 30 23.2814 30 15.0027C30 6.72469 23.2868 0 15 0ZM18.3145 27.1253C17.3735 27.3819 16.3884 27.532 15.3731 27.5616H15C13.3069 27.5616 11.6917 27.2262 10.2172 26.6184C11.6449 21.4743 15.5151 17.7897 19.9449 16.1433C20.7094 19.8482 20.1544 23.8184 18.3145 27.1253ZM19.2704 13.8C14.2145 15.6211 9.79892 19.723 8.02471 25.4478C4.65423 23.1935 2.43344 19.353 2.43344 14.9973C2.43344 13.4527 2.71243 11.9729 3.22282 10.6057C4.74415 11.3637 6.37089 11.8999 8.04379 12.198C10.1748 12.5887 12.3582 12.5758 14.4831 12.1927C15.6925 11.9743 16.8733 11.6265 18.0054 11.163C18.5094 12.0008 18.9332 12.8836 19.2704 13.8ZM22.2904 15.4736C23.021 18.8459 22.7994 22.4197 21.6334 25.6755C25.0928 23.5212 27.4283 19.7326 27.5606 15.3924C25.841 15.0806 24.0484 15.1187 22.2904 15.4736ZM27.3915 12.9015C25.4871 12.634 23.5287 12.7209 21.6156 13.1296C21.2388 12.0725 20.7633 11.0543 20.1967 10.0874C21.7684 9.17962 23.2038 8.0371 24.4376 6.70487C25.9467 8.42068 26.9956 10.5508 27.3915 12.9015ZM8.47373 9.8033C7.02045 9.54457 5.60887 9.07813 4.29158 8.4198C5.42452 6.58014 7.01841 5.05424 8.91246 4.00339L8.92705 4.00798L8.9276 4.00815L8.92767 4.00818L8.9277 4.00818C9.13404 4.07312 9.33103 4.13512 9.52073 4.2032C9.59071 4.22993 9.65924 4.25591 9.72622 4.28131L9.72728 4.28171L9.72733 4.28173L9.72737 4.28174C10.035 4.39837 10.3096 4.50251 10.5391 4.60889L10.6046 4.64162L10.6202 4.64888C10.7651 4.71626 10.9739 4.81578 11.162 4.9055C11.262 4.95322 11.3562 4.99812 11.4319 5.03394L11.4347 5.03548C11.498 5.06947 11.5512 5.09801 11.6007 5.12754C11.641 5.1537 11.677 5.17489 11.6963 5.18619C11.7316 5.20686 11.7679 5.22729 11.7978 5.24394C11.8234 5.25814 11.8484 5.27197 11.8672 5.28228L11.8767 5.28748L11.8967 5.29855L11.8993 5.3C11.9271 5.31608 11.961 5.33539 11.9996 5.35742C12.0823 5.40462 12.1869 5.4643 12.3017 5.53151C12.3827 5.57895 12.4584 5.62419 12.5202 5.66248C12.5661 5.69101 12.5911 5.70756 12.6006 5.71386L12.6012 5.71423C12.605 5.71683 12.606 5.71743 12.6044 5.71623L12.6577 5.75665L12.717 5.79186C12.8074 5.84549 12.8964 5.90711 13.0075 5.984L13.0076 5.98402L13.0076 5.98405L13.0081 5.98437C13.0588 6.01948 13.1142 6.05778 13.1763 6.09997L13.2186 6.12861L13.2545 6.14886C13.2544 6.14892 13.2561 6.15005 13.2597 6.15247C13.2693 6.15897 13.2928 6.17477 13.3336 6.20403C13.3965 6.24903 13.4724 6.30551 13.5559 6.36833L13.6548 6.44286C13.7057 6.48125 13.7572 6.52015 13.8011 6.55297C13.8591 6.59633 13.9299 6.64897 13.9939 6.69331C14.9276 7.40743 15.7811 8.22284 16.541 9.12161C15.7326 9.41742 14.8993 9.64515 14.0509 9.79833C12.2015 10.1318 10.3125 10.1408 8.4801 9.80447L8.47692 9.80386L8.47373 9.8033ZM15 2.433C17.8844 2.433 20.5416 3.40583 22.6624 5.04072C21.5505 6.24369 20.2484 7.26819 18.8227 8.06995C17.8425 6.82409 16.7085 5.7024 15.4441 4.73928L15.4136 4.71603L15.3819 4.69489L15.3733 4.68889C15.3665 4.68412 15.3575 4.67769 15.346 4.6693C15.3226 4.65234 15.2937 4.63094 15.259 4.60496C15.2197 4.57552 15.1802 4.54574 15.1378 4.51376L15.1377 4.51369L15.129 4.50713C15.0947 4.48118 15.0583 4.45372 15.0185 4.42379C14.9323 4.359 14.8378 4.28853 14.751 4.22633C14.6903 4.18285 14.6031 4.12136 14.5141 4.06714L14.4576 4.02806L14.4573 4.02784L14.4573 4.02783C14.3414 3.9476 14.1677 3.82725 14.0096 3.73016C13.8619 3.62663 13.6623 3.50867 13.5315 3.43209C13.4049 3.35794 13.2685 3.28013 13.1839 3.23181L13.1832 3.23144L13.1191 3.19477C13.1032 3.18549 13.0894 3.17782 13.084 3.17481L13.0833 3.1744L13.0504 3.15622L13.0393 3.15009C13.0204 3.1397 13.0015 3.1293 12.9819 3.11836C12.9594 3.10585 12.9412 3.09553 12.9279 3.0878L12.9188 3.0814L12.8865 3.06167C12.7696 2.99027 12.6479 2.92506 12.5818 2.88966L12.5804 2.8889L12.5573 2.87657L12.5291 2.86135L12.5001 2.84764C12.442 2.82023 12.3562 2.77935 12.2587 2.73289C13.1411 2.53656 14.0584 2.433 15 2.433Z"/>
					</svg>
				</a>
			
			</div>

		</div>
	);
}