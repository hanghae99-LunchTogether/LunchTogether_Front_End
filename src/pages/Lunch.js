import React from "react";
import CreateLunch from "../components/CreateLunch";
import EditLunch from '../components/EditLunch';
import UpdateProfile from "../components/UpdateProfile";

const Lunch = () => {
  return (
    <>
      <CreateLunch />
      <UpdateProfile />
      <EditLunch />
    </>
  );
};

export default Lunch;
