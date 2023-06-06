import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const API_URL = `http://localhost:4000/song/${id}`
            const response = await fetch(API_URL)
            const data = await response.json()
            const songs = data.results.filter(item => item.kind === 'song')
            console.log(songs)
            setAlbumData(songs)
        }

        
        fetchData()
    })

    const display = albumData && albumData.map(song => {
        return (
            <div key={song.trackId}>
                <p>{song.trackId}</p>
            </div>
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}


export default AlbumView
