import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { pushRotate as Menu } from 'react-burger-menu'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './AwsSliderStyles.scss';

class About extends Component {
  render() {
    return (
      <div id="outer-container">
        <Menu customCrossIcon={ false } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link to="/" id="home" className="menu-item">Home</Link>
          <Link to="/projects" id="projects" className="menu-item">Projects</Link>
          <Link to="/about" id="about" className="menu-item">About</Link>
          <a target="_blank" rel='noreferrer noopener' className="menu-item"  href="http://enomer.edublogs.org/">Blog</a>
          <Link to="/contact" id="contact" className="menu-item">Contact</Link>
        </Menu>
        <main id="page-wrap" className="mainAbout grid-x align-center align-middle">
          <div id="aboutSlider" className="cell large-8" style={{maxHeight: '730px', padding: '15px'}}>
            <AwesomeSlider cssModule={AwsSliderStyles}>
              <div data-src="https://i.imgur.com/MLzV7zb.jpg" />
              <div data-src="https://i.imgur.com/fQzHmQF.jpg" />
              <video playsInline autoPlay loop data-src="https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/aboutvegasvid.mp4" />
              <div data-src="https://i.imgur.com/59Gptr9.jpg" />
            </AwesomeSlider>
          </div>
          <div
            id="aboutContainer"
            className="grid-x cell large-4 align-middle align-center" >
            <div
              id="aboutPanel"
              className=" cell">
              <h2 style={{textAlign: 'center', flex: '1 0 100%', fontWeight: '700', padding: '25px'}} className="">About Me</h2>
              <p
                className=""
                style={{fontSize: '14px', fontWeight: '700', color: 'white', flex: '1 0 100%'}}>
                I specialize in Users. From Interface to Experience, my goal
                lies in creating things that just work. I develop pixel based
                solutions for Front End Mobile and Web applications using
                React and React Native.
                <br></br>
                <br></br>
                Designing for the web is not a job it's a lifestyle. As modern
                technologies progress so does the challenge of adapting.
                Synchronicity in Front End development is key, bridging
                the gap between design and development bridges the gap
                between user and end product.
                <br></br>
                <br></br>
                Through the design of the user experience brings my love
                for problem solving by allowing me to dictate the skeleton
                of the project. The UX process is only the beginning. as I
                then command the layout of the page through careful
                implementation of the user interface. With information
                architecture prepared, my development techniques align
                with my design skills as i identify simple solutions allowing
                for users to focus on task and not tool.
              </p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default About
