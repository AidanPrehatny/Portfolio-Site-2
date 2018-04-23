import React, { Component } from 'react';
import ProjectDescriptionsList from './projectDescriptionsList';
import ProjectRegularList from './projectRegularList'



class ProjectItem extends Component {

  render() {
    const {videoUrl, imageRows, rowHeaders, rowSubheaders, rowDescriptionsList1, rowDescriptionsList2, rowDescriptionsList3, rowDescriptionsList4, rowDescriptionsRegular1, rowDescriptionsRegular2, rowDescriptionsRegular3, rowDescriptionsRegular4, visitProject, projectPrimary, projectSecondary, projectBackground, projectHeader, projectSubheader, projectType, websiteUrl, projectDescription, projectPreview} = this.props
    return (
        <div className="grid-x" id="projItemContainer" style={{background: projectBackground, height: '100%', width: '100%'}}>
          <div className="cell large-5 grid-x align-middle align-center" id="projInfoContainer">

            <div className="cell" style={{padding: '0 0 70px 0', margin: 0}}>
              <h1 id="projHeader" style={{color: projectPrimary, marginBottom: '40px'}} className="projItem" >{projectHeader}</h1>
              <h3 id="projSubheader" style={{color: projectSecondary}} className="projItem" >{projectSubheader}</h3>
              <h4 style={{color: projectSecondary}} className="projItem" >{projectType}</h4>
              <a style={{fontWeight: 600, color: projectPrimary, cursor: 'pointer'}} className="projItem"  href={websiteUrl}>{visitProject}</a>
              <p id="projDescription" style={{color: projectSecondary}} className="projItem" >{projectDescription}</p>
              <svg className="cell" style={{stroke: projectPrimary, marginTop: '50px'}} id="learnMore" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.32 62.33">
                <title>down arrow</title>
                    <polyline points="3.66 4.76 68.66 54.76 133.66 4.76"/>
              </svg>
            </div>
          </div>
          <div className="cell grid-x large-7 align-middle align-center" id="projImgContainer">
            {videoUrl ?
              <video playsinline autoPlay muted loop style={{maxHeight:'800px', maxWidth: '400px', minWidth: '50px'}}>
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/ogg" />
                Your browser does not support the video tag.
            </video> :
            <img style={{maxHeight: '900px', maxWidth: '900px'}} className="projImg" src={projectPreview} className="cell" />}
          </div>
          <div className="projectRow grid-x align-center align-middle">

            <div className="cell large-6">
              <img src={imageRows[0]} />
            </div>
            <div className="cell large-6 projDescrip">
              {rowDescriptionsList1 ?
              <ProjectDescriptionsList
                rowHeaders = {rowHeaders[0]}
                rowSubheaders = {rowSubheaders[0]}
                rowDescriptionsList = {rowDescriptionsList1}
              />
              :
              <ProjectRegularList
                rowHeaders = {rowHeaders[0]}
                rowDescriptionsRegular = {rowDescriptionsRegular1}
              /> }
            </div>
          </div>

          <div className="projectRow grid-x align-center align-middle">
            <div className="cell large-6 projDescrip">
              {rowDescriptionsList2 ?
              <ProjectDescriptionsList
                rowHeaders = {rowHeaders[1]}
                rowSubheaders = {rowSubheaders[1]}
                rowDescriptionsList = {rowDescriptionsList2}
              />
              :
              <ProjectRegularList
                rowHeaders = {rowHeaders[1]}
                rowDescriptionsRegular = {rowDescriptionsRegular2}
              /> }
            </div>
            <div className="cell large-6">
              <img src={imageRows[1]} />
            </div>
          </div>

          <div className="projectRow grid-x align-center align-middle">
            <div className="cell large-6">
              <img src={imageRows[2]} />
            </div>
            <div className="cell large-6 projDescrip">
              {rowDescriptionsList3 ?
                <ProjectDescriptionsList
                  rowHeaders = {rowHeaders[2]}
                  rowSubheaders = {rowSubheaders[2]}
                  rowDescriptionsList = {rowDescriptionsList3}
                />
                :
                <ProjectRegularList
                  rowHeaders = {rowHeaders[2]}
                  rowDescriptionsRegular = {rowDescriptionsRegular3}
                /> }
              </div>
          </div>

          {imageRows[3] ?
          <div className="projectRow grid-x align-center align-middle">
            <div className="cell large-6 projDescrip">
              {rowDescriptionsList4 ?
              <ProjectDescriptionsList
                rowHeaders = {rowHeaders[3]}
                rowSubheaders = {rowSubheaders[3]}
                rowDescriptionsList = {rowDescriptionsList4}
              />
              :
              <ProjectRegularList
                rowHeaders = {rowHeaders[3]}
                rowDescriptionsRegular = {rowDescriptionsRegular4}
              /> }
            </div>
            <div className="cell large-6">
              <img src={imageRows[3]} />
            </div>
          </div>
          :
          null}

        </div>
    )
  }
}

export default ProjectItem
