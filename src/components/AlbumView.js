import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumView() {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);

  return (
    <div>
      <p>Album Data Goes Here!</p>
    </div>
  );
}
export default AlbumView;
