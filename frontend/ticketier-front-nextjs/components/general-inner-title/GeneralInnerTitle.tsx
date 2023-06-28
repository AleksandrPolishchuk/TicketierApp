import React from "react";

interface Props {
  title: string;
}

const GeneralInnerTitle = ({ title }: Props) => {
  return <h1>{title}</h1>;
};

export default GeneralInnerTitle;
