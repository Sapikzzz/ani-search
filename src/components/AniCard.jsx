export default function AniCard({
	title,
	coverImage,
	startDate,
	endDate,
	score,
}) {
	return (
		<div className='w-64 flex flex-col items-center text-center'>
			<div className='relative group'>
				<div className='bg-black absolute w-full h-full rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-100'></div>
				<div className='absolute top-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-100'>
					Score: {score}
				</div>
				<div className='absolute top-12 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-100'>
					Start Date: {startDate.day}.{startDate.month}.
					{startDate.year}
				</div>
				<div className='absolute top-20 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-100'>
					End Date: {endDate.day}.{endDate.month}.{endDate.year}
				</div>
				<img
					src={coverImage}
					alt='Cover Image'
					className='rounded-2xl border w-48'
				/>
			</div>
			<p className=' text-l font-semibold text-amber-50 line-clamp-2 overflow-hidden text-ellipsis'>
				{title}
			</p>
		</div>
	);
}
