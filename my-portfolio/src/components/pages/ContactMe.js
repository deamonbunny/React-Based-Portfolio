import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import emailjs from '@emailjs/browser';



export default function ContactMe() {
  return (
    <div  class="title-spacer container">
      <h2>Contact Me</h2>
      <br></br>
      <Card id="sorry-card">
        <Card.Text>Working on getting form submissions handled properly, in the mean time please contact me through my email <a href="deamonbunny@gmail.com">deamonbunny@gmail.com</a> or through my <a href="https://github.com/deamonbunny">Github</a>!</Card.Text>
      </Card>
      <br></br>
      <Card id="contact-card">
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            </Form.Group>
            <Button variant="primary" type="submit">
              Contact Me
            </Button>
          </Form>
        </Card.Text>
      </Card>
    </div>
  );
}



//Working on backend logic for handling form and email sending using EmailJS

// const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         form.current,
//         process.env.REACT_APP_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           alert('message sent successfully...');
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
