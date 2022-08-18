import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
export default function ArtistView() {
    const [artistData, setArtistData] = useState([])
    const { id } = useParams();
    return (
        <div>
            <h1>the artist passed is{id}</h1>
        </div>
    )

}