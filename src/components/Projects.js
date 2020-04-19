import React from 'react'
import Container from '@material-ui/core/Container';
import '../style/About.css';

export default function Projects() {    
    const Projects = [
        {
            id: 1,
            name: "Password Generator",
            image: "data:image/jpeg;base64,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",
            description:
            "User can pick from a set of parameters, and generate a random password which they can save.",
            built: "Javascript, HTML, CSS, Jquery.",
            site: "",
            github: ""
        },
        {
            id: 2,
            name: "Recreational Sports League",
            image: "data:image/jpeg;base64,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",
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
            image: "https://s27389.pcdn.co/wp-content/uploads/2019/09/AdobeStock_207714693.jpeg",
            description: "As a user you can take plan each hour of the day and save information",
            built: "Node, Express JS, JavaScript, JQuery Bootstrap",
            site: "",
            github: ""
        },
        {
            id: 4,
            name: "Eat-Da-Burgers",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJaxoUJyqlaELuoiksaXcSIHvrPVI0AZOGL0BemtwELID_-cKl&usqp=CAU",
            description: "Add and remove burgers from a menu.",
            built: "Node, Express JS, MVC, MySql, Handlebars, JavaScript, JQuery Bootstrap,",
            site: "",
            github: ""
        },
        {
            id: 5,
            name: "Streaming Services Search",
            image: "https://unofficed.com/wp-content/uploads/2017/08/Random-Walk-Theory.jpg",
            description: "Find out when the next events will be",
            built:
            "HTML, CSS, JavaScript, JQuery, Omdb API",
            site: "",
            github: ""
        },

        {
            id: 6,
            name: "Weather App",
            image: "data:image/png;base64,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",
            description:
            "Take a look at todays weather by searching cities. Find out the 5 day forecast.",
            built: "Weather API, Javascript, Jquery, Bootstrap, HTML, CSS.",
            site: "",
            github: ""
        }
    ];
    return (
        <Container className="aboutBody">
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
