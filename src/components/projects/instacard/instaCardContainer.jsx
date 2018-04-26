import React, { Component } from 'react';
import InstaCard from './instaCard'

class InstaCardContainer extends Component {
  constructor(props){
    super(props)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }
  state = {
    name: '',
    liked: false,
    imagePreviewUrl: '',
    imageProfileUrl: ''
  }

  changeInstaCardState = newState => this.setState( newState )

  handleImageChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

    onDrop(files, rejectedFiles,isProfile) {
      let reader = new FileReader();
      let file = files[0];
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if(!isProfile){
          this.setState({
            imagePreviewUrl: reader.result
          });
        } else {
          this.setState({
            imageProfileUrl: reader.result
          });
        }
      }

    }

  render() {

    const {name, caption, liked, imagePreviewUrl, imageProfileUrl} = this.state
    return (
      <div className="cell text-center">
        <div className="instaCard grid-x align-middle align-center">
          <h1 className="cardHead">Instagram Post Mockup Generator</h1>
            <Link to="/freebies/profile">
              <svg id="navArrow" viewBox="0 0 1000 1000">
                <g>
                  <path d="M216.6,75.5L282.1,10l501.3,490.6L283.1,990l-64.8-64.8l429.8-422.5L216.6,75.5z"/>
                </g>
              </svg>
            </Link>
          <InstaCard
            onDrop={this.onDrop}
            imagePreviewUrl={imagePreviewUrl}
            imageProfileUrl={imageProfileUrl}
            handleImageChange={this.handleImageChange}
            liked={liked}
            name={name}
            caption={caption}
            changeInstaCardState = {this.changeInstaCardState} />
          </div>
        </div>
      )
    }
  }

  export default InstaCardContainer
