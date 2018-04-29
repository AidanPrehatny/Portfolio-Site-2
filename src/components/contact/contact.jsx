import React from 'react'
import { pushRotate as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'







  const ContactForm = () => (
    <div id="outer-container" className="mainContent" style={{background: 'white', height: '100vh', width: '100vw'}}>
      <Menu style={{color: 'purple'}} customCrossIcon={ false } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <Link to="/" id="home" className="menu-item">Home</Link>
        <Link onClick={() => {
          this.setState({
            projectNumber: 0
          })
        }
      } to="/projects" id="projects" className="menu-item">Projects</Link>
      <Link to="/about" id="about" className="menu-item">About</Link>
      <a target="_blank" rel='noreferrer noopener' className="menu-item"  href="http://enomer.edublogs.org/">Blog</a>
      <Link to="/contact" id="contact" className="menu-item">Contact</Link>
    </Menu>
      <div style={{ minHeight: '400px'}} id="page-wrap" className="grid-x align-middle align-center text-center">
        <div style={{color: 'black'}}>
          <h1 style={{fontSize: '68px', fontWeight: '900'}} className="cell">Say Hello</h1>
          <h4 className="cell">General Contact:</h4>
          <h5 className="cell">aprehatny@rocketmail.com</h5>
        </div>
      </div>
      <div className="grid-x" style={{padding: '3em'}}>


        <form className="contact-form"  method="post" >
          <div className="form-field">
            <label htmlFor="name" className="grid-x align-middle">
              <div className="label-content cell large-4">Hi My Name is:</div>
              <input type="text" name="name" className="cell large-3" required />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="email" className="grid-x align-middle">
              <div className="label-content cell large-4">Lets Chat! My email is*</div>
              <input type="email" name="email" className="cell large-3" required />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="number" className="grid-x align-middle">
              <div className="label-content cell large-4">My number is</div>
              <input type="number" name="number" className="cell large-3" required />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="message" className="grid-x align-middle">
              <div className="label-content cell large-4">Message</div>
              <textarea className="stretch cell" name="message large-3" rows="5" required />
            </label>
          </div>

          <button id="sendMe" style={{cursor: 'pointer', fontSize: '28px', border: 'solid 4px #AF3566', padding: '8px 12px'}} type="submit">Send Me!</button>

          <div>
            { window.location.hash === '#success' &&
              <div id="success">
                <p>Your message has been sent!</p>
              </div>
            }
            { window.location.hash === '#error' &&
              <div id="error">
                <p>An error occured while submitting the form.</p>
              </div>
            }
          </div>
        </form>
      </div>
    </div>
  )

export default ContactForm
