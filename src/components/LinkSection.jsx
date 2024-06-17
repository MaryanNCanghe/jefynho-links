// src/components/LinkSection.jsx
import React from 'react';
import './LinkSection.css';
import spotifyIcon from '../assets/spotify.png';
import appleMusicIcon from '../assets/apple-music.png';
import youtubeMusicIcon from '../assets/youtube-music.png';
import itunesIcon from '../assets/itunes.png';
import youtubeIcon from '../assets/youtube.png';
import deezerIcon from '../assets/deezer.png';
import soundcloudIcon from '../assets/soundcloud.png'



const LinkSection = () => {
  const links = [
    { name: '', url: 'https://spotify.com', icon: spotifyIcon, className:'spotify-icon'},
    { name: '', url: 'https://apple.com', icon: appleMusicIcon },
    { name: '', url: 'https://youtube.com', icon: youtubeIcon },
    { name: '', url: 'https://youtube.com', icon: youtubeMusicIcon },
    { name: '', url: 'https://youtube.com', icon: soundcloudIcon },
    { name: '', url: 'https://youtube.com', icon: itunesIcon },
    { name: '', url: 'https://youtube.com', icon: deezerIcon },
    // Add more links as needed
  ];

  return (
    <div className="link-section">
      {links.map((link, index) => (
        <div key={index} className="link-row">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <div className="link-content">
              <img src={link.icon} alt={link.name} className="link-icon" /> {/* PNG image */}
              <span>{link.name}</span>
            </div>
          </a>
          <div className="play-box">Play</div> {/* Text box saying "Play" */}
        </div>
      ))}
    </div>
  );
};

export default LinkSection;
