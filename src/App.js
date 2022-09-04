import { Fragment, useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import { DataContext } from './context/DataContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { createResource as fetchData } from './util/FetchHelper'

function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState(null)

	const API_URL = 'https://itunes.apple.com/search?term='



	const handleSearch = (e, term) => {
		e.preventDefault()
		if (term) {
			const fetchewdData = fetchData(term)
			setData(fetchewdData)
		}
	}
	const renderGallery = () => {
		return data ? (
			<Suspense fallback={<h1>loading...</h1>}>
				<Gallery data={data} />
			</Suspense>
		) : ''
	}


	return (
		<div>
			<Searchbar handleSearch={handleSearch} />
			{message}
			<DataContext.Provider value={data}>

				<Router>
					<Routes>
						<Route path='/' element={
							<Fragment>
								{renderGallery()}

							</Fragment>

						} />
						<Route path='/album/:id' element={<AlbumView />} />
						<Route path='/artist/:id' element={<ArtistView />} />
					</Routes>
				</Router>
			</DataContext.Provider>
		</div>
	);
}

export default App;
