import React, { Component } from 'react';
import ProjectListItem from './projectListItem'



class Projects extends Component {

  render() {

    const {p, i, right} = this.props
    console.log(Object.entries(p))
    let arrayConversion= Object.entries(p)
    return (
      <div className="grid-x" id="projItemContainer" style={{background: p.projectBackground, height: '100%', width: '100%'}}>
        <div className="cell large-5 grid-x align-middle align-center" id="projInfoContainer">
          <div className="cell" style={{padding: '0 0 70px 0', margin: 0, animation: `slideIn${right ? 'Left' : 'Right'} ease-out 1s`}}>
            <h1 id="projHeader" style={{color: p.projectPrimary}} className="projItem" >{p.projectHeader}</h1>
            <h3 id="projSubheader" style={{color: p.projectSecondary}} className="projItem" >{p.projectSubheader}</h3>
            <h4 style={{color: p.projectSecondary}} className="projItem" >{p.projectType}</h4>
            <a style={{fontWeight: 700, color: p.projectBackground, cursor: 'pointer', margin: '25px 0', background: p.projectSecondary, padding: '12px 12px', borderRadius: '15px', fontSize: '80%'}} className="projItem"  href={p.websiteUrl}>{p.visitProject}</a>
            <p id="projDescription" style={{color: p.projectSecondary}} className="projItem" >{p.projectDescription}</p>
            <svg className="cell" style={{stroke: p.projectPrimary, marginTop: '50px'}} id="learnMore" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.32 62.33">
            <title>down arrow</title>
            <polyline points="3.66 4.76 68.66 54.76 133.66 4.76"/>
          </svg>
        </div>
      </div>
      <div className="cell grid-x large-7 align-middle align-center" id="projImgContainer" style={{animation: `slideIn${right ? 'Right' : 'Left'} ease-out 1s`}}>
        {p.videoUrl ?
          <video playsInline autoPlay muted loop style={{maxHeight:'800px', maxWidth: '400px', minWidth: '50px'}}>
            <source src={p.videoUrl} type="video/mp4" />
            // <source src={p.videoUrl} type="video/ogg" />
            Your browser does not support the video tag.
          </video> :
          <img alt={`${p.projectHeader}img${i}`} style={{maxHeight: '900px', maxWidth: '900px'}} className="projImg cell" src={p.projectPreview} />}
        </div>

         {arrayConversion.slice(14, 22)
           .filter(description => description[1].length > 0)
           .map((descrip, index) =>

              <ProjectListItem
                rowHeader = {p.rowHeader[index]}
                rowSubheader = {p.rowSubheader[index]}
                rowDescription = {descrip[1]}
                rowImage = {p.imageRows[index]}
                rowalternate = {index%2 == 0 ? 'even' : 'odd'}
                key={`descrip${descrip[0]}`}
                rowNumber = {index}
              />

        )}
        </div>

      )
    }
  }

  export default Projects
