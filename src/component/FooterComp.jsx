import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const FooterComp = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left">
            <h5>Contact Us</h5>
            <p>Email: aakashprajapat59@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col md={6} className="m-auto align-items-center text-center text-md-right">
            <p>&copy; {new Date().getFullYear()} Akash Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComp
