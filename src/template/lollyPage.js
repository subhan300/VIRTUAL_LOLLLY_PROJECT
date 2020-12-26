import React from "react";
import Lolly from '../components/lolly'


export default function LollyPage({pageContext}) {
    console.log(pageContext,"pagecontext")


//   const {location, pageContext} = lolly;
  return (
    <div>

      <h5 className="sharableLinkContainer">Your sharable link: </h5>{" "}
      <span className="sharableLink">
        {" "}
        {/* {`https://pedantic-williams-05140f.netlify.app${location.pathname}/`} */}
      </span>
      <div className="recievedContentContainer">
        {/* <Lolly
          fillLollyTop={pageContext.lolly.topColor}
          fillLollyMiddle={pageContext.lolly.mediumColor}
          fillLollyBottom={pageContext.lolly.bottomColor}
        /> */}
        <Lolly />

        <div className="recievedTextContainer">
            <h1>remaining</h1>
          {/* <h3>HI {pageContext.lolly.recipientName}</h3>
          <p>{pageContext.lolly.message}</p>
          <h4>From: {pageContext.lolly.senderName}</h4> */}
        </div>
      </div>
    </div>
  );
}