import React from 'react';
import ProfileIcon from '../../../../../components/ProfileIcon';
import { SearchResultWrapper, ResultInfo } from './styles';

const SearchResult = ({ result, isLast }) => {
  const imgSrc = result.type === 'user' ? undefined : 'hashtag.png';
  const id = result.type === 'user' ? result.username : `# ${result.name}`;
  const option =
    result.type === 'user' ? (
      <span className="option">{result.name}</span>
    ) : null;

  return (
    <SearchResultWrapper isLast={isLast}>
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
