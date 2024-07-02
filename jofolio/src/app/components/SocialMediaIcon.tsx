import Image from "next/image";

interface SocialMediaIconProps {
    iconNumber: number;
}

export default function SocialMediaIcon({ iconNumber }: SocialMediaIconProps) {
	
	const data = [
		{
			alt: 'Email',
			icon: '/icon-mail.svg',
			width: 22,
			height: 18,
			link: 'http://www.google.com'
		},
		{
			alt: 'Mobile',
			icon: './icon-phone.svg',
			width: 16,
			height: 22,
			link: 'http://www.google.com'
		},
		{
			alt: 'LinkedIn',
			icon: '/icon-linkedin.svg',
			width: 22,
			height: 20,
			link: 'http://www.google.com'
		}
	]
	
	return (
		<div>
			<a href={data[iconNumber].link}>
        		
				<div 
					className="flex w-full h-12 aspect-square rounded-full mx-auto items-center justify-center bg-background-50 p-3 md:mb-0 lg:mb-2 xl:mb-6
					transition duration-150 ease-in-out hover:bg-primary-100"
					>

					<Image 
						width={data[iconNumber].width} height={data[iconNumber].height}
						src={data[iconNumber].icon} alt={data[iconNumber].alt}
					/>
          		</div>
      		</a>
		</div>
	);
}