export default function AniCard({ title, coverImage }) {
	return (
		// TODO: Title on two lines if needed, more = crop the title
		<div className='w-64 flex flex-col items-center text-center'>
			<img
				src={coverImage}
				alt='Cover Image'
				className='rounded-2xl border w-48'
			/>
			<p className=' text-l font-semibold text-amber-50'>{title}</p>
		</div>
	);
}
