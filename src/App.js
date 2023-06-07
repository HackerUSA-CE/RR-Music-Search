import {useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/Searchbar'
import { DataContext } from './context/DataContext'
import { createResource as fetchData } from './helper'


function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([null])

	const renderGallery = () => {
		if(data){
			return (
				<Suspense fallback={<h1>Loading...</h1>}>
					<Gallery data={data} />
				</Suspense>
			)
		}
	}
	

	useEffect(() => {
		if(search) {
			setData(fetchData(searchTerm))
		}
	}, [searchTerm])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

	return (
		<div className="App">
			<SearchBar handleSearch={handleSearch} />
			{message}
			{renderGallery()}
		</div>
	)
	
	;
}

export default App;
