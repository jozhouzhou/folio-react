
export default function LandingDesignShowcaseCard({ children }: Readonly<{ children: React.ReactNode }>) {
	
	return (
		<div className="flex flex-col w-full items-center lg:w-5/6 h-[40vh] lg:h-[80vh] rounded-md lg:rounded-lg bg-background-50 p-4 lg:p-6 mb-8">
          	<div className="w-full bg-white h-full rounded-md lg:rounded-lg p-6 lg:p-12">

				{children}	

			</div>
        </div>
    );
}