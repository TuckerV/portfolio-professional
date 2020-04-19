import React from 'react'
import Container from '@material-ui/core/Container';
import '../style/About.css';
import Pdf from '../pdf/resume.pdf';

export default function Contact() {


    return (
        <Container className="aboutBody">
            <div className="row justify-content-center m-0 p-0">
                <div className="col-11 div-title" >
                    Contact
                </div>
            </div>
            <div className="row row-about justify-content-center devBorder">
                <div className="col-11 devBorder">
                    <div className="row justify-content-center">
                        <div className="col-12">
                        <p id="contact-text">
                            Email: tuckv@hotmail.com
                        </p>
                        <p>
                            Phone: 206-550-4761
                        </p>
                        <a target="_blank" rel="noopener noreferrer" href={Pdf}>
                            Resume
                        </a>
                        </div>
                    </div>
                    
                        <div className="row justify-content-center devBorder">
                            <div className="col-2">
                                <a target="_blank" rel="noopener noreferrer" className="iconEdit" href="https://www.instagram.com/tuckvassau">
                                    <i className="fab fa-instagram icon"></i>
                                </a>
                            </div>
                            <div className="col-2">
                                <a target="_blank" rel="noopener noreferrer" className="iconEdit" href="https://github.com/TuckerV">
                                    <i className="fab fa-github icon"></i>
                                </a>
                            </div>
                            <div className="col-2">
                                <a target="_blank" rel="noopener noreferrer" className="iconEdit" href="https://www.linkedin.com/in/tucker-vassau/">
                                    <i className="fab fa-linkedin icon"></i>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </Container>
    )
}
