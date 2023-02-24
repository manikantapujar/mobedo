import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function footer() {
    return (

        <div className='footerbg'>

            <div className='row'>
                <div className='col-md-5'>
                    <div className='row'>
                        <div class="col-md-6">
                            <img src="/mobedologo1.png"  width="200px" className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </div>
                        <div className='col-md-6 email_phone'>
                            <p>9849813377</p>
                            <p>info@mobedoconsulting.com</p>
                        </div>
                        <p className='firm_member'>Member firm of the MOBEDO Group</p>

                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='linkdiv' >
                                <h5 className='links'>
                                    Service Areas
                                </h5>
                                <ul className='links_ul'>
                                    <li>
                                        <Link to='/starategy'>
                                            Strategy Practice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/technology'>
                                            Technology Practice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/digital_transformation'>
                                            Digital Transformation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/shared_services'>
                                            Shared Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='linkdiv' >
                                <h5 className='links'>
                                    Industries
                                </h5>
                                <ul className='links_ul'>
                                    <li>
                                        Healthcare Lifesciences
                                    </li>
                                    <li>
                                        BFSI
                                    </li>
                                    <li>
                                        Consumer & Retail
                                    </li>
                                    <li>
                                        Manufacturing
                                    </li>
                                    <li>
                                        Travel & Hospitality
                                    </li>
                                    <li>
                                        Public Sector
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='linkdiv' >
                                <h5 className='links'>
                                    About Us
                                </h5>
                                <ul className='links_ul'>
                                    <li>
                                        <Link to='/about/#story'>
                                            The MOBEDO Story
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about/#guides'>
                                            What guides us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about/#coreteam'>
                                            Our Core Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about/#partofus'>
                                            Be Part of us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row line_above'>
                <div className='col-md-6'>
                    <ul className='privacy_policy'>
                        <li>© {(new Date().getFullYear())} MOBEDO Consulting </li>
                        <li className='under_line' > <Link className='under_line' to='/privacypolicy' > Privacy Policy</Link></li>
                        {/* <li className='under_line'>General Conditions</li> */}
                    </ul>
                </div>
                <div className='col-md-6 text-end'>
                    <ul className='socialmediaicons'>
                        <li>
                            <div>
                                <a href="https://www.facebook.com/profile.php?id=100083091289444&mibextid=ZbWKwL" target="_blank"><img src="/fb2.png" alt="" /></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://www.linkedin.com/in/mobedo-consulting-8450ba239" target="_blank"><img src="/linkedin.png" alt="" /></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/twitter.png" alt="" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/youtube1.png" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



        </div>



    )
}
