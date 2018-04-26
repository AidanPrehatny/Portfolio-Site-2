import React, { Component } from 'react';
import InstaCard from './instacard'

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
