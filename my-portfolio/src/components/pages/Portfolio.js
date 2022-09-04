import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Portfolio() {
  return (
    <div  class="title-spacer container">
      <h2>Portfolio</h2>
      <br></br>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='card-img-top' src={require('../../assets/images/project1.jpg')} />
      <Card.Body>
        <Card.Title>Stock Stalking</Card.Title>
        <Card.Text>
          A simple website for checking the trade history of congress members over the course of the last 2 years.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://axeljk.github.io/congress-stock-stalking/">Live Website</Card.Link>
        <Card.Link href="https://github.com/Axeljk/congress-stock-stalking">GitHub Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}
