import React from 'react';
import { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formValues = form.current;
    const newErrors = {};

    if (!formValues['first_name'].value.trim()) {
      newErrors.first_name = 'First name is required';
    }
    if (!formValues['last_name'].value.trim()) {
      newErrors.last_name = 'Last name is required';
    }
    if (!formValues['user_email'].value.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues['user_email'].value)) {
      newErrors.user_email = 'Email is invalid';
    }
    if (!formValues['phone_number'].value.trim()) {
      newErrors.phone_number = 'Phone number is required';
    }
    if (!formValues['message'].value.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    emailjs
      .sendForm('service_jvmnr1a', 'template_l04sven', form.current, 'TPnQq1K6yS1kz99tF')
      .then(
        () => {
          alert('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send email. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className='cont'>
        <h2 className='h2'>Contact Me</h2>
        <Form className='myform' ref={form} onSubmit={sendEmail}>
          <Row>
            <Col>
              <Form.Control placeholder="First name" className='fname' name='first_name' />
              {errors.first_name && <div className="error">{errors.first_name}</div>}
            </Col>
            <Col>
              <Form.Control placeholder="Last name" className='fname' name='last_name' />
              {errors.last_name && <div className="error">{errors.last_name}</div>}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Email" className='fname' name='user_email' />
              {errors.user_email && <div className="error">{errors.user_email}</div>}
            </Col>
            <Col>
              <Form.Control placeholder="Phone-number" className='fname' name='phone_number' />
              {errors.phone_number && <div className="error">{errors.phone_number}</div>}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control as="textarea" placeholder="Message" className='mname' name='message' />
              {errors.message && <div className="error">{errors.message}</div>}
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
          <FontAwesomeIcon icon={faFacebookF} className='ii' />
          <FontAwesomeIcon icon={faInstagram} className='ii' />
          <FontAwesomeIcon icon={faWhatsapp} className='ii' />
        </div>
        <div className='term'>
          <h6 className='hhj'><u>Privacy Policy</u>.<u>Term & Condition</u> </h6>
        </div>
      </div>
    </>
  );
}
