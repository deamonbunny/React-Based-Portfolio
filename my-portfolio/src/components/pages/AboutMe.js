import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from "../../assets/images/me.jpg";

export default function AboutMe() {
  return (
    <div id="aboutContainer" class="container">
      {/* <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p> */}
      <Card>
      <img className='card-img-top' variant="top" src={require('../../assets/images/me.jpg')}/>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
        I am 25 years old and have worked a variety of places in my life, from retail to sushi. Coding has become a big part of my life and I am excited to see where a career in the Tech Indusry will take me.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}
