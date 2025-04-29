export default function AniCard({ title, coverImage }) {
	return (
		<div className='w-64'>
			<img
				src={coverImage}
				alt='Cover Image'
				className='rounded-2xl border'
			/>
			<p className=' text-xl font-semibold text-amber-50'>{title}</p>
		</div>
	);
}
