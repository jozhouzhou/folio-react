import Image from "next/image";

interface LandingSkillCardProps {
    skillNumber: number;
}

export default function LandingSkillCard({ skillNumber }: LandingSkillCardProps) {
    
	const skillData = [
		{
			title: 'Usable App Design',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z',
			viewbox: '0 0 24 24'
		},
		{
			title: 'Responsive Web Design',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: 'M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z',
			viewbox: '0 0 24 24'
		},
		{
			title: 'Developer-Friendly Prototypes',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: 'M4.59 0.410156L6 1.82016L2.82 5.00016L6 8.18016L4.59 9.60016L0 5.00016L4.59 0.410156ZM10.41 0.410156L15 5.00016L10.41 9.60016L9 8.18016L12.18 5.00016L9 1.82016L10.41 0.410156ZM21 3.00016V15.0002C21 16.1102 20.11 17.0002 19 17.0002H3C1.9 17.0002 1 16.1102 1 15.0002V11.0002H3V15.0002H19V3.00016H16.03V1.00016H19C20.11 1.00016 21 1.89016 21 3.00016Z',
			viewbox: '0 0 21 17'
		},
		{
			title: 'Reusable Design Components',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: 'M20 11C20 8.97 19.33 7.09 18 5.38V16.63C19.33 14.97 20 13.09 20 11ZM16.63 18H5.38C6.06 18.55 6.95 19 8.05 19.41C9.14 19.8 10.13 20 11 20C11.88 20 12.86 19.8 13.95 19.41C15.05 19 15.94 18.55 16.63 18ZM10 16L6 8V16H10ZM16 8L12 16H16V8ZM11 13.53L14.75 6H7.25L11 13.53ZM16.63 4C14.97 2.67 13.09 2 11 2C8.91 2 7.03 2.67 5.38 4H16.63ZM4 16.63V5.38C2.67 7.09 2 8.97 2 11C2 13.09 2.67 14.97 4 16.63ZM22 11C22 14.03 20.94 16.63 18.78 18.78C16.63 20.94 14.03 22 11 22C7.97 22 5.38 20.94 3.22 18.78C1.06 16.63 0 14.03 0 11C0 7.97 1.06 5.38 3.22 3.22C5.38 1.06 7.97 0 11 0C14.03 0 16.63 1.06 18.78 3.22C20.94 5.38 22 7.97 22 11Z',
			viewbox: '0 0 22 22'
		},
		{
			title: 'Auto Layouted Design Files',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: 'M18 12V9H22V7H18V4L14 8L18 12ZM4 4V7H0V9H4V12L8 8L4 4ZM10 16H12V0H10V16Z',
			viewbox: '0 0 22 16'
		},
		{
			title: 'Comprehensive Design',
			desc: 'In publishing and graphic design, Lorem ipsum is a placeholder',
			icon: 'M2.00014 16.2496V19.9996H5.75014L16.8101 8.92965L13.0601 5.17965L2.00014 16.2496ZM21.6101 17.3596L17.3601 21.6096L12.1601 16.4096L13.9301 14.6396L14.9301 15.6396L17.4001 13.1596L18.8201 14.5796L17.3601 15.9996L18.4201 16.9996L19.8401 15.5996L21.6101 17.3596ZM5.61014 9.82965L0.390137 4.63965L4.64014 0.389648L6.40014 2.15965L3.93014 4.63965L5.00014 5.69965L7.46014 3.21965L8.88014 4.63965L7.46014 6.04965L8.46014 7.04965L5.61014 9.82965ZM19.7101 5.99965C20.1001 5.60965 20.1001 4.99965 19.7101 4.58965L17.3701 2.28965C17.0001 1.89965 16.3501 1.89965 15.9601 2.28965L14.1201 4.11965L17.8701 7.86965L19.7101 5.99965Z',
			viewbox: '0 0 22 22'
		},
	]
	
	return (
        <div className="flex flex-col rounded-r-xl items-center text-center bg-primary bg-opacity-5 border-l-4 border-primary px-6 py-2 md:py-4 lg:rounded-r-3xl xl:py-10">
          	
			<div className="flex w-1/5 aspect-square mb-1 mx-auto items-center justify-center p-2 md:mb-0 md:p-6 lg:p-0 lg:mb-2 xl:mb-6">
				<svg viewBox={skillData[skillNumber].viewbox} className="fill-primary">
					<path d={skillData[skillNumber].icon} />
				</svg>
          	</div>

			<span className="font-bold text-md md:text-2xl lg:text-xl xl:text-3xl md:pb-2">{skillData[skillNumber].title}</span>
			<span className="text-xs md:text-lg xl:text-lg">{skillData[skillNumber].desc}</span>

        </div>
    );
}