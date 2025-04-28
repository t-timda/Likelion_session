import songData from '../data/song.json';
import SongCard from '../components/songcard.jsx';
import React from 'react';

function Playlist() {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {songData.map((song, index) => (
        <SongCard
          key={index}
          albumImage={song.albumImage}
          releaseDate={song.releaseDate}
          artist={song.artist}
          title={song.title}
          lyricist={song.lyricist}
          composer={song.composer}
        />
      ))}
    </div>
  );
}

export default Playlist;
