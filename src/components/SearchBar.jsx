export default function SearchBar(params) {
	return (
		<form className='flex gap-8 justify-center'>
			<input
				type='text'
				placeholder='Search for anime'
				className='bg-white w-240 h-20 px-4 border
				rounded-xl'
			/>
			<button
				type='submit'
				className='border rounded-xl w-40 h-20 bg-blue-600 hover:bg-blue-700 
                cursor-pointer text-xl'
			>
				Search
			</button>
		</form>
	);
}
