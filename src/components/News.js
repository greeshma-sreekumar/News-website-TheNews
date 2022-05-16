import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News() {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <div className="head__div">
        <h1 className="head__text">T H E || N E W S</h1>
      </div>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;