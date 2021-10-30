import React from "react";

const HashtagList = ({ hashtags }) => {
  return (
    <div>
      {hashtags.map((h, idx) => (
        <>
          <span>{h.text}</span>
          <button>X</button>
        </>
      ))}
    </div>
  );
};

export default HashtagList;
