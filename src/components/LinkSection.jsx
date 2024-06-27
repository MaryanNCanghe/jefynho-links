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
    { name: '', url: 'https://open.spotify.com/user/31zv3bscje32fjj5g2atoymcuzce?si=jgkc0atkTN6pIMMKkYCmaA', icon: spotifyIcon, className:'spotify-icon'},
    { name: '', url: 'https://youtu.be/HRe_3RW1_PU?si=8Opk5ck9FiuTqOQX', icon: appleMusicIcon },
    { name: '', url: 'https://youtube.com/@melhorgestaohits1?si=ZF7EeXvKWa_snL52', icon: youtubeIcon },
    { name: '', url: 'https://youtube.com/@melhorgestaohits1?si=ZF7EeXvKWa_snL52', icon: youtubeMusicIcon },
    { name: '', url: 'https://soundcloud.com/jeferson-lima-374625860?ref=clipboard&p=a&c=1&si=97ffa074dc1847ee830e74ff37bc706a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: soundcloudIcon },
    { name: '', url: 'https://youtu.be/HRe_3RW1_PU?si=8Opk5ck9FiuTqOQX', icon: itunesIcon },
    { name: '', url: 'https://youtu.be/HRe_3RW1_PU?si=8Opk5ck9FiuTqOQX', icon: deezerIcon },
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
