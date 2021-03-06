import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import '../../styling/slide-styles.scss';
import InstaCardContainer from './instacard/instaCardContainer';
import SearchRegExp from './searchRegExp'
import LazyLoad from 'react-lazy-load';



window.onload = () => {
  document.body.onmousewheel = function(e) {
    if (e.target.id === 'el') return;
    e.preventDefault();
    e.stopPropagation();
  }
}


class ProjectListItem extends Component {

  state = {
    rowHeader: this.props.rowHeader,
    rowSubheader: this.props.rowSubheader,
    rowDescription: this.props.rowDescription,
    rowAlternate: this.props.rowAlternate,
    rowNumber: this.props.rowNumber,
    rowImage: this.props.rowImage,
    contentAddition: this.props.contentAddition,
    rowIcon: this.props.rowIcon,
    numberOfRows: this.props.numberOfRows
  }


  componentDidMount() {
     setTimeout(() => document.body.onmousewheel = null, 600)
   }
  componentWillUnmount() {
    document.body.onmousewheel = function(e) {
      if (e.target.id === 'el') return;
      e.preventDefault();
      e.stopPropagation();
    }
  }


  render() {
    const {rowHeader, rowSubheader, rowDescription, rowNumber, rowAlternate, rowImage, contentAddition, rowIcon, numberOfRows} = this.state
    return (
      <LazyLoad
        offsetBottom={50}
        debounce={false}
        throttle={300}
        once onContentVisible={()=>
          ((rowNumber === 3 && numberOfRows === 4) || (rowNumber === 2 && numberOfRows === 3)  ?
          document.getElementById("projArrows").classList.add("projArrowVisible"): null)}>
          <div id="lazyLoadin" className=" projectRow grid-x align-center align-middle">
            {rowAlternate === 'even' ?
            <div className="cell large-6 medium 12 small 12 lazySlideInLeft ">
              {rowImage === "" ?
              <InstaCardContainer />
              :
              <img alt={`${rowHeader}img${[rowNumber]}`} src={rowImage} id={rowImage.endsWith('bentobot.svg') ? 'bentoBot' : ""} />
            }
          </div>
          :
          null}
          <div className="cell large-6 projDescrip">
            <div className="lazySlideInRight" style={{display: 'flex', flexDirection: 'row'}}>
              <img id="rowIcon" src={rowIcon[rowNumber]} alt={`${rowHeader}img${[rowNumber]}`}
                style={{maxHeight: "55px", margin: '0, paddingRight: 12px'}} />
              <h2 style={{fontWeight: '600'}}>{rowHeader}</h2>
            </div>
            <h4 className="lazySlideInLeft">{rowSubheader}</h4>
            {rowDescription.length > 1 ?
              <ul className="lazySlideInLeft" >
                {rowDescription.map((bullet,ind) =>
                  <span key={ind} >
                    <li>{bullet}</li>
                    <br></br>
                  </span>
                )}
              </ul>
              :
              <p className="lazySlideInRight">{rowDescription}</p>
            }
            {contentAddition ?  (typeof contentAddition === 'string') ?
            <img style={{maxHeight: '490px'}} alt={contentAddition.substring(4,20)} src={contentAddition} />
            :
            null
            :
            null
          }
        </div>
        {rowAlternate === 'odd' ?
        typeof contentAddition === 'object' ?
        <div className="cell large-6 lazySlideInRight ">
          <AwesomeSlider >
            <div data-src={contentAddition[0]} />
            <div data-src={contentAddition[1]} />
            <div data-src={contentAddition[2]} />
          </AwesomeSlider>
        </div>
        :
        <div className="cell large-6 lazySlideInLeft">
          {rowImage === undefined ?
            <SearchRegExp />
            :
            <img alt={`${rowHeader}img${[rowNumber]}`} src={rowImage} />
          }
        </div>
        :
        null}
      </div>
    </LazyLoad>

  )
}
}
export default  ProjectListItem
