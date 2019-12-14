import React, { useState } from 'react';

import Icon from '../../../components/Icon';
import SearchToolTip from './SearchToolTip';
import { SearchWrapper, Input } from './styles';

const Search = () => {
  const [isVisible, setVisibility] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const clickClear = () => {
    setVisibility(false);
    setInputValue('');
  };

  const changeInputValueHandler = e => {
    setVisibility(true);
    setInputValue(e.target.value);
    if (e.target.value === '') {
      setVisibility(false);
    }
  };

  return (
    <SearchWrapper>
      {isVisible && (
        <SearchToolTip inputValue={inputValue} clickClear={clickClear} />
      )}
      <Input value={inputValue} onChange={changeInputValueHandler} />
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
        style={{ marginTop: '2px', zIndex: '200' }}
      />
    </SearchWrapper>
  );
};

export default Search;
