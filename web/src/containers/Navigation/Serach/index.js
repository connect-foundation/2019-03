import React, { useState } from 'react';
import SearchWrapper from './SearchWrapper';
import Input from './Input';
import Icon from '../../../components/Icon';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const clickClear = () => {
    setInputValue('');
  };
  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <SearchWrapper>
      <Icon ratio={10} posX={-260} posY={-625} />
      <Input placeholder="검색" value={inputValue} onChange={onChange} />
      <Icon ratio={10} posX={-390} posY={-625} onClick={clickClear} />
    </SearchWrapper>
  );
};

export default Search;
