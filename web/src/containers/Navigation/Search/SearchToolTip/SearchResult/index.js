import React from 'react';
import ProfileIcon from '../../../../../components/ProfileIcon';
import SearchResultWrapper from './SearchResultWrapper';
import ResultInfo from './ResultInfo';

const SearchResult = ({ result }) => {
  const imgSrc = result.type === 'user' ? undefined : 'hashtag.png';
  const id = result.type === 'user' ? result.username : `# ${result.name}`;
  const option =
    result.type === 'user' ? (
      <span className="option">{result.name}</span>
    ) : null;

  return (
    <SearchResultWrapper>
      <div>
        <ProfileIcon imgSrc={imgSrc} />
      </div>
      <ResultInfo>
        <span>{id}</span>
        {option}
      </ResultInfo>
    </SearchResultWrapper>
  );
};

export default SearchResult;
