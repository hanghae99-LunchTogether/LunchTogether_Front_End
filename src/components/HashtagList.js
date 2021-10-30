import React from "react";

function Hashtag({ hashtag }) {
  return (
    <span>#{hashtag.hashtagcontent}</span>
  );
}

const HashtagList = ({ hashtags }) => {
  return (
    <div>
      {
        hashtags.map(
          (h,idx) => (<Hashtag hashtag={h} key={idx}/>)
        )
      }
    </div>
  );
};

export default HashtagList;
