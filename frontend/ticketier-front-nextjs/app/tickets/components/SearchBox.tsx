"use client";

import React, { useState, useEffect } from "react";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
