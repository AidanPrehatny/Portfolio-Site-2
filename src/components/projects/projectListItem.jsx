import React, { Component } from 'react';

class ProjectListItem extends Component {
  state = {
    rowHeader: this.props.rowHeader,
    rowSubheader: this.props.rowSubheader,
    rowDescription: this.props.rowDescription,
    rowAlternate: this.props.rowAlternate,
    rowNumber: this.props.index,
    rowImage: this.props.rowImage
  }
  render() {
    const {rowHeader, rowSubheader, rowDescription, rowNumber, rowAlternate, rowImage} = this.state
    console.log(rowDescription)
    console.log(rowHeader)
    return (
      <div className="projectRow grid-x align-center align-middle">
        {/* {console.log(descrip[1])} */}
        <div className="cell large-6">
          <img alt={`${rowHeader}img${[rowNumber]}`} src={rowImage} />
      </div>
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
</div>
</div>

)
}
}
export default  ProjectListItem
