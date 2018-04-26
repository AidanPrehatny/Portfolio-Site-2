import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import Dropzone from 'react-dropzone'

function InstaCard (props) {
  let gucci = " animated bounceIn "
  return (
    <div className="cell grid-x align-middle align-center">
      <main className="cardMain cell ">
        <section className="grid-x cardHead grid-padding-x ">
          <Dropzone
            className="cell clientImg"
            style={{border: "none", height: "60px"}}
            activeClassName= "pulseDrag"
            acceptClassName = "acceptClassName"
            rejectClassName= "pulseReject"
            onDrop={(accepted,rejected) => props.onDrop(accepted,rejected,true)}>
            {props.imageProfileUrl ?  (
              <img alt="dragNdrop" className={gucci} style={{objectFit: "cover", width: "60px", height: "60px", position: "relative"}} src={props.imageProfileUrl} width="100%"></img>
            ):(
              <span>
                <p className="hide-for-small-only profMsg"> Drag Image Here </p>
                <p style={{paddingTop: "11px", fontSize: "90%"}} className="hide-for-large profMsg"> Upload Image Here </p>
              </span>
            )}
          </Dropzone>
          <input onChange={(e) => props.changeInstaCardState({name: e.target.value})}
            style={{margin: "auto 0"}}
            className="text-middle clientName cell large-shrink medium-6 small-8"
            type="text"
            value={props.name}placeholder="Type Client Name"/>
          </section>
          <Dropzone
            onDrop={(accepted,rejected) => props.onDrop(accepted,rejected)}
            disableClick = {true}
            activeClassName= "pulseDrag"
            acceptClassName = "acceptClassName"
            rejectClassName= "pulseReject"
            onDoubleClick={() => props.changeInstaCardState({liked: !props.liked})}
            className={(props.imagePreviewUrl ? ' cardImg' : 'cardnoImg') + (props.liked ? ' heartPopUp ' : '') + '  cardPhoto grid-x align-middle align-center text-center'}>
            <div className="text-center">
              <h3 style={{color: "grey"}}>
                {props.imagePreviewUrl ?  (
                  <img alt="dragNdrop" className={gucci + props.imagePreviewUrl.substring(0,1)} src={props.imagePreviewUrl} width="100%" height="100%"/>
                ):(
                  <div>
                    <AwesomeButton bubbles size="large" type="primary">
                    <input
                      style={{background: 'none', zIndex: '1000', border: 'none', color: 'none', fontSize: '0', position: 'absolute', overflow:'hidden', height: '110px', width: '200px', marginTop: '-40px', marginLeft: '-100px'}}
                      className="inputBtn"
                      type='file'
                      onChange={props.handleImageChange} />
                      <p className="uploadBtn" style={{margin: '0', fontSize: '125%', color: 'white', position: 'relative'}}> Upload Image !</p>
                    </AwesomeButton>
                    <h4 style={{paddingTop: '.5rem', userSelect: 'none'}}>
                      Or... drag from a folder!
                    </h4>
                  </div>
                  )}
                </h3>
              </div>
            </Dropzone>
            <article className="lowerCard">
              <section className="grid-x align-left smi">
                <svg version="1" onClick={() => props.changeInstaCardState({liked: !props.liked})}
                  style={{fill: props.liked ? 'red' : 'none', stroke: props.liked ? 'red' : 'black'}} className="iconHeart" viewBox="0 0 51 51">
                  <path className={props.liked ? 'animated bounceIn' : ''} d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"/>
                </svg>
                <svg className="cell align-self-top iconsmi" version="1.1" viewBox="-159 267.8 291.5 324" >
                  <path d="M65.8,477.9l-31.8-11c-3.2-1.1-6.8-0.9-9.8,0.8c-13.9,7.5-30.2,11.1-47.5,9.2c-37.1-4.2-66.9-34.3-70.6-71.4  C-99,355.1-57.4,313-7.3,317.1c36.5,3,66.8,31.1,72.5,67.2c2.7,16.9-0.1,33.1-6.6,47c-1.3,2.7-1.7,5.8-0.8,8.7L68,475.9  C68.3,477.2,67,478.3,65.8,477.9z"/>
                </svg>
              </section>
              <section className="grid-x align-left">
                <h5 id="likeCount">
                  {props.liked ? '1,504 likes' : '1,503 likes'}
                </h5>
              </section>
              <section className="caption grid-x align-left ">
                <h5 id="clientName" className="cardCapName">
                  {props.name || 'Client Name'}
                </h5>
                <input className="cardCaption" placeholder="Enter Caption Here" />
              </section>
              <section className="comment">
                <hr />
                <input
                  className="commentbox"
                  type="text"
                  placeholder="Add a comment..." />
                </section>
              </article>
            </main>
          </div>
        )
      }

      export default InstaCard
