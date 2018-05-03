import React, {Component} from 'react'
import { pushRotate as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'
import { AwesomeButtonProgress } from 'react-awesome-button';


class Contact extends Component {

  state= {
    contactFinished: false
  }

  contactDone(next) {
    this.setState({contactFinished: true})


  }

  render() {
    return (
      <div id="outer-container" className="mainContact">
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
      <div style={{ minHeight: '30vh'}} id="page-wrap" className="grid-x align-middle align-center text-center">
        <div style={{color: 'black'}}>
          <h1 style={{fontSize: '68px', fontWeight: '900'}} className="cell">Say Hello</h1>
          <h4 className="cell">General Contact:</h4>
          <h5 className="cell">aprehatny@rocketmail.com</h5>
        </div>
      </div>
      <div className="grid-x" style={{padding: '3em'}}>


        <form className="contact-form" method="post" >
          <div className="form-field">
            <label htmlFor="name" className="grid-x align-middle">
              <div className="label-content cell large-4">Hi My Name is:</div>
              <input id="formName" type="text" name="name" className="contactInput cell large-3" required />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="email" className="grid-x align-middle">
              <div className="label-content cell large-4">Lets Chat! My email is*</div>
              <input id="formEmail" type="email" name="email" className="contactInput cell large-3" required />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="number" className="grid-x align-middle">
              <div className="label-content cell large-4">My number is</div>
              <input id="formNumber" type="number" name="number" className="contactInput cell large-3" required />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="message" className="grid-x align-middle">
              <div className="label-content cell large-4">Message</div>
              <textarea id="formMessage" className="stretch cell" name="message large-3" rows="5" required />
            </label>
          </div>

          <div className={this.state.contactFinished ? 'progShow' : 'progHide'}>
            <AwesomeButtonProgress
              type="primary"
              progress={true}
              loadingLabel="Wait..."
              successLabel="Success!"
              bubbles={true}
              action={(element, next) => this.contactDone(next)}
              >
                <a
                  onClick={(e) => {
                  e.preventDefault()
                  let formInfo = {
                    name: document.getElementById('formName').value,
                    email: document.getElementById('formEmail').value,
                    number: document.getElementById('formNumber').value,
                    'message large-3': document.getElementById('formMessage').value,
                  }
                  const myRequest = new Request('/contact',
                  {
                    method: 'POST',
                    body: JSON.stringify(formInfo),
                    headers: {
                      'content-type': 'application/json'
                    },
                  });
                  fetch(myRequest)
                  .then((succ,err) => {
                  })
                }}>

              </a>
                Send Me!
              </AwesomeButtonProgress>
            </div>
            {this.state.contactFinished ?
              <h4 style={{fontWeight: '600'}}>Thanks! I'll get back to you shortly.</h4>
              :
              null}

            </form>
          </div>
        </div>
      )
    }
  }

  export default Contact
