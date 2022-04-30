import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    const data = useContext(DataContext)
    const myData = data.result.read()

    const display = myData.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery