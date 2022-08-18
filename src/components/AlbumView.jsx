import { useState } from 'react';
import { useParams } from 'react-router-dom'
export default function AlbumView() {
    const [albumData, setAlbumData] = useState([])
    const { id } = useParams();
    return (
        <div>
            <h1>album here is {id}</h1>
        </div>
    )
}