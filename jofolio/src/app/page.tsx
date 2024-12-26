'use client'
import Image from "next/image";

export default function Home() {
	return (
		<main className="">

			<Hero />
			<ServicesList />	

		</main>
	);
}

function Hero() {
	return (
		
		<div className="flex flex-col bg-background rounded-b-[72px] items-center pt-12 pb-14">
			
			{/* hero image */}
			<div className="relative h-44 w-44 mb-6">

				<img className="w-full h-full rounded-full border-3 border-white" src={"/hero-portrait.png"} alt={""} />

				<div className="absolute top-10 -right-16 -rotate-[15deg] rounded-full text-center text-lg drop-shadow bg-white py-2.5 px-6">Jo 👋</div>
				
			</div>
			
			{/* title */}
			<h1 className="text-center text-5xl leading-tight font-bold mb-7">
				Building digital products,<br />
				brands and experiences.
			</h1>

			{/* button */}
			<a href="https://www.google.com">
				<div className="flex flex-row rounded-full text-center text-base text-white bg-secondary border-white border drop-shadow-sm space-x-2 py-4 px-9">

					<span>Latest Shots</span>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M7.43945 18.9999L14.4395 11.9999L7.43945 4.99989L8.50011 3.93923L16.5608 11.9999L8.50011 20.0605L7.43945 18.9999Z" fill="white"/>
					</svg>
				</div>
			</a>

		</div>
	);
}

