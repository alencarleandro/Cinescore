import { useState } from 'react';

export default function HeroBanner() {
  const [trailerOpen, setTrailerOpen] = useState(false);

  const openTrailer = () => setTrailerOpen(true);
  const closeTrailer = () => setTrailerOpen(false);

  return (
    <>
      <div className="banner">
        <div className="video-bg">
          <video src="/assets/img/mulan.mp4" autoPlay muted loop playsInline />
          <div className="overlay" />
        </div>
        <div className="content">
          <img src="/assets/img/name.png" className="movieTitle" alt="" />
        </div>
        <button type="button" className="play" onClick={openTrailer}>
          <img src="/assets/img/play.png" alt="" />
          Assistir trailer
        </button>
      </div>

      <div className={`trailer-overlay ${trailerOpen ? 'active' : ''}`}>
        <video src="/assets/img/video.mp4" controls />
        <img src="/assets/img/close.png" className="close" alt="Fechar" onClick={closeTrailer} role="presentation" />
      </div>
    </>
  );
}
