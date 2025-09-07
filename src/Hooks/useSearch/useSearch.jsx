import React, { useEffect, useState } from "react";

const useSearch = (value, delay) => {
  const [keyWord, setKeyword] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setKeyword(value);
	}, delay);
	  return () => {
		  clearTimeout(handler)
	  }
  },[value,delay]);

  return keyWord;
};

export default useSearch;
