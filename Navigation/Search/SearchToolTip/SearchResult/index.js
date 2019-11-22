import React from "react";
import ProfileIcon from "../../../../../components/ProfileIcon";
import { SearchResultWrapper, ResultInfo } from "./styles";

const SearchResult = ({ result }) => {
  let imgSrc;
  let content;
  let option;

  if (result.type === "user") {
    imgSrc = undefined;
    content = result.username;
    option = <span className="option">{result.name}</span>;
  } else {
    imgSrc = "hashtag.png";
    content = `# ${result.name}`;
    option = null;
  }

  return (
    <SearchResultWrapper>
      <div>
        <ProfileIcon imgSrc={imgSrc} />
      </div>
      <ResultInfo>
        <span>{content}</span>
        {option}
      </ResultInfo>
    </SearchResultWrapper>
  );
};

export default SearchResult;
