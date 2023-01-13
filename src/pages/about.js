import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "gatsby";
import Button from 'react-bootstrap/Button';


const AboutPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container className="maincontainer font" >
        <div className="partion text-center mt-2">
          <img className="yellowdot" src="../yellowdots.svg" alt="this is innovation"></img>
        </div>
        <div className="about-heading text-center mt-2 mb-3">
          <h1>About Mobedo</h1>
        </div>
        {/* <Row className="row_content">
          <Col>
            <div className="col_side_heading">
              <p>We have been delivering top-quality software solutions on time, on scope, on budget since 1992.</p>
            </div>
          </Col>
          <Col className="col_side_content">
            <img className="aboutus" src="../about-us.png" alt="this is Aboutus image"></img>
          </Col>
        </Row> */}

        <Row>
          <div className="col_side_heading text-center head">
            <p>Why Mobedo</p>
          </div>
          <p className=" text-center">
            <strong> MOBEDO </strong> Consulting was conceptualized as a response to our conversations with SME and Startup founders during the COVID pandemic. An unplanned, unexpected event that left every organism and organization unsure. As Design-Thinking proponents, empathy is at the core of our existence. We aim to truly understand the unmet needs and pain points of our clients, and work closely with them to develop tailored solutions that are both effective and compassionate.

          </p>
          <p className=" text-center">
            Our commitment to making a positive impact is reflected in everything we do. Our name MOBEDO Consulting, signifies a promise to our clients and our collective resolve with striving to <b> DO MORE</b> for our clients, so they can <b> BE MORE</b>. Our commitment to doing more and being more extends beyond just our business. We also strive to make a positive impact in the communities in which we operate, through a variety of sustainability initiatives
          </p>
          <p className=" text-center">
            The essence of MOBEDO – Our principles, beliefs, philosophies of values
          </p>
        </Row>

        <Row className="row_content ">
          <Col>
            <h2>Our Mission</h2>
            <p className="aboutus_secondrow"> We continually strive to <b> DO MORE</b>, so our clients, our people and society
              can <b> BE MORe</b></p>
            <h2>Our Vission</h2>
            <p className="aboutus_secondrow">To be recognized as a trusted and efficient partner to our clients and, craft
              long standing relationships, while maintaining uncompromising principles as we
              grow.
              .</p>
            <h2>Our Values</h2>
            <ul className="values_li">
              <li> <b> Karma:</b> We believe in the power of positive actions, and strive to make a positive impact through our work</li>
              <li><b></b>Dharma: We believe in living in alignment with our values and purpose, and strive to
                be authentic and transparent in all of our actions.</li>
              <li><b>Ahimsa:</b> We respect the needs and goals of our clients and work to create solutions
                that are in harmony with their values and the greater good</li>
              <li><b>Seva:</b> We are dedicated to serving our clients and helping them achieve their goals,
                with a focus on building long-term partnerships based on trust and mutual benefit</li>
              <li><b>Swadharma:</b> We recognize the unique strengths and challenges of each of our
                clients, and work to help them find their own path to success</li>
              <li><b> Satya:</b> We value honesty and transparency in our work, and strive to be truthful and
                authentic in all of our interactions</li>
            </ul>
          </Col>

        </Row>
        {/* <Row>
          <div className="about-heading text-center ">
            <h1>Our Team</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates mollitia dignissimos dolore unde ad alias voluptatibus vero eveniet neque dicta, perferendis perspiciatis, adipisci iure porro possimus, officiis omnis quia a.</p>
          </div>
        </Row> */}
        {/* <Row className="banner font">
          <Col>
            <div >
              <h2 className="banner-content">We specialize in turning your ideas into software. <br />
                Give us a call, and we’ll work with you to turn your <br />
                great idea into reality!</h2>
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <img className="exclametry-mark" src="../exclamation-mark-90.png" alt="this is innovation"></img>
              </Col>
              <Col>
                <div className='email-about-us'>
                  <img src="/mail.png" width="25px" height="25px" alt="" /> info@mobedo.com
                </div>
                <div className='phone-about-us'>
                  <img src="/phone.png" width="25px" height="25px" alt="" /> 01897465226
                </div>
                <Link to="/contact"> <Button variant="warning" className="btn1">GET IN TOUCH</Button>{' '} </Link>
              </Col>
            </Row>
          </Col>
        </Row> */}

      </Container>


      <Footer />
    </>
  )
}
export default AboutPage