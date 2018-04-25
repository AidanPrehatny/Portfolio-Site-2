import React, { Component } from 'react';

class ProjectListItem extends Component {
 state = {
  rowHeader: this.props.rowHeader,
  rowSubheader: this.props.rowSubheader,
  rowDescription: this.props.rowDescription,
  rowAlternate: this.props.rowAlternate,
  rowNumber: this.props.rowNumber,
  rowImage: this.props.rowImage,
  contentAddition: this.props.contentAddition
 }
 render() {
  const {rowHeader, rowSubheader, rowDescription, rowNumber, rowAlternate, rowImage, contentAddition} = this.state
  return (
   <div className="projectRow grid-x align-center align-middle">
    {rowAlternate === 'even' ?
    <div className="cell large-6">
     <img alt={`${rowHeader}img${[rowNumber]}`} src={rowImage} />
    </div>
    :
    null}
    <div className="cell large-6 projDescrip">
     <h2 style={{fontWeight: '600'}}>{rowHeader}</h2>
     <h4>{rowSubheader}</h4>
     {rowDescription.length > 1 ?
      <ul>
       {rowDescription.map((bullet,ind) =>
        <li key={ind}>{bullet}</li>
       )}
      </ul>
      :
      <p>{rowDescription}</p>
     }
     {contentAddition ? typeof contentAddition === 'string' ?
     <video playsInline autoPlay muted loop id="contentAdditionVid" className="cell">
      <source src={contentAddition} type="video/mp4" />
      Your browser does not support the video tag.
     </video>
     :
     null  // TODO: the other type of contentAddition will likely be a component that takes in props to define dropzone for gander and byobcontainer for (nomnombyob)
     :
     null}
    </div>
    {rowAlternate === 'odd' ?
    <div className="cell large-6">
     <img alt={`${rowHeader}img${[rowNumber]}`} src={rowImage} />
    </div>
    :
    null}
   </div>

  )
 }
}
export default  ProjectListItem
