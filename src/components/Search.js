import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [term]);

  const changeHandler = (e) => {
    setTerm(e.target.value);
  };

  const renderedllist = results.map((result) => {
    return (
      <div className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="label">
          <label>Enter search term </label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </div>
      {renderedllist}
    </div>
  );
};

export default Search;
