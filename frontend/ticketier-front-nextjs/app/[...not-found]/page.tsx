import React from "react";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="pageGeneralClass">
      <div className="py-12 flex flex-col justify-center items-center">
        <Image
          src="/404.png"
          width={300}
          height={300}
          alt="not-found"
          loading="lazy"
        />
        <h1 className="text-red-500 text-2xl mt-8">Not Found Page</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
