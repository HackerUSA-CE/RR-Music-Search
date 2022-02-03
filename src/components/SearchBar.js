// Seachbar.js
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function Searchbar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form >

            <input type="text" placeholder="Enter a search term here"/>
            <button type="submit" onClick={(e) => handleSearch(e, term)}>Submit</button>

        </form>
    )
}

export default Searchbar