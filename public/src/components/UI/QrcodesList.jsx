import React, { Fragment } from "react";
import QrcodeCard from "./QrcodeCard";

const QrcodesList = ({ data }) => {
  return (
    <>
      {data?.map((item,index) => (
        <QrcodeCard item={item} key={index}/>
      ))}
    </>
  );
};

export default QrcodesList;