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
		
		<div className="flex flex-row justify-between items-center bg-background py-8 px-8 lg:px-36">

			<div className="flex items-center justify-start lg:space-x-4">

				{/* email */}
				<span className="text-xl underline underline-offset-[3px] decoration-1 hidden lg:flex">jozhou.uxui@gmail.com</span>

				{/* email button - mobile only */}
				<a href="mailto:jozhou.uxui@gmail.com" className="cursor-pointer rounded-full text-base bg-foreground border-white border drop-shadow-sm transition duration-250 ease-out hover:bg-white [&>*:first-child]:hover:fill-foreground py-3 px-10 mr-2 lg:m-0 lg:p-0 lg:hidden">
					
					<svg className="fill-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 7.79688L12.0399 12.5695L17.9131 7.79688L18.8591 8.96099L12.0399 14.5023L5.2207 8.96099L6.16667 7.79688Z" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.25H22.75V21.75H1.25V2.25ZM2.75 3.75V20.25H21.25V3.75H2.75Z" />
					</svg>

				</a>

				{/* resume button */}
				<a href="/resume-jozhou.pdf" className="cursor-pointer rounded-full text-base bg-white border-background border drop-shadow-sm transition duration-250 ease-out hover:bg-foreground [&>*:first-child]:hover:text-white [&>*:first-child]:[&>*:first-child]:hover:stroke-white py-3 px-10 lg:px-8 lg:py-4">
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

			{/* links - desktop */}
			<div className="hidden lg:flex">
				<a href="https://www.linkedin.com/in/jozhou-uxui/" className="text-xl underline">LinkedIn</a>
				<span className="cursor-default px-[15px]">/</span>
				<a href="https://www.behance.net/iozhou" className="text-xl underline">Behance</a>
			</div>

			{/* links - mobile */}
			<div className="flex lg:hidden">
				
				<a href="https://www.linkedin.com/in/jozhou-uxui/" className="rounded-full bg-white transition duration-250 ease-out hover:bg-foreground [&>*:first-child]:hover:fill-white mr-3">
					<svg className="fill-foreground" width="35" height="35" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM7.6875 12.4688V22.5H10.875V12.4688H7.6875ZM7.5 9.28125C7.5 10.3125 8.25 11.0625 9.28125 11.0625C10.3125 11.0625 11.0625 10.3125 11.0625 9.28125C11.0625 8.25 10.3125 7.5 9.28125 7.5C8.34375 7.5 7.5 8.25 7.5 9.28125ZM19.3125 22.5H22.3125V16.3125C22.3125 13.2187 20.4375 12.1875 18.6562 12.1875C17.0625 12.1875 15.9375 13.2187 15.6562 13.875V12.4688H12.6562V22.5H15.8437V17.1563C15.8437 15.75 16.7812 15 17.7187 15C18.6562 15 19.3125 15.4688 19.3125 17.0625V22.5Z"/>
					</svg>
				</a>
				
				<a href="https://www.behance.net/iozhou" className="rounded-full bg-white transition duration-250 ease-out hover:bg-foreground [&>*:first-child]:hover:fill-white">
					<svg className="fill-foreground"width="35" height="35" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.4956 13.7761C12.2625 13.9427 11.9628 14.0426 11.5964 14.0426H9.53156V11.8778H11.4632C11.663 11.8778 11.8296 11.8778 11.9961 11.9111C12.1626 11.9444 12.2958 12.011 12.429 12.0776C12.5622 12.1775 12.6622 12.2775 12.7288 12.4107C12.7954 12.5439 12.8287 12.7437 12.8287 12.9435C12.8287 13.3099 12.7288 13.6096 12.4956 13.7761Z" />
						<path d="M12.2625 17.9059C12.096 17.9392 11.8962 17.9725 11.6963 17.9725H9.53156V15.4081H11.7296C12.1626 15.4081 12.5289 15.508 12.7954 15.7078C13.0618 15.9409 13.195 16.274 13.195 16.7402C13.195 16.9734 13.1284 17.1732 13.0618 17.3397C12.9619 17.5062 12.862 17.6061 12.7288 17.7061C12.5956 17.806 12.429 17.8726 12.2625 17.9059Z" />
						<path d="M19.1898 14.0759C19.6228 14.0759 19.9891 14.2091 20.2222 14.4422C20.4554 14.6754 20.6219 15.0084 20.6885 15.508H17.6911C17.6911 15.3976 17.714 15.2873 17.7407 15.158C17.7463 15.1312 17.752 15.1036 17.7577 15.075C17.791 14.9085 17.8576 14.742 17.9909 14.6088C18.1241 14.4755 18.2573 14.3423 18.4571 14.2424C18.6569 14.1425 18.8901 14.0759 19.1898 14.0759Z" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM13.0618 10.4457C12.6955 10.3458 12.2958 10.3125 11.8629 10.3125H7.5V19.5045H11.9628C12.3624 19.5045 12.7621 19.4379 13.1617 19.338C13.5614 19.2381 13.9277 19.0715 14.2275 18.8717C14.5272 18.6719 14.7936 18.3721 14.9602 18.0391C15.1267 17.7061 15.2266 17.3064 15.2266 16.8401C15.2266 16.274 15.0601 15.7744 14.7936 15.3748C14.5272 14.9751 14.0943 14.6754 13.5281 14.5088C13.9277 14.309 14.2608 14.0426 14.4606 13.7428C14.6937 13.4431 14.7936 13.0435 14.7936 12.5772C14.7936 12.1775 14.727 11.8112 14.5938 11.5115C14.4606 11.2117 14.2608 10.9786 13.9943 10.8121C13.7279 10.6455 13.4282 10.5123 13.0618 10.4457ZM19.323 18.3388C18.7902 18.3388 18.3905 18.2056 18.1241 17.9392C17.8576 17.6728 17.6578 17.1732 17.6578 16.6403H22.4869C22.5202 16.1074 22.4869 15.6412 22.4203 15.1749C22.2871 14.7087 22.0873 14.2757 21.8208 13.9094C21.5544 13.5097 21.2214 13.2433 20.7884 13.0101C20.3555 12.777 19.8559 12.6771 19.2897 12.6771C18.7569 12.6771 18.3239 12.777 17.8909 12.9435C17.4913 13.1101 17.1249 13.3765 16.8252 13.6762C16.5255 14.0093 16.2923 14.3756 16.1258 14.8086C15.9593 15.2415 15.8927 15.7078 15.8927 16.2074C15.8927 16.7402 15.9593 17.2065 16.1258 17.6394C16.259 18.0724 16.4922 18.4387 16.7919 18.7385C17.0916 19.0715 17.4247 19.3047 17.8576 19.4712C18.2906 19.6377 18.7569 19.7376 19.2897 19.7376C20.0557 19.7376 20.6885 19.5378 21.2214 19.2047C21.7542 18.8384 22.1539 18.2722 22.4203 17.4729H20.7884C20.7218 17.6728 20.5553 17.8726 20.2889 18.0724C20.0224 18.2389 19.6894 18.3388 19.323 18.3388ZM21.0215 10.9453H17.2915V11.8445H21.0215V10.9453Z" />
					</svg>
				</a>
			
			</div>

		</div>
  	);
}

