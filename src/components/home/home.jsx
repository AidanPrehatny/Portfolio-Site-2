import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { elastic as Menu } from 'react-burger-menu'



class Home extends Component {
  state = {
    videoURL: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/swirls-homepage3.mp4'
  }


  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
         <Link to="/" id="home" className="menu-item">Home</Link>
         <Link to="/projects" id="projects" className="menu-item">Projects</Link>
         <Link to="/about" id="about" className="menu-item">About</Link>
         <Link to="/blog" id="blog" className="menu-item">Blog</Link>
         <Link to="/contact" id="contact" className="menu-item">Contact</Link>
        </Menu>
        <main id="page-wrap" className="mainContent">
          <video autoPlay loop id="apBackground">
            <source src={this.state.videoURL} type="video/mp4" />
            <source src={this.state.videoURL} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <section id="mainPage" className="grid-x align-middle align-center">
            <h1 id="mainIntro" className="cell ">
              Hi I’m Aidan,<br></br>
              I'm a Front End Developer based in San Diego.
            </h1>
          </section>
      </main>
      </div>
    )
  }

}

export default Home
