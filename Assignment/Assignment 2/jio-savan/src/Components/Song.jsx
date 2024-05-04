// Song.jsx
import "./Song.css"
import React, { useState } from 'react';

const Song = ({ onSelect, searchQuery}) => {
 
    const cardData = [
        {
            title: 'Ambarsariya',
            imageUrl: './Ambarsariya.jpeg',
            audioUrl: 'AmbarsariyaS.mp3'
        },
        {
            title: 'Amplifier',
            imageUrl: './Amplifier.jpeg',
            audioUrl: 'AmplifierS.mp3'
        },
        {
            title: 'Tum hi ho bandhu',
            imageUrl: './Bandhu.jpeg',
            audioUrl: 'BandhuS.mp3'
        },
        {
            title: 'Radha',
            imageUrl: './Radha.jpeg',
            audioUrl: 'RadhaS.mp3'
        },
        {
            title: 'Jhak Maar Ke',
            imageUrl: './JhakMaarke.jpeg',
            audioUrl: 'JhakMaarkeS.mp3'
        }
    ];
    const [selectedSong, setSelectedSong] = useState(null);

    
    const filteredSongs = cardData.filter(song =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCardClick = (songData) => {
        onSelect(songData); 
    };

    return (

        <div className="container">
            <div className="side-bar">
                <div className="list-holder">
                    <li className='li'>Browse</li>
                    <div className="sli">
                        <li className='li'>New Releases</li>
                        <li className='li'>Top Charts</li>
                        <li className='li'>New Releases</li>
                        <li className='li'>Podcast</li>
                        <li className='li'>Top Artists</li>
                        <li className='li'>Radio</li>

                    </div>
                    <li className='li'>Library</li>
                    <div className="sli">
                        <li className='li'>History</li>
                        <li className='li'>Liked Songs</li>
                        <li className='li'>Albums</li>
                        <li className='li'>Podcast</li>
                        <li className='li'>Artists</li>
                    </div>
                </div>
            </div>
            <div className='main'>
            
                {cardData.map((card, index) => (
                    <div key={index} className='card' onClick={() => handleCardClick(card)}>
                        <div className="imgholder">
                            <img src={card.imageUrl} alt="" />
                        </div>
                        <div className="dataholder">
                            {card.title}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Song;



