import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { pushRotate as Menu } from 'react-burger-menu'


class Home extends Component {
  state = {
    videoURL: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/swirls-OPTIMIZED.mp4'
  }


  render() {
    return (
      <div id="outer-container" className="ballGame">
        <Menu customCrossIcon={ false } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
         <Link to="/" id="home" className="menu-item">Home</Link>
         <Link to="/projects" id="projects" className="menu-item">Projects</Link>
         <Link to="/about" id="about" className="menu-item">About</Link>
         <a target="_blank" rel='noreferrer noopener' className="menu-item"  href="http://enomer.edublogs.org/">Blog</a>
         <Link to="/contact" id="contact" className="menu-item">Contact</Link>
        </Menu>
        <img alt="mobileBackgroundImage" src="https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Artboard+1.png"
        className="mobileImg show-for-small-only" id="mobileImg" />
        <main id="page-wrap" className="mainContent">
          <video className="hide-for-small-only" style={{ background: '#af3566'}}
            playsInline muted={true} autoPlay loop id="apBackground">
            <source src={this.state.videoURL} type="video/mp4" />
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
