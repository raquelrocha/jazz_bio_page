import React from 'react';
export function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://www.instagram.com/auriluminus/">
          <img alt="instagram logo" src="/instagram_logo.webp"></img>
        </a>
        <a href="https://www.facebook.com/andreia.ferreira.35513800">
          <img alt="facebook logo" src="/facebook_logo.webp"></img>
        </a>
      </div>
      <div className="links">links</div>
      <div className="author">
        Developed by <a href="https://github.com/raquelrocha/">Raquel Rocha</a>
      </div>
    </div>
  );
}
