import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from "../components/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'gatsby'
import Footer from "../components/Footer";
import Header from '../components/Header';
import Image from 'react-bootstrap/Image'


export default function contact() {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Container fluid className="maincontainer contactpage"  >

                 
                <Row className='row_content row_content_form contactpage mb-2' >
                    <Col sm={12} md={7}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><strong>Name</strong> </Form.Label>
                                <Form.Control type='Name' placeholder='What is your name?' />
                                <Form.Label><strong>Email</strong>  </Form.Label>
                                <Form.Control type="email" placeholder="What is your email?" />
                                <Form.Label> <strong>Phone</strong>  </Form.Label>
                                <Form.Control type="number" placeholder="Can we call you?" />
                                <Form.Label> <strong>Comments</strong> </Form.Label>
                                <Form.Control type="text" placeholder="What can we do for you?" />
                            </Form.Group>
                            <Link to="contact">
                                <Button variant="outline-primary" className='btn-warning btn_margin_cont'>Send Away</Button>{' '}
                            </Link>
                        </Form>
                    </Col>
                    <Col sm={5} className="dirCol">
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>

    )
}
