import React from "react";

interface Props {
  title: string;
}

const GeneralInnerTitle = ({ title }: Props) => {
  return <h1 className="text-x1 sm:text-3x1 font-bold my-8">{title}</h1>;
};

export default GeneralInnerTitle;
