import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap'

function SeriesCard(movie) {
    let img_path="https://image.tmdb.org/t/p/w500";
  return (
    <div>
         <div className="movie p-5 container">
        <Row>
            <Col  className='mb-4'  >
                 <Card style={{ width: '100%' }}>
              <Card.Img  variant="top" src={img_path+movie.info.poster_path} />
              <Card.Body>
                <Card.Title>{movie.info.title}
                <p className="rating">{movie.info.vote_average}</p>
        
                </Card.Title>
                <Card.Text>
                <h1>overview</h1>
        
                {movie.info.overview}
        
                </Card.Text>
              
              </Card.Body>
            </Card>
            </Col>
        </Row>
            </div>
    </div>
  )
}

export default SeriesCard




   