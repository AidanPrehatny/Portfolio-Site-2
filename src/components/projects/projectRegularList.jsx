import React from 'react';

const ProjectRegularList = (props) => {

  return (
    <div>
      <h2 style={{fontWeight: '600'}}>{props.rowHeaders}</h2>
      <p>{props.rowDescriptionsRegular}</p>
    </div>
  )
}

export default ProjectRegularList
