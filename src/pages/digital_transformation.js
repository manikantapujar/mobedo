import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function digitaltransformation() {
    return (

        <>
            <Header />
            <Navbar />
            <Container fluid className='careerspage'>
                <Row>
                    <Col>
                        <h1 className='ctitle'>
                            DIGITAL TRANSFORMATION
                        </h1>
                        <p className='cbodyo'>


                            Digital transformation is how we ensure the long-term success of a business by transitioning traditional businesses, and operating models to a new way of working that prioritizes people, growth, adaptability, sustainability, alignment to constantly changing ecosystems and still retaining their core. We leverage our expertise around industry knowledge, technology, data, innovation and craft customized possibilities that deliver significant, sustainable value to our clients.

                        </p>
                    </Col>
                    <Col>
                        <ul className="strategy_li">
                            <li><a href="#section1">DIgital Strategy Development</a></li>
                            <li><a href="#section2">Data Science and Analytics</a></li>
                            <li><a href="#section3">Devops and Cloud Services</a></li>
                            <li><a href="#section4">Automation</a></li>
                            <li><a href="#section5">Mobility</a></li>
                            <li><a href="#section6">Digital marketing</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="startegy_page">
                    <div id="section1">
                        <h1 className='ctitle'>
                            DIgital Strategy Development
                        </h1>
                        <p className='cbodyo'>
                            Define their digital vision and goals, and creating a plan to achieve them
                        </p>
                    </div>
                    <div id="section2">
                        <h1 className='ctitle'>
                            Data Science and Analytics
                        </h1>
                        <p className='cbodyo'>
                            Using big data and analytics tools to gain insights into business operations and customer behavior

                        </p>
                    </div>
                    <div id="section3">
                        <h1 className='ctitle'>
                        Devops and Cloud Services
                        </h1>
                        <p className='cbodyo'>
                            Our range of services integrate applications and infrastructure, enabling our customers to bring products to market faster and increase business revenue.

                            
                        </p>
                    </div>
                    <div id="section4">
                        <h1 className='ctitle'>
                        Automation
                        </h1>
                        <p className='cbodyo'>
                        
                            Our comprehensive enterprise-grade automation service includes ready-to-deploy cognitive solutions and a cost- efficient business model to support organizations in their automation journey.

                            
                        </p>
                    </div>
                    <div id="section5">
                        <h1 className='ctitle'>
                        Mobility
                        </h1>
                        <p className='cbodyo'>
                            We bring together the attributes of Strategy, Mobile Mindset, technology to our client in fully transforming an enterprise to a fully mobile-mature business.
                        </p>
                    </div>
                    <div id="section6">
                        <h1 className='ctitle'>
                        Digital marketing
                        </h1>
                        <p className='cbodyo'>
                            Digital marketing helps businesses reach and engage customers through targeted and personalized campaigns, leveraging the power of the internet and digital channels to drive business growth and success.
                        </p>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}