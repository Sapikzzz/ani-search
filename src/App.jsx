import { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { gql, useQuery } from '@apollo/client';
import AniCard from './components/AniCard';
import PageButtons from './components/PageButtons';

const ANIME_QUERY = gql`
	query Media(
		$perPage: Int
		$sort: [MediaSort]
		$type: MediaType
		$page: Int
	) {
		Page(perPage: $perPage, page: $page) {
			pageInfo {
				currentPage
				hasNextPage
				perPage
				total
			}
			media(sort: $sort, type: $type) {
				title {
					english
					romaji
				}
				format
				id
				coverImage {
					extraLarge
				}
			}
		}
	}
`;

function App() {
	const [page, setPage] = useState(1);
	const { data, loading, error } = useQuery(ANIME_QUERY, {
		variables: {
			page: page,
			perPage: 50,
			sort: 'SCORE_DESC',
			type: 'ANIME',
		},
	});

	const goToNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const goToPrevPage = () => {
		if (page > 1) {
			setPage((prevPage) => prevPage - 1);
		}
	};

	if (loading) return 'Loading...';
	if (error) return <pre>{error.message}</pre>;

	return (
		<>
			<NavBar></NavBar>
			<div className='bg-blue-900 p-8 flex flex-col gap-8'>
				<SearchBar></SearchBar>
				<div className='grid grid-cols-5 gap-16'>
					{data.Page.media.map((mediaItem) => (
						<div
							key={mediaItem.id}
							className='flex flex-row justify-center'
						>
							<AniCard
								title={mediaItem.title.english}
								coverImage={mediaItem.coverImage.extraLarge}
							>
								{/* {console.log(mediaItem.title.english)} */}
							</AniCard>
						</div>
					))}
				</div>
				<PageButtons
					goToNextPage={goToNextPage}
					goToPrevPage={goToPrevPage}
					page={page}
				></PageButtons>
			</div>
		</>
	);
}

export default App;
