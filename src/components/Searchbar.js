import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const SearchBar = function() {
    let searchContext = useContext(SearchContext)

    return (
        <form>
            <input type="text" ref={searchContext.term} placeholder="Search Term" />
            <button onClick={(event) => searchContext.handleSearch(event, searchContext.term.current.value)}>search</button>
        </form>
    )
}

export default SearchBar