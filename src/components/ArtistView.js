import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ArtistView() {
    const {id} = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>the id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView
