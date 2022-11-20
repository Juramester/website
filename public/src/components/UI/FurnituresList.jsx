import React, { Fragment } from "react";
import FurnitureCard from "./FurnitureCard";

const FurnituresList = ({ data }) => {
  return (
    <>
      {data?.map((item,index) => (
        <FurnitureCard item={item} key={index}/>
      ))}
    </>
  );
};

export default FurnituresList;

