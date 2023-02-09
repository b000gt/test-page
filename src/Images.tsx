import React, { useState, FC } from "react";
import Card from "./Card";
import saos from "./images/saos";
import wardruna from "./images/wardruna";

const Images: FC = () => {
  return (
    <div>
      <Card title="saos.jpg" content={saos} className="mb-2" />
      <Card title="wardruna.gif" content={wardruna} className="mb-2" />
    </div>
  );
};
export default Images;