function Footer() {
  return (
    <div className="flex flex-col items-center rounded-t-[70px] lg:rounded-t-[100px] bg-background pt-16 lg:pt-40">
		
		{/* footer icon */}
		<svg className="w-[48px] h-[48px] lg:w-[55px] lg:h-[55px]" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9997 8.02148C17.2416 8.02148 8.52051 16.7426 8.52051 27.5006C8.52051 38.2587 17.2416 46.9798 27.9997 46.9798C38.7577 46.9798 47.4788 38.2587 47.4788 27.5006C47.4788 16.7426 38.7577 8.02148 27.9997 8.02148ZM5.08301 27.5006C5.08301 14.8441 15.3431 4.58398 27.9997 4.58398C40.6562 4.58398 50.9163 14.8441 50.9163 27.5006C50.9163 40.1572 40.6562 50.4173 27.9997 50.4173C15.3431 50.4173 5.08301 40.1572 5.08301 27.5006Z" fill="#373737"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9834 28.7637C19.9834 33.1907 23.5722 36.7796 27.9993 36.7796C32.4263 36.7796 36.0152 33.1907 36.0152 28.7637H39.4527C39.4527 35.0892 34.3248 40.2171 27.9993 40.2171C21.6738 40.2171 16.5459 35.0892 16.5459 28.7637H19.9834Z" fill="#373737"/>
		</svg>

		{/* footer title */}
		<h1 className="text-center text-3xl font-bold bg-gradient-to-r from-[#373737]  via-[#373737] via-70% to-[#9D9D9D] text-transparent bg-clip-text pt-6 pb-6 lg:pb-8 lg:pt-8 lg:text-5xl">Tell me about your next project</h1>

		{/* email button */}
		<a href="mailto:jozhou.uxui@gmail.com" className="cursor-pointer rounded-full bg-foreground border-white border drop-shadow-sm text-white text-[13px] transition duration-250 ease-out hover:bg-white [&>*:first-child]:hover:text-foreground [&>*:first-child]:[&>*:first-child]:hover:fill-foreground px-8 py-3 lg:py-4 lg:text-base">
			<div className="flex flex-row items-center space-x-3">
				
				<svg className="fill-white w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 7.79688L12.0399 12.5695L17.9131 7.79688L18.8591 8.96099L12.0399 14.5023L5.2207 8.96099L6.16667 7.79688Z" />
					<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.25H22.75V21.75H1.25V2.25ZM2.75 3.75V20.25H21.25V3.75H2.75Z" />
				</svg>

				<span>Email me</span>

			</div>
		</a>
		
		{/* horizontal line */}
		<div className="flex w-full px-8 pt-6 pb-16 lg:px-48 lg:pt-20 lg:pb-28"><div className="w-full border-t-1 border-[#AFAFAF]"></div></div>

		{/* bottom section */}
		<div className="flex flex-row w-full items-center justify-between text-[13px] px-8 pb-8 lg:px-48 mb-36 lg:pb-0 lg:text-base">
			<span>2024 All rights reserved.</span>
			
			{/* links - desktop */}
			<div className="hidden lg:flex">
				<a href="https://www.linkedin.com/in/jozhou-uxui/" className="text-xl underline">LinkedIn</a>
				<span className="cursor-default px-[15px]">/</span>
				<a href="https://www.behance.net/iozhou" className="text-xl underline">Behance</a>
			</div>

			{/* links - mobile */}
			<div className="flex lg:hidden">
				
				<a href="https://www.linkedin.com/in/jozhou-uxui/" className="rounded-full bg-white transition duration-250 ease-out hover:bg-foreground [&>*:first-child]:hover:fill-white mr-3">
					<svg className="fill-foreground" width="35" height="35" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM7.6875 12.4688V22.5H10.875V12.4688H7.6875ZM7.5 9.28125C7.5 10.3125 8.25 11.0625 9.28125 11.0625C10.3125 11.0625 11.0625 10.3125 11.0625 9.28125C11.0625 8.25 10.3125 7.5 9.28125 7.5C8.34375 7.5 7.5 8.25 7.5 9.28125ZM19.3125 22.5H22.3125V16.3125C22.3125 13.2187 20.4375 12.1875 18.6562 12.1875C17.0625 12.1875 15.9375 13.2187 15.6562 13.875V12.4688H12.6562V22.5H15.8437V17.1563C15.8437 15.75 16.7812 15 17.7187 15C18.6562 15 19.3125 15.4688 19.3125 17.0625V22.5Z"/>
					</svg>
				</a>
				
				<a href="https://www.behance.net/iozhou" className="rounded-full bg-white transition duration-250 ease-out hover:bg-foreground [&>*:first-child]:hover:fill-white">
					<svg className="fill-foreground" width="35" height="35" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.4956 13.7761C12.2625 13.9427 11.9628 14.0426 11.5964 14.0426H9.53156V11.8778H11.4632C11.663 11.8778 11.8296 11.8778 11.9961 11.9111C12.1626 11.9444 12.2958 12.011 12.429 12.0776C12.5622 12.1775 12.6622 12.2775 12.7288 12.4107C12.7954 12.5439 12.8287 12.7437 12.8287 12.9435C12.8287 13.3099 12.7288 13.6096 12.4956 13.7761Z" />
						<path d="M12.2625 17.9059C12.096 17.9392 11.8962 17.9725 11.6963 17.9725H9.53156V15.4081H11.7296C12.1626 15.4081 12.5289 15.508 12.7954 15.7078C13.0618 15.9409 13.195 16.274 13.195 16.7402C13.195 16.9734 13.1284 17.1732 13.0618 17.3397C12.9619 17.5062 12.862 17.6061 12.7288 17.7061C12.5956 17.806 12.429 17.8726 12.2625 17.9059Z" />
						<path d="M19.1898 14.0759C19.6228 14.0759 19.9891 14.2091 20.2222 14.4422C20.4554 14.6754 20.6219 15.0084 20.6885 15.508H17.6911C17.6911 15.3976 17.714 15.2873 17.7407 15.158C17.7463 15.1312 17.752 15.1036 17.7577 15.075C17.791 14.9085 17.8576 14.742 17.9909 14.6088C18.1241 14.4755 18.2573 14.3423 18.4571 14.2424C18.6569 14.1425 18.8901 14.0759 19.1898 14.0759Z" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM13.0618 10.4457C12.6955 10.3458 12.2958 10.3125 11.8629 10.3125H7.5V19.5045H11.9628C12.3624 19.5045 12.7621 19.4379 13.1617 19.338C13.5614 19.2381 13.9277 19.0715 14.2275 18.8717C14.5272 18.6719 14.7936 18.3721 14.9602 18.0391C15.1267 17.7061 15.2266 17.3064 15.2266 16.8401C15.2266 16.274 15.0601 15.7744 14.7936 15.3748C14.5272 14.9751 14.0943 14.6754 13.5281 14.5088C13.9277 14.309 14.2608 14.0426 14.4606 13.7428C14.6937 13.4431 14.7936 13.0435 14.7936 12.5772C14.7936 12.1775 14.727 11.8112 14.5938 11.5115C14.4606 11.2117 14.2608 10.9786 13.9943 10.8121C13.7279 10.6455 13.4282 10.5123 13.0618 10.4457ZM19.323 18.3388C18.7902 18.3388 18.3905 18.2056 18.1241 17.9392C17.8576 17.6728 17.6578 17.1732 17.6578 16.6403H22.4869C22.5202 16.1074 22.4869 15.6412 22.4203 15.1749C22.2871 14.7087 22.0873 14.2757 21.8208 13.9094C21.5544 13.5097 21.2214 13.2433 20.7884 13.0101C20.3555 12.777 19.8559 12.6771 19.2897 12.6771C18.7569 12.6771 18.3239 12.777 17.8909 12.9435C17.4913 13.1101 17.1249 13.3765 16.8252 13.6762C16.5255 14.0093 16.2923 14.3756 16.1258 14.8086C15.9593 15.2415 15.8927 15.7078 15.8927 16.2074C15.8927 16.7402 15.9593 17.2065 16.1258 17.6394C16.259 18.0724 16.4922 18.4387 16.7919 18.7385C17.0916 19.0715 17.4247 19.3047 17.8576 19.4712C18.2906 19.6377 18.7569 19.7376 19.2897 19.7376C20.0557 19.7376 20.6885 19.5378 21.2214 19.2047C21.7542 18.8384 22.1539 18.2722 22.4203 17.4729H20.7884C20.7218 17.6728 20.5553 17.8726 20.2889 18.0724C20.0224 18.2389 19.6894 18.3388 19.323 18.3388ZM21.0215 10.9453H17.2915V11.8445H21.0215V10.9453Z" />
					</svg>
				</a>
			
			</div>

		</div>

    </div>
  );
}
