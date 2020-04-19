import React from 'react'
import Container from '@material-ui/core/Container';
import '../style/About.css';

export default function Projects() {
    const Projects = [
        {
            id: 1,
            name: "Password Generator",
            image: 'https://github.com/TuckerV/portfolio-professional/blob/master/src/images/password-generator.png?raw=true',
            description:
                "User can pick from a set of parameters, and generate a random password which they can save.",
            built: "Javascript, HTML, CSS, Jquery.",
            site: "https://tuckerv.github.io/Password-Generator/",
            github: "https://github.com/TuckerV/Password-Generator"
        },
        {
            id: 2,
            name: "Recreational Sports League",
            image: "https://github.com/TuckerV/portfolio-professional/blob/master/src/images/Project2.png?raw=true",
            description:
                "Users can create, search for, and join leagues, in this league managing interface.",
            built:
                "Node, JavaScript, Passport JS, Express JS, Bootstrap, JQuery, MySql.",
            site: "https://soggybottomleaguemanager.herokuapp.com/",
            github: "https://github.com/seanianking/SoggyBottomboys-Project2"
        },
        {
            id: 3,
            name: "Day Planner",
            image: "https://github.com/TuckerV/portfolio-professional/blob/master/src/images/planner.png?raw=true",
            description: "As a user you can take plan each hour of the day and save information",
            built: "Node, Express JS, JavaScript, JQuery Bootstrap",
            site: "https://tuckerv.github.io/daily-planner/",
            github: "https://github.com/TuckerV/daily-planner"
        },
        {
            id: 4,
            name: "Eat-Da-Burgers",
            image: "https://github.com/TuckerV/portfolio-professional/blob/master/src/images/MVC-burger.png?raw=true",
            description: "Add and remove burgers from a menu.",
            built: "Node, Express JS, MVC, MySql, Handlebars, JavaScript, JQuery Bootstrap,",
            site: "https://mvc-eat-da-burger.herokuapp.com/",
            github: "https://github.com/TuckerV/MVC-eat-da-burger"
        },
        {
            id: 5,
            name: "Streaming Services Search",
            image: "https://github.com/TuckerV/portfolio-professional/blob/master/src/images/streaming-search.jpg?raw=true",
            description: "Find out when the next events will be",
            built:
                "HTML, CSS, JavaScript, JQuery, Omdb API",
            site: "https://tuckerv.github.io/soggybottomboys-project1/",
            github: "https://github.com/TuckerV/soggybottomboys-project1"
        },

        {
            id: 6,
            name: "Weather App",
            image: "https://github.com/TuckerV/portfolio-professional/blob/master/src/images/weather-planner.png?raw=true",
            description:
                "Take a look at todays weather by searching cities. Find out the 5 day forecast.",
            built: "Weather API, Javascript, Jquery, Bootstrap, HTML, CSS.",
            site: "https://tuckerv.github.io/weather-dashboard/",
            github: "https://github.com/TuckerV/weather-dashboard"
        }
    ];
    return (
        <Container className="aboutBody">
            <div className="row justify-content-center m-0 p-0">
                <div className="col-11 div-title" >
                    Projects
                </div>
            </div>
            <div className="row mt-5 align-items-center">
                {Projects.map((project, i) => (
                    <div className="col-lg-4  col-md-6 col-sm-12  align-self-center" key={i}>
                        <div className="card project-card dtl24 mt-3">
                            <img
                                src={project.image}
                                className="card-img-top img-fluid"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p>{project.description}</p>
                                <h5>Built with</h5>
                                <p>{project.built}</p>
                                <div className="card-btn dtl">
                                    <a
                                        href={project.site}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn top"
                                    >
                                        Deployment
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn bottom"
                                    >
                                        Github Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
