import React, { Component } from 'react';
import ProjectItem from './projectItem';
import { elastic as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'



// TODO: Use sdbeer website to find out how to use sub params in routing for react router and link each click
// to their own component



class Projects extends Component {
  constructor(props){
      super(props)
      this.handleProjChange = this.handleProjChange.bind(this)
    }
  state= {
    projectNumber: 0,
    projects: [{projectBackground: `linear-gradient(0.25turn, #186E59, #1F8A70)`,
              projectHeader: 'Nearby Locations App',
              projectSubheader: 'React Google Maps Application',
              projectType: 'Personal Project',
              websiteUrl: '',
              projectDescription: 'This single-page application uses React-google-maps and recompose library to render a map onscreen of your current location along with the retrieval of 8 nearby locations in the form of map markers. These map markers will display information of these nearby places to your current location. This project helped me learn about RESTful APIs, React component composition, as well as React state propagation.',
              projectPreview: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/googe+map+mockupv2.png',
              projectPrimary: '#FD7400',
              projectSecondary: 'white',
              visitProject: 'GO TO WEBSITE',
              projectLogo: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Map-Marker-Free-Download-PNG.png'
            },
              {projectBackground: `#252831`,
              projectHeader: 'Restaraunt Reviews App',
              projectSubheader: 'Native Javascript Web Application',
              projectType: 'Personal Project',
              websiteUrl: '',
              projectDescription: 'For this Restaurant Reviews projects, I incrementally convert a static webpage to a mobile-ready web application. I took a static design that lacks accessibility and, after adding database helper functions and fetching data, I converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for my users.',
              projectPreview: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Restaraunt+reviews-min.png',
              projectPrimary: '#FFA500',
              projectSecondary: 'white',
              visitProject: 'GO TO WEBSITE',
              projectLogo: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/GjHyptq.png'
            }]
  }

  handleProjChange = (iterate) => (e) => {
    this.setState({
      projectNumber: this.state.projectNumber <= 7 || this.state.projectNumber >= -1 ? this.state.projectNumber + iterate : 0
    })
     console.log(this.state.projectNumber)
  }

  render() {

    // const {projectNumber, visitProject, projectPrimary, projectSecondary, projectBackground, projectHeader, projectSubheader, projectType, websiteUrl, projectDescription, projectPreview} = this.state
    return (
      <div>
        <div id="outer-container">
          <Menu  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
           <Link to="/" id="home" className="menu-item">Home</Link>
           <Link onClick={() => {
             this.setState({
               projectNumber: 0
             })
             console.log(this.state.projectNumber)
           }
           } to="/projects" id="projects" className="menu-item">Projects</Link>
           <Link to="/about" id="about" className="menu-item">About</Link>
           <Link to="/blog" id="blog" className="menu-item">Blog</Link>
           <Link to="/contact" id="contact" className="menu-item">Contact</Link>
          </Menu>

          <main id="page-wrap" onClick={() => console.log(this.state.projectNumber)}>
             {this.state.projects
               .filter(p => this.state.projects
                 .indexOf(p) === this.state.projectNumber)
                  .map((proj) =>
                    <section key={proj.projectHeader} style={{background: proj.projectBackground, position:'relative'}}>
                      <div id="projNav">
                        <svg className="navItem" onClick={this.handleProjChange(-2)} height="36" width="36">
                          <circle cx="18" cy="18" r="18" stroke="none" fill={proj.projectSecondary} />
                        </svg>
                        <svg className="navItem" onClick={this.handleProjChange(-1)} height="36" width="36">
                          <circle cx="18" cy="18" r="18" stroke="none" fill={proj.projectSecondary} />
                        </svg>
                        <div id="selectedNav" style={{borderRadius: '50px', backgroundImage: `url(${proj.projectLogo})`}} />
                        <svg className="navItem" onClick={this.handleProjChange(1)} height="36" width="36">
                          <circle cx="18" cy="18" r="18" stroke="none" fill={proj.projectSecondary} />
                        </svg>
                        <svg className="navItem" onClick={this.handleProjChange(2)} height="36" width="36">
                          <circle cx="18" cy="18" r="18" stroke="none" fill={proj.projectSecondary} />
                        </svg>
                      </div>
                      <ProjectItem
                        projectHeader = {proj.projectHeader}
                        projectSubheader = {proj.projectSubheader}
                        projectType = {proj.projectType}
                        websiteUrl = {proj.websiteUrl}
                        projectDescription = {proj.projectDescription}
                        projectPreview = {proj.projectPreview}
                        projectPrimary = {proj.projectPrimary}
                        projectSecondary = {proj.projectSecondary}
                        visitProject = {proj.visitProject}
                      />
                    </section>
              )}
          </main>
      </div>
    </div>
    )
  }
}

export default Projects
