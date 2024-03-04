import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container p-5'>
      <div className="row container">
        <div className="col-lg-6">
          <Card style={{
             width: '30rem',
             height:'265px',
             position: 'relative',
             backgroundColor: 'transparent', // Remove the default background color
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url("https://wallpapers.com/images/hd/movie-poster-background-p5qblffj7cvswl5g.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.5',
              zIndex: -1
            }} />
            <Card.Body>
            <h1 className='p-5 mt-5' style={{ fontSize: '40px', color: 'white', textAlign:'center' }}>
                <Link to={'/movie'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Movies</Link>
              </h1>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card style={{
             width: '30rem',
             height:'265px',
             position: 'relative',
             backgroundColor: 'transparent', // Remove the default background color
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/773/687/807/tv-shows-wallpaper-preview.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.5',
              zIndex: -1
            }} />
            <Card.Body>
            <h1 className='p-5 mt-5' style={{ fontSize: '40px', color: 'white', textAlign:'center' }}>
                <Link to={'/series'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Series</Link>
              </h1>
            </Card.Body>
          </Card>
        </div>
      </div>
     
      </div>
   
  );
}

export default LandingPage;
