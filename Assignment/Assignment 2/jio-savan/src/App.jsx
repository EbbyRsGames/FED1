// App.jsx
import { useState } from 'react'
import './App.css'
import MoodSelector from './Components/MoodSelector';
import Nav from './Components/Nav'
import Play from './Components/Play'
import Song from './Components/Song'

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (songData) => {
    setSelectedSong(songData); // Store entire song data in state
  };
  const [searchQuery, setSearchQuery] = useState('');

  

  const handleSearch = (query) => {
    console.log(query);
    setSearchQuery(query); // Update search query state
  };

    const [mood, setMood] = useState('default');
  
    const handleMoodChange = (newMood) => {
      setMood(newMood);
      // Apply the mood to the player (e.g., change color themes)
      document.documentElement.style.setProperty('--player-theme-color', moodColors[newMood]);
    };
  
    const moodColors = {
      calm: '#1B7593',
      energetic: '#E14C38',
      happy: '#FADB56',
      sad: '#3F704D',
      default: '#D6EBF2'
    };

  return (
    <div>
      <Nav onChange={handleSearch} />
      <Song onSelect={handleSongSelect} searchQuery={searchQuery} />
      <MoodSelector onMoodChange={handleMoodChange} />
      <Play selectedSong={selectedSong}/>
    </div>
  )
}

export default App;