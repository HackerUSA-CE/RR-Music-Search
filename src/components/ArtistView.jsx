import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function ArtistView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])
    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    const navButtons = () => {
        return (
            <div>
                <button type='button' onClick={() => navigate(-1)}>Back</button>
                <button type='button' onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }
    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>

            </div >
        )
    })

    return (
        <div>
            {artistData.length === 0 ? 'loading..' : artistData[0].artistName}
            {navButtons()}
            {renderAlbums}
        </div>
    )

}






