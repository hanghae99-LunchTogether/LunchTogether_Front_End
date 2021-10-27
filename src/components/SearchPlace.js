import React, { useState } from "react";
import MapContainer from "./MapContainer";

const SearchPlace = props => {
  const [input, setInput] = useState("");
  const [place, setPlace] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setPlace(input);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={input} />
        <input type="submit" value="검색" />
      </form>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;
