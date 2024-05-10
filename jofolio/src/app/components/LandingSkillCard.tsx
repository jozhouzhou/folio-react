import Image from "next/image";

interface LandingSkillCardProps {
    skillNumber: number;
}

export default function LandingSkillCard({ skillNumber }: LandingSkillCardProps) {
    
	const skillData = [
		{
			title: 'Usable App Design',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: '../icon-mobile.svg'
		},
		{
			title: 'Responsive Web Design',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: '../icon-laptop.svg'
		},
		{
			title: 'Developer-Friendly Prototypes',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: '../icon-.svg'
		},
		{
			title: 'Reusable Design Components',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: '../icon-.svg'
		},
		{
			title: 'Auto Layouted Design Files',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: '../icon-.svg'
		},
		{
			title: 'Comprehensive Design',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: '../icon-.svg'
		},
	
	]
	
	return (
        <div className="flex flex-col rounded-r-xl text-center hover:scale-105 duration-100 
			bg-primary bg-opacity-5 border-l-4 border-primary shadow-md px-6 py-10">
          	
			<div className="flex w-1/5 aspect-square rounded-2xl mb-6 mx-auto items-center justify-center bg-primary">
				<Image src={skillData[skillNumber].icon} height={10} width={10} className="text-white fill-current h-10 w-10" alt=""/>
          	</div>

			<span className="font-bold text-2xl pb-2">{skillData[skillNumber].title}</span>
			<span className="text-md">{skillData[skillNumber].desc}</span>
			
        </div>
    );
}