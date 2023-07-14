"use client";

import React, { useState, useEffect } from "react";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="outline-none border-2 border-gray-200 focus:border-gray-500 pl-8 py-1 rounded-lg w-full max-w;lg"
      />
    </div>
  );
};

export default SearchBox;
