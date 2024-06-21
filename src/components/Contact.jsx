import React from 'react';
import './contact.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <>
      <div className='cont'>
        <h2 className='h2'>Contact Me</h2>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" className='fname' />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" className='fname' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Email" className='fname' />
            </Col>
            <Col>
              <Form.Control placeholder="Phone-number" className='fname' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Message" className='mname' />
            </Col>
          </Row>
          <Row>
            <Col>
              <button className='send'>
                Send message
              </button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className='cost'>
        <h3 className='hh'>Reach us</h3>
        <div className='iconss'>
          <FontAwesomeIcon icon={faFacebookF} className='ii'/>
          <FontAwesomeIcon icon={faInstagram} className='ii'/>
          <FontAwesomeIcon icon={faWhatsapp} className='ii' />
        </div>
        <div className='term'>
   <h6 className='hhj'><u>Privacy Policy</u>.<u>Term & Condition</u> </h6> 
        </div>
      </div>
    </>
  );
}
