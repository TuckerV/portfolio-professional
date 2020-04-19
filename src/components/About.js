import React from 'react'
import Container from '@material-ui/core/Container';
import "../style/About.css";

export default function About() {
    return (
        <Container className="aboutBody">
            <div id="about-me-div" className="populated-div ">
                            <div className="row justify-content-center m-0 p-0">
                                <div className="col-11 div-title" >
                                    About Me
                                </div>
                            </div>
                            <div className="row row-about justify-content-center">
                                <div className="col-11">
                                    <img src="https://raw.githubusercontent.com/TuckerV/updated-portfolio/master/assets/style/profile.jpg" className="profile-pic" alt="Prof Pic"/>
                                    <p id="about-me-text">
                                        Born and raised in Seattle Washington, I came to Utah to attend Brigham Young University. During my studies I met my wife, a Utah native, and we decided to stay in Utah. 
                                        Upon receiving my B.S. in Economics, I decided to enroll in the University of Utah coding Bootcamp to learn web development. My decision to try my hand at becoming a developer
                                         was born out of a drive to follow my passions. My first passion being technology, and anything having to do with computers, is what drew me to the tech industry. You can find me 
                                         building and fiddling with my computer in my free time, and planning future upgrades. My other passion is being a creator. I derive the most satisfaction in my hobbies through 
                                         creating a product and admiring the various projects that I am able to create from scratch. 
                                         Feel free to contact me in whatever way is easiest. Click on the resume tab on the left to pull up a link to my resume. 
                                    </p>
                                </div>
                            </div>
                        </div>
        </Container>
    )
}
