import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "fcb4ba1067d743ebb12488a8b483ac8";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-04-16&sortBy=publishedAt&apiKey=fcb4ba1067d743ebb12488a8b483ac82`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};