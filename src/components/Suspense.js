import React, { Suspense } from "react";

const AlbumInfo = ({ albumId }) => {
  const albumData = fetchAlbumData(albumId);

  return (
    <div>
      <h2>{albumData.name}</h2>
      <p>Artist: {albumData.artist}</p>
    </div>
  );
};

const fetchAlbumData = (albumId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: `Album ${albumId}`,
        artist: `Artist ${albumId}`,
      });
    }, 1000);
  });
};

function SuspenseEx() {
  return (
    <div>
      <h1>Music Library</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AlbumInfo albumId={1} />
      </Suspense>
    </div>
  );
}

export default SuspenseEx;
