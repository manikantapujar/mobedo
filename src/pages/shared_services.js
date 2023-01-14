import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function sharedservices() {
    return (
        <>
            <Header />
            <Navbar />
            <Container fluid className='careerspage'>
                <Row>
                    <Col>
                        <h1 className='ctitle'>
                            SHARED SERVICES
                        </h1>
                        <p className='cbodyo'>
                            Our team of experienced leaders have a track record of helping startups achieve their goals. We offer a range of services, including market research, business plan development, financial modeling, and operational support. Whether you're looking to validate a new business idea, secure funding, or scale your operations, we have the expertise and resources to help you succeed.
                        </p>
                    </Col>
                    <Col>
                        <ul className="strategy_li">
                            <li><a href="#section1">Co-Founder-As-a-Service</a></li>
                            <li><a href="#section2"> MVP-As-a-Service</a></li>
                            <li><a href="#section3">Innovation-As-a-Service</a></li>
                            <li><a href="#section4"> Testing-as-a-Service</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="startegy_page">
                    <div id="section1">
                        <h1 className='ctitle'>
                            Co-Founder-As-a-Service
                        </h1>
                        <p className='cbodyo'>
                            Our team of experienced leaders have a track record of helping startups achieve their goals. We offer a range of services, including market research, business plan development, financial modeling, and operational support. Whether you're looking to validate a new business idea, secure funding, or scale your operations, we have the expertise and resources to help you succeed.
                        </p>
                    </div>
                    <div id="section2">
                        <h1 className='ctitle'>
                            MVP-As-a-Service
                        </h1>
                        <p className='cbodyo'>
                            MVP as a service helps businesses validate product ideas and gain valuable market insights, while minimizing risk and cost by developing and testing minimum viable products. Our team of experts can help you define and build an MVP that accurately represents your product, and provide feedback and guidance to help you iterate and improve your product based on real-world data and customer feedback
                        </p>
                    </div>
                    <div id="section3">
                        <h1 className='ctitle'>
                            Innovation-As-a-Service
                        </h1>
                        <p className='cbodyo'>
                            Innovation as a service helps businesses stay ahead of the curve by providing access to a wide range of tools, resources, and expertise to drive continuous innovation and growth. Our team of experts can help you identify opportunities for innovation, develop and test new ideas, and implement successful innovation programs that drive business value and competitive advantage
                        </p>
                    </div>
                    <div id="section4">
                        <h1 className='ctitle'>
                            Testing-as-a-Service
                        </h1>
                        <p className='cbodyo'>
                            Testing as a service helps businesses ensure the quality and reliability of their products and systems by providing a range of testing services, including functional testing, performance testing, security testing, and more. Our team of experts can help you define and implement a comprehensive testing strategy that meets your business needs and goals, and ensure that your products and systems are ready for market.
                        </p>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}