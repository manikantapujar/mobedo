
import React from "react";
import '../styles/global.css';
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function index() {
  return (
    <>
      <Header />
      <Navbar />
      <Container fluid className="maincontainer font">
        <Row className="row_content">
          <Col>
            <div className="col_side_heading">
              <p>Facilitating Growth. One Conversation at a time.</p>
            </div>
          </Col>
          <Col className="col_side_content">
            <p>MOBEDO Consulting is a management consulting firm that is designed to transform businesses through a proven conversational consultative approach. Trust us to guide you in understanding your challenges, setting clear goals and creating a roadmap for success through our personalized solutions</p>
            {/* <Link to="about"><Button className="button" variant="outline-primary">About us</Button>{' '}</Link> */}
          </Col>
        </Row>
        {/* <Row>
        <Col>
          <video className="embed-responsive embed-responsive-16by9 video_content" controls>
            <source className="embed-responsive-item" src={samplevideo} type="video/mp4"></source>
          </video>
        </Col>
      </Row> */}
        <Row>
          <div className="col_side_heading ">
            <p className="head">Unleashing Growth.</p>
          </div>
          <div className="col_side_content second-section">
            <p>
              We identify and build upon the strengths, successes, and positive aspects of your business to create a culture of positivity and innovation, driving sustainable growth and success. Our tailored approach will help you achieve your goals and reach new heights with a strengths-based approach
            </p>
          </div>
          <div className="text-center">
            <p className="col_side_content">
              Lets have a conversation<br />
              Email  Phone Social
            </p>
          </div>
          {/* <Col sm className="col_heading_row">
          <h3>Practices</h3>
          <p className="col_content">What we know.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col>
        <Col sm className="col_heading_row">
          <h3>Industries</h3>
          <p className="col_content">Where we go.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col>
        <Col sm className="col_heading_row">
          <h3>Solutuions</h3>
          <p className="col_content">How we deliver.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col> */}
        </Row>
        {/* <Row>
        <div className="col_side_heading">
          <p>What sets us apart.</p>
        </div>
        <Col>
        <Carousel >
          <Carousel.Item interval={500} className="slide1">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
          <Carousel.Item interval={500} className="slide2">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
          <Carousel.Item interval={500} className="slide3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
        </Carousel>
        </Col>
        <Col></Col>
      </Row> */}


        {/* <Row className="justify-content-md-center">
          <div className="col_side_heading head text-center">
            <p>Our Offerings</p>
          </div>
          <Col sm xs lg="2" className="col_heading_row_circle  text-center">
            <div className="circle ">
              <img className="bulb" src="../consulting.jpg" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >Consulting</h3>
          </Col>
          <Col sm xs lg="2" className="col_heading_row_circle">
            <div className="circle"></div>
            <h3 className="startup">Start Up</h3>
          </Col>
          <Col sm xs lg="2" className="col_heading_row_circle">
            <div className="circle"></div>
            <h3 className="products">Products</h3>
          </Col>
        </Row> */}
        {/* <Row className="justify-content-md-center">
      <div className="col_side_heading  text-center">
          <p>Our Offerings</p>
        </div>
      
        <Col sm className="col_heading_row  ">
          <div className="circle"></div>
          <h3 className="consulting" >Consulting</h3>
        </Col>
        <Col sm className="col_heading_row">
          <div className="circle"></div>
          <h3  className="startup">Start Up</h3>
        </Col>
        <Col sm className="col_heading_row">
          <div className="circle"></div>
          <h3 className="products">Products</h3>
        </Col>
       
      </Row> */}


        {/* <Row>
          <div className="col_side_heading text-center head">
            <p>Why Mobedo</p>
          </div>
          <p className=" text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quibusdam, amet quasi saepe sapiente rem nemo dolores quos, libero quas corporis repellat sequi eos commodi magnam alias ex. Aliquam, esse.
          </p>
          <p className=" text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quibusdam, amet quasi saepe sapiente rem nemo dolores quos, libero quas corporis repellat sequi eos commodi magnam alias ex. Aliquam, esse.
          </p>
          <Col sm className="col_heading_row  col_heading_row_circle ">
            <div className="circle   ">
              <img className="bulb" src="../bulb.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >INNOVATION</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla omnis laboriosam doloribus nobis velit ducimus magni labore voluptatum animi totam ipsam perferendis, quaerat saepe maiores rerum possimus necessitatibus quod!</p>
          </Col>
          <Col sm className="col_heading_row">
            <div className="circle">
              <img className="thumb" src="../thumb.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >QUALITY</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fugit voluptates necessitatibus? Blanditiis sint quaerat provident ex vero laborum. Facilis eos esse tempore commodi similique! Quis ea omnis necessitatibus?</p>
          </Col>
          <Col sm className="col_heading_row">
            <div className="circle">
              <img className="clock" src="../clock.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >EXPERIENCE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fugit voluptates necessitatibus? Blanditiis sint quaerat provident ex vero laborum. Facilis eos esse tempore commodi similique! Quis ea omnis necessitatibus?</p>
          </Col>
          <Col sm className="col_heading_row">
            <div className="circle">
              <img className="people" src="../people.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >HAPPY CLIENTS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fugit voluptates necessitatibus? Blanditiis sint quaerat provident ex vero laborum. Facilis eos esse tempore commodi similique! Quis ea omnis necessitatibus?</p>
          </Col>
          <Col sm className="col_heading_row">
            <div className="circle">
              <img className="message" src="../message.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >SUPPORT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fugit voluptates necessitatibus? Blanditiis sint quaerat provident ex vero laborum. Facilis eos esse tempore commodi similique! Quis ea omnis necessitatibus?</p>
          </Col>
        </Row> */}
      </Container>
      <Footer />
    </>
  )

}
