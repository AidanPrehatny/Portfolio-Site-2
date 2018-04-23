import React from 'react';

const ProjectDescriptionsList = (props) => {
  // const {rowHeaders, rowSubheaders, rowDescriptionsList} = this.props
  return (
    <div>
      <h2 style={{fontWeight: '600'}}>{props.rowHeaders}</h2>
      <h4>{props.rowSubheaders}</h4>
      <ul>
        {props.rowDescriptionsList.map((bullet,i) =>
          <li key={i}>{bullet}</li>
        )
      }
      </ul>
    </div>
  )
}
export default  ProjectDescriptionsList
