import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import * as React from "react";
import {Providers} from "./providers";

import "./globals.css";
import SocialMediaIcon from "./components/SocialMediaIcon";

const inter = Alegreya_Sans({
	subsets: ["latin"],
	weight: ['400', '700', '800']
});

export const metadata: Metadata = {
  title: "Jo Zhou",
  description: "A hand-crafted website using React and Tailwind",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					
					<NavMenu />

					<div className="mx-16">

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
		
    	<div className="flex flex-row justify-between mx-36 my-6 font-bold">

			{/* Logo */}
			<a href="/" className="flex items-center cursor-pointer">
				<div className="flex flex-row items-center space-x-4">
					<img src="/logo.svg" className="max-h-8 max-w-8 rounded-full" alt="" />
					<h1 className="font-bold text-3xl uppercase">Jo Zhou</h1>
				</div>
			</a>

			{/* Nav Links */}
			<div className="flex flex-row items-center gap-x-4 text-md *:text-center *:rounded-full *:uppercase *:px-4 *:py-2 *:duration-200 *:cursor-pointer">
				<a href="/portfolio" className="border-black border-opacity-0 hover:bg-primary hover:bg-opacity-10">Projects</a>
				<a href="/resume" className="bg-primary text-white border border-primary hover:bg-white hover:text-primary">View Resume</a>
			</div>

		</div>
  	);
}

function Footer() {
  return (
    <div className="flex flex-col px-16 py-16 bg-footer text-white">

      {/* Footer Logo */}
      <a href="/">
		<div className="flex flex-row items-center space-x-4 pb-8 cursor-pointer">
			<img src="/logo.svg" alt="" className="w-12 h-12 rounded-full"/>
			<span className="text-3xl font-bold">Jo Zhou</span>
		</div>
	  </a>
      
      {/* Description & Links */}
      <div className="flex flex-row justify-between border-b border-gray-700 pb-8">
        <div className="w-2/5 text-sm text-gray-400">
          	<p>I&apos;m Jo, a User Experience Designer with 3+ years of experience. Passionate about crafting intuitive digital solutions.</p>
        </div>
        <div className="flex flex-row space-x-2">
			<SocialMediaIcon platform={0} />
			<SocialMediaIcon platform={1} />
			<SocialMediaIcon platform={2} />
			<SocialMediaIcon platform={3} />
			<SocialMediaIcon platform={4} />
			<SocialMediaIcon platform={5} />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 pt-8">&copy;2024 All Rights Reserved by Jo Zhou</p>
        
    </div>
  );
}
