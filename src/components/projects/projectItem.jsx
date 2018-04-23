import React, { Component } from 'react';




class ProjectItem extends Component {

  render() {
    const {visitProject, projectPrimary, projectSecondary, projectBackground, projectHeader, projectSubheader, projectType, websiteUrl, projectDescription, projectPreview} = this.props
    return (
        <div className="grid-x" id="projItemContainer" style={{background: projectBackground, height: '100%', width: '100%'}}>
          <div className="cell large-5 grid-x align-middle align-center" id="projInfoContainer">
            <svg className="cell" style={{stroke: projectPrimary}} id="learnMore" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.32 62.33">
              <title>down arrow</title>
                  <polyline points="3.66 4.76 68.66 54.76 133.66 4.76"/>
            </svg>
            <div className="cell" style={{padding: '0 0 70px 0', margin: 0}}>
              <h1 id="projHeader" style={{color: projectPrimary, marginBottom: '40px'}} className="projItem" >{projectHeader}</h1>
              <h3 id="projSubheader" style={{color: projectSecondary}} className="projItem" >{projectSubheader}</h3>
              <h4 style={{color: projectSecondary}} className="projItem" >{projectType}</h4>
              <a style={{fontWeight: 600, color: projectPrimary, cursor: 'pointer'}} className="projItem"  href={websiteUrl}>{visitProject}</a>
              <p id="projDescription" style={{color: projectSecondary}} className="projItem" >{projectDescription}</p>
            </div>
          </div>
          <div className="cell grid-x large-7 align-middle align-center" id="projImgContainer">
            <img style={{maxHeight: '900px', maxWidth: '900px'}} className="projImg" src={projectPreview} className="cell" />
          </div>
        </div>
    )
  }
}

export default ProjectItem