function ServicesList() {
	return (

		<div className="flex flex-col items-center px-48 my-24">

			{/* divider line */}
			<div className="relative w-full mt-16">
				<div className="w-full absolute -bottom-5"><div className=" border-b-1 border-opacity-50 border-[#AFAFAF]"></div></div>
			</div>

			{/* section title */}
			<h1 className="rounded-full bg-white -rotate-[20deg] border-background border drop-shadow-md text-base mb-24 px-6 py-2">Services</h1>

			{/* services list */}
			<div className="flex flex-row w-full justify-between space-x-12 mb-36">

				{/* service 1 */}
				<div className="flex flex-col w-1/3 justify-start">
				
					<svg className="mb-4" width="59" height="44" viewBox="0 0 59 44" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M56.65 38.8V29.56C56.65 28.3839 56.65 27.7958 56.4211 27.3466C56.2198 26.9515 55.8985 26.6302 55.5034 26.4289C55.0542 26.2 54.4661 26.2 53.29 26.2H41.11C39.9339 26.2 39.3458 26.2 38.8966 26.4289C38.5015 26.6302 38.1802 26.9515 37.9789 27.3466C37.75 27.7958 37.75 28.3839 37.75 29.56V38.8M22 1V3.94C22 5.11611 22 5.70417 21.7711 6.15338C21.5698 6.54852 21.2485 6.86978 20.8534 7.07111C20.4042 7.3 19.8161 7.3 18.64 7.3H12.76C11.5839 7.3 10.9958 7.3 10.5466 7.07111C10.1515 6.86978 9.83022 6.54852 9.62889 6.15338C9.4 5.70417 9.4 5.11611 9.4 3.94V1M39.5 43H54.9C55.551 43 55.8765 43 56.1435 42.9284C56.8682 42.7343 57.4343 42.1682 57.6284 41.4435C57.7 41.1765 57.7 40.851 57.7 40.2C57.7 39.8745 57.7 39.7118 57.6642 39.5782C57.5671 39.2159 57.2841 38.9329 56.9218 38.8358C56.7882 38.8 56.6255 38.8 56.3 38.8H38.1C37.7745 38.8 37.6118 38.8 37.4782 38.8358C37.1159 38.9329 36.8329 39.2159 36.7358 39.5782C36.7 39.7118 36.7 39.8745 36.7 40.2C36.7 40.851 36.7 41.1765 36.7716 41.4435C36.9657 42.1682 37.5318 42.7343 38.2565 42.9284C38.5235 43 38.849 43 39.5 43ZM7.72 43H23.68C26.0322 43 27.2083 43 28.1068 42.5422C28.897 42.1396 29.5396 41.497 29.9422 40.7068C30.4 39.8083 30.4 38.6322 30.4 36.28V7.72C30.4 5.36778 30.4 4.19167 29.9422 3.29324C29.5396 2.50296 28.897 1.86044 28.1068 1.45777C27.2083 1 26.0322 1 23.68 1H7.72C5.36778 1 4.19167 1 3.29324 1.45777C2.50296 1.86044 1.86044 2.50296 1.45777 3.29324C1 4.19167 1 5.36778 1 7.72V36.28C1 38.6322 1 39.8083 1.45777 40.7068C1.86044 41.497 2.50296 42.1396 3.29324 42.5422C4.19167 43 5.36778 43 7.72 43Z" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<h2 className="text-xl mb-3">Usable App Design</h2>

					<p className="text-base text-[16px] text-[#5F5F5F]">Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>

				</div>

				{/* service 2 */}
				<div className="flex flex-col w-1/3 justify-start">
				
					<svg className="mb-4" width="79" height="44" viewBox="0 0 79 44" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M66.3333 41.2176C67.5717 42.326 69.2071 43 71 43C74.866 43 78 39.866 78 36C78 32.7719 75.8149 30.0542 72.8431 29.2452M59.8235 29.2452C56.8517 30.0542 54.6666 32.7719 54.6666 36C54.6666 39.866 57.8007 43 61.6666 43C65.5326 43 68.6666 39.866 68.6666 36C68.6666 35.0894 68.4928 34.2194 68.1764 33.4215M47.6667 15H1M29 34.8333L34.8333 29L29 23.1667M19.6667 23.1667L13.8333 29L19.6667 34.8333M73.3333 26.6667C73.3333 30.5327 70.1993 33.6667 66.3333 33.6667C62.4673 33.6667 59.3333 30.5327 59.3333 26.6667C59.3333 22.8007 62.4673 19.6667 66.3333 19.6667C70.1993 19.6667 73.3333 22.8007 73.3333 26.6667ZM1 12.2L1 31.8C1 35.7203 1 37.6805 1.76295 39.1779C2.43407 40.495 3.50493 41.5659 4.82206 42.237C6.31945 43 8.27963 43 12.2 43H36.4667C40.387 43 42.3472 43 43.8446 42.237C45.1617 41.5659 46.2326 40.4951 46.9037 39.1779C47.6667 37.6805 47.6667 35.7204 47.6667 31.8V12.2C47.6667 8.27963 47.6667 6.31945 46.9037 4.82207C46.2326 3.50493 45.1617 2.43407 43.8446 1.76296C42.3472 1 40.387 1 36.4667 1L12.2 1C8.27963 1 6.31945 0.999999 4.82207 1.76295C3.50493 2.43407 2.43407 3.50493 1.76295 4.82206C1 6.31945 1 8.27963 1 12.2Z" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<h2 className="text-xl mb-3">Responsive Web Design</h2>

					<p className="text-base text-[16px] text-[#5F5F5F]">Transforming ideas into exceptional web and mobile app experiences.</p>
				
				</div>

				{/* service 3 */}
				<div className="flex flex-col w-1/3 justify-start">
				
					<svg className="mb-4" width="55" height="44" viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M37 30L34 33M34 33L37 36M34 33H54M41 26L44 23M44 23L47 26M44 23V43M47 40L44 43M44 43L41 40M51 30L54 33M54 33L51 36M15 1H8C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15M15 1V15M15 1H22C25.866 1 29 4.13401 29 8C29 11.866 25.866 15 22 15M15 15H8M15 15V29M15 15H22M8 15C4.13401 15 1 18.134 1 22C1 25.866 4.13401 29 8 29M15 29H8M15 29V36C15 39.866 11.866 43 8 43C4.13401 43 1 39.866 1 36C1 32.134 4.13401 29 8 29M22 15C25.866 15 29 18.134 29 22C29 25.866 25.866 29 22 29C18.134 29 15 25.866 15 22C15 18.134 18.134 15 22 15Z" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<h2 className="text-xl mb-3">Developer-Friendly Prototypes</h2>

					<p className="text-base text-[16px] text-[#5F5F5F]">Crafting visually stunning designs that connect with your
					audience.</p>
				
				</div>

			</div>

		</div>
	);
}