import { useEffect, useState } from "react";

import { Pagination } from "./components/Pagination";

import { AlbumType } from "./types/album.type";

const API_URL = "https://jsonplaceholder.typicode.com/albums/1/photos";

function App() {
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  useEffect(() => {
    const getAlbums = async () => {
      await fetch(API_URL)
        .then((res) => res.json())
        .then((album) => setAlbums(album));
    };
    getAlbums();
  }, []);

  return (
    <div>
      <Pagination />
    </div>
  );
}

export default App;
