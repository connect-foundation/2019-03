import React, { useState } from 'react';
import { SearchWrapper, Input } from './styles';
import Icon from '../../../components/Icon';
import SearchToolTip from './SearchToolTip';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const clickClear = () => {
    setInputValue('');
  };

  const onChange = async e => {
    setInputValue(e.target.value);
    if (e.target.value === '') {
      setIsVisible(false);
      return;
    }

    const searchQuery = `{
      searchUser(id: "${e.target.value}"){
        type
        username
        name
        profileImage
      }
      searchHashtag(id: "${e.target.value}") {
        type
        name
      }
    }`;

    const resultsResponse = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: searchQuery }),
    });
    const resultResponseJson = await resultsResponse.json();

    // resultResponseJson에 여러개의 배열을 하나로 합친다.
    let results = [];
    Object.keys(resultResponseJson.data).map(element => {
      results = results.concat(resultResponseJson.data[element]);
    });

    if (results.length === 0) {
      setIsVisible(false);
      return;
    }

    results.sort(() => {
      return Math.random() - Math.random();
    });
    setSearchResults(results);

    setIsVisible(true);
  };

  return (
    <SearchWrapper>
      <Input placeholder="검색" value={inputValue} onChange={onChange} />
      <SearchToolTip isVisible={isVisible} searchResults={searchResults} />
      <Icon
        ratio={10}
        posX={-260}
        posY={-625}
        style={{ marginTop: '2px', position: 'absolute' }}
      />
      <Icon
        ratio={10}
        posX={-390}
        posY={-625}
        onClick={clickClear}
        style={{ marginTop: '2px' }}
      />
    </SearchWrapper>
  );
};

export default Search;
