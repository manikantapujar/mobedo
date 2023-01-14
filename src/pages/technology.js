import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function technology() {
    return (
        <>
            <Header />
            <Navbar />
            <Container fluid className='careerspage'>
                <Row>
                    <Col>
                        <h1 className='ctitle'>
                            TECHNOLOGY
                        </h1>
                        <p className='cbodyo'>
                            Our Technology practice helps organizations transform their business through the use of technology and innovation, enabling them to achieve their technology vision, create sustainable value from their investments, and successfully navigate a foundational technology transformation journey
                        </p>
                    </Col>
                    <Col>
                        <ul className="strategy_li">
                            <li><a href="#section1">Enterprise Applications </a></li>
                            <li><a href="#section2">Technology Solutions Delivery </a></li>
                            <li><a href="#section3">WEB3 </a></li>
                            <li><a href="#section4">Metaverse</a></li>
                            <li><a href="#section5">CyberSecurity Services</a></li>
                            <li><a href="#section6">UI/UX Strategy and Design</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="startegy_page">
                    <div id="section1">
                        <h1 className='ctitle'>
                            Enterprise Applications
                        </h1>
                        <p className='cbodyo'>
                            MOBEDO has the expertise and resources to help you plan, define, build, implement, operate, and manage the right ERP solution for your business.
                        </p>
                    </div>
                    <div id="section2">
                        <h1 className='ctitle'>
                            Technology Solutions Delivery
                        </h1>
                        <p className='cbodyo'>
                            MOBEDO specializes in delivering technically complex, high-risk projects, collaborating with consultants, clients, and other stakeholders to prioritize, adapt to changing requirements, and use resources effectively
                        </p>
                    </div>
                    <div id="section3">
                        <h1 className='ctitle'>
                            WEB3
                        </h1>
                        <p className='cbodyo'>
                            MOBEDO's extensive blockchain experience helps organizations enhance application modernization, automate business processes, launch new digital products, and monetize digital assets through digital transformation


                        </p>
                    </div>
                    <div id="section4">
                        <h1 className='ctitle'>
                            Metaverse
                        </h1>
                        <p className='cbodyo'>
                            Maximize your futuristic potential with our end-to-end strategic product architecture, prototyping, software development, digitalization, and management services.

                        </p>
                    </div>
                    <div id="section5">
                        <h1 className='ctitle'>
                            CyberSecurity Services
                        </h1>
                        <p className='cbodyo'>
                            MOBEDO's cybersecurity services provide proactive, industry-specific threat intelligence to help customers defend against cyberattacks and create a secure business ecosystem
                            Our prototyping and MVP development services help you discover and identify product-specific demands based on the latest market trends, allowing you to test and minimize risks before launching your product


                        </p>
                    </div>
                    <div id="section6">
                        <h1 className='ctitle'>
                            UI/UX Strategy and Design
                        </h1>
                        <p className='cbodyo'>
                            Our team of creative professionals ensures that your solutions are innovative, intuitive, and engaging through a design-first approach
                        </p>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}