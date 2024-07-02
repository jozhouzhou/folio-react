import Image from "next/image";

interface LandingSkillCardProps {
    skillNumber: number;
}

export default function LandingSkillCard({ skillNumber }: LandingSkillCardProps) {
    
	const skillData = [
		{
			title: 'Usable App Design',
			icon: '/icon-offer-1.png',
			width: 16,
			height: 22
		},
		{
			title: 'Responsive Web Design',
			icon: '/icon-offer-2.png',
			width: 22,
			height: 18
		},
		{
			title: 'Developer-Friendly Prototypes',
			icon: '/icon-offer-3.png',
			width: 22,
			height: 20
		},
		{
			title: 'Reusable Design Components',
			icon: '/icon-offer-4.png',
			width: 16,
			height: 24
		},
		{
			title: 'Auto Layouted Design Files',
			icon: '/icon-offer-5.png',
			width: 22,
			height: 22
		},
		{
			title: 'Comprehensive Design',
			icon: '/icon-offer-6.png',
			width: 22,
			height: 22
		},
	]
	
	return (
        <div className="flex flex-col w-full items-center text-center px-6 py-2 md:py-8">
          	
			<div className="flex w-1/6 aspect-square mx-auto items-center justify-center bg-primary-50 rounded-full p-2 md:mb-0 lg:mb-2 xl:mb-6">
				<Image 
					width={skillData[skillNumber].width} height={skillData[skillNumber].height} 
					src={skillData[skillNumber].icon} alt={skillData[skillNumber].title}
				/>
          	</div>

			<span className="text-md md:text-lg lg:text-xl xl:text-xl md:pb-2">{skillData[skillNumber].title}</span>

        </div>
    );
}