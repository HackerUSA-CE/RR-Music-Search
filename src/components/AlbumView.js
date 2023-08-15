import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'

function AlbumView(){
const {id}= useParams()
    const [albumData, setAlbumData]= useState ([])


    return(
        <div>
            <h2>The id was:{id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView