import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function startergy() {
    return (
        <>
            <Header />
            <Navbar />
            <Container fluid className='careerspage'>
                <Row>
                    <Col>
                        <h1 className='ctitle'>
                            STRATEGY
                        </h1>
                        <p className='cbodyo'>
                            We understand that making strategic decisions can be challenging, especially in the post-pandemic environment. Our Strategy practice is here to help. We work with you to understand your unique needs and goals, and then develop a customized plan to help you achieve measurable results. Whether you're looking to grow your business, enter a new market, or drive innovation, we have the expertise and experience to help you make the right choices and achieve your strategic objectives
                        </p>
                    </Col>
                    <Col>
                        <ul className="strategy_li">
                            <li><a href="#section1">Core Business Transformation</a></li>
                            <li><a href="#section2">Branding, Positioning and Messaging</a></li>
                            <li><a href="#section3">Marketing and Go-To Market Strategy</a></li>
                            <li><a href="#section4">Innovation Strategy</a></li>
                            <li><a href="#section5">Business Strategy Development</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="startegy_page">
                    <div id="section1">
                        <h1 className='ctitle'>
                            Core Business Transformation
                        </h1>
                        <p className='cbodyo'>
                            Optimize business operations, drive product and service innovation, improve financial performance, accelerates speed to market,
                            and operates client platforms to innovate continuously.
                        </p>
                    </div>
                    <div id="section2">
                        <h1 className='ctitle'>
                            Branding, Positioning and Messaging
                        </h1>
                        <p className='cbodyo'>
                            Define brand identity and develop a messaging strategy to effectively communicate their value proposition to customers.
                        </p>
                    </div>
                    <div id="section3">
                        <h1 className='ctitle'>
                            Marketing and Go-To Market Strategy
                        </h1>
                        <p className='cbodyo'>
                            Implement effective marketing and go-to-market strategies to reach and engage their target audience, drive demand, and achieve business growth
                        </p>
                    </div>
                    <div id="section4">
                        <h1 className='ctitle'>
                            Innovation Strategy
                        </h1>
                        <p className='cbodyo'>
                            Identify opportunities for innovation and develop a plan to bring new products or services to market.
                        </p>
                    </div>
                    <div id="section5">
                        <h1 className='ctitle'>
                            Business Strategy Development
                        </h1>
                        <p className='cbodyo'>
                            Define vision, mission, and goals, and creating a plan to achieve them.
                        </p>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}