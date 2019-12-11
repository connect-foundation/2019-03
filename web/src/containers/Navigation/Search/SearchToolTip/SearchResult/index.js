import React, { useState, useEffect } from 'react';
import ProfileIcon from '../../../../../components/ProfileIcon';
import StyledLink from '../../../../../components/StyledLink';
import { SearchResultWrapper, ResultInfo } from './styles';

const SearchResult = ({ result, isLast, clickClose }) => {
  const [resultInfo, setResultInfo] = useState({
    imageURL: null,
    content: null,
    option: null,
    linkURL: `/`,
  });

  useEffect(() => {
    if (!result.username) {
      setResultInfo({
        imageURL:
          'https://kr.object.ncloudstorage.com/youngstargram/hashtag.png',
        content: `# ${result.name}`,
        option: null,
        linkURL: `/h/${result.name}`,
      });
    } else {
      setResultInfo({
        imageURL: result.profileImage,
        content: result.username,
        option: <span className="option">{result.name}</span>,
        linkURL: `/${result.username}`,
      });
    }
  }, [result, setResultInfo]);

  return (
    <StyledLink to={resultInfo.linkURL} onClick={clickClose}>
      <SearchResultWrapper isLast={isLast}>
        <div>
          <ProfileIcon imageURL={resultInfo.imageURL} />
        </div>
        <ResultInfo>
          <span>{resultInfo.content}</span>
          {resultInfo.option}
        </ResultInfo>
      </SearchResultWrapper>
    </StyledLink>
  );
};

export default SearchResult;
