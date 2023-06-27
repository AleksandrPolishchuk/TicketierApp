import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

interface Props {
  items: {
    label: string;
    route: string;
  }[];
}

const BreadCrumb = ({ items = [] }: Props) => {
  return (
    <div>
      <Link href="/">
        <AiOutlineHome />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="space-x-2">
          <span>/</span>
          {index === items.length - 1 ? (
            <span>{item.label}</span>
          ) : (
            <Link href={item.route}>{item.label}</Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
