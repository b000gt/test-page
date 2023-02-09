import React, { ReactNode, FC } from "react";

export type CardProps = {
  title: ReactNode;
  content: ReactNode;
  className?: string;
};

const Card: FC<CardProps> = ({ title, content, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">{title}</div>
      <div className="card-body" style={{ whiteSpace: "pre-wrap" }}>
        {content}
      </div>
    </div>
  );
};

export default Card;
