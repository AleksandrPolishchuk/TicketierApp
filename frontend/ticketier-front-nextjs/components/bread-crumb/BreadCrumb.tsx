import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

interface Props {
  items: {
    label: string;
    route: string;
  }[];
}

const BreadCrumb = ({ items = [] }) => {
  return 
    <div>
      <Link href="/">
        <AiOutlineHome />
      </Link>
      {
        items.map((item, index) => (
            <div key={index} className="space-x-2"><div>
                <span>/</span>
            </div>
        ))
      }
    </div>;
};

export default BreadCrumb;
