import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";
import "./nav.css";
import SocialMediaIcon from "./components/SocialMediaIcon";

const inter = Alegreya_Sans({
	subsets: ["latin"],
	weight: ['400', '700', '800']
});

export const metadata: Metadata = {
  title: "Jo Zhou",
  description: "A hand-crafted website using React and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cyberpunk" lang="en">
      <body className={inter.className}>

        <div className="px-16">

            <NavBar />
  
          	{children}
        
        </div>

        <Footer />

        </body>
    </html>
  );
}

export function NavBar() {
  	

	return (
		
    	<div className="flex flex-row justify-between py-6 font-bold">

			{/* Logo */}
			<a href="/" className="flex items-center rounded-full hover:bg-hover duration-200 px-6 py-2 cursor-pointer">
				<div className="flex flex-row items-center space-x-4">
					<img src="/logo.svg" className="max-h-8 max-w-8 rounded-full" alt="" />
					<h1 className="font-bold text-3xl">Jo Zhou</h1>
				</div>
			</a>

			{/* Nav Links */}
			<div className="grid grid-cols-3 items-center gap-x-4 text-md *:text-center *:rounded-full *:uppercase *:px-2 *:py-2 *:duration-200 *:cursor-pointer">

				<a href="/" className="hover:bg-hover">Home</a>
				<a href="/portfolio" className="hover:bg-hover">Portfolio</a>
				<a className="hover:bg-hoverResume hover:text-primary arrow-parent px-4 border-2 border-black">
					<div className="flex flex-row items-center space-x-2">
						<p>View Resume</p>
						<svg className="text-black animate-arrow overflow-hidden" width="15" height="15" viewBox="0 0 15 15">
							<path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
						</svg>
					</div>
				</a>

			</div>

		</div>
  	);
}

export function Footer() {
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
