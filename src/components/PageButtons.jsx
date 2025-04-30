export default function PageButtons({ goToNextPage, goToPrevPage, page }) {
	return (
		<div className='flex gap-8 justify-center items-center'>
			<button
				onClick={goToPrevPage}
				disabled={page === 1}
				className='border rounded-xl px-6 py-2 bg-blue-600 hover:bg-blue-700 
                cursor-pointer text-xl'
			>
				Prev
			</button>
			<p className='font-bold text-3xl'>{page}</p>
			<button
				onClick={goToNextPage}
				className='border rounded-xl px-6 py-2 bg-blue-600 hover:bg-blue-700 
                cursor-pointer text-xl'
			>
				Next
			</button>
		</div>
	);
}
