import React from 'react';

const ProjectListItem = (props) => {
  console.log(props.rowDescription)
  return (
    <div>
      <h2 style={{fontWeight: '600'}}>{props.rowHeader}</h2>
      <h4>{props.rowSubheader}</h4>
      {props.rowDescription.length > 3 ?
      <ul>
          {props.rowDescription.map((bullet,ind) =>
          <li key={ind}>{bullet}</li>
        )}
          </ul>
          :
        <p>{props.rowDescription}</p>
      }
    </div>
  )
}
export default  ProjectListItem
//`p.rowDescriptionsList${[i+1]}` ? `p.rowDescriptionsList${[i+1]}` : `p.DescriptionsRegular${[i+1]}` || null


{/* rowDescriptionsList = {p.rowDescriptionsList[i]}
rowDescriptionsRegular = {p.rowDescriptionsRegular[i]} */}
{/* `p.rowDescriptionsList${[i+1]}` ? `p.rowDescriptionsList${[i+1]}` : `p.DescriptionsRegular${[i+1]}` || null  */}
