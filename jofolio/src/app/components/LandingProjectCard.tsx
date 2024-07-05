import Image from "next/image";

interface LandingProjectCardProps {
    projectNumber: number;
}

export default function LandingProjectCard({ projectNumber }: LandingProjectCardProps) {
    
	const skillData = [
		{
			title: 'Gym App Redesign',
			desc: 'Redesigned the Gym Mate app for daily class bookings and records, optimising user experience with intuitive navigation and streamlined reservations.',
			link: './project1',
			linkLabel: 'Figma Prototype',
			img: './hero-mockup2.png'
		},
		{
			title: 'Website Redesign Case Study',
			desc: 'rvations.',
			link: './project1',
			linkLabel: 'Read Case Study',
			img: './hero-mockup2.png'
		},
		{
			title: 'Website Redesign ',
			desc: 'Redesigned the Gym Mate app for daily class bookings and records, optimising user experience with intuitive navigation and streamlined reservations.',
			link: './project1',
			linkLabel: 'Read Case Study',
			img: './hero-mockup2.png'
		},
	
	]
	
	return (
        <div className="flex w-full rounded-lg text-left bg-background-50 p-4 lg:p-6">
		
			<div className="flex flex-col justify-between rounded-lg bg-white p-6">
				
				<div className="flex flex-col">
					
					<img src={skillData[projectNumber].img} 
						className="flex aspect-[4/3] lg:aspect-square rounded-md mb-6 mx-auto bg-primary"/>
				
					<span className="font-bold text-2xl mb-2">{skillData[projectNumber].title}</span>
					<span className="text-md mb-6">{skillData[projectNumber].desc}</span>
				</div>

				<div className="text-center">
					<a href={skillData[projectNumber].link}>
						<button className="flex flex-row w-full rounded-full justify-center items-center bg-primary-50 py-2 mb-4">
							{skillData[projectNumber].linkLabel}
							<Image src='/icon-link.svg' className="ml-3"
								width={18} height={18} alt='link' 
							/>
						</button>
					</a>

					<span className="text-md">Story Behind</span>
				</div>

			</div>
		</div>
    );
}