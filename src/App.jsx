import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { gql, useQuery } from '@apollo/client';
import AniCard from './components/AniCard';

const ANIME_QUERY = gql`
	query Media($perPage: Int, $sort: [MediaSort], $type: MediaType) {
		Page(perPage: $perPage) {
			pageInfo {
				currentPage
				hasNextPage
				perPage
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
	const { data, loading, error } = useQuery(ANIME_QUERY, {
		variables: {
			perPage: 50,
			sort: 'SCORE_DESC',
			type: 'ANIME',
		},
	});

	if (loading) return 'Loading...';
	if (error) return <pre>{error.message}</pre>;

	console.log(data);

	return (
		<>
			<NavBar></NavBar>
			<div className='bg-blue-900 p-8 flex flex-col gap-8'>
				<SearchBar></SearchBar>
				<div className='grid grid-cols-5 gap-16'>
					{data.Page.media.map((mediaItem) => (
						<div className='flex flex-row justify-center'>
							<AniCard
								key={mediaItem.id}
								title={mediaItem.title.english}
								coverImage={mediaItem.coverImage.extraLarge}
							>
								{console.log(mediaItem.coverImage.extraLarge)}
							</AniCard>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
