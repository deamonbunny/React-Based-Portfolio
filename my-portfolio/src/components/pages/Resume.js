import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Resume() {
  return (
    <div class="title-spacer container">
      <h2>Resume</h2>
      <br></br>
      <Card id="resume-card">
        <Card.Text>      
          <h3> Please Take a look at my resume here -&gt; <a href='https://docs.google.com/document/d/1JqCClcdIdsr6V8_a0eUriekjypOkHUkWy0_I4aCWZ2U/edit?usp=sharing' className='underline'>My Resume</a></h3>
        </Card.Text>
      </Card>
    </div>
  );
}
