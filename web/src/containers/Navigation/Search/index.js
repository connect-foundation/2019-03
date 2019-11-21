import React, { useState } from 'react';
import { SearchWrapper, Input } from './styles';
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
      <Icon ratio={10} posX={-260} posY={-625} style={{ marginTop: '2px' }} />
      <Input placeholder="검색" value={inputValue} onChange={onChange} />
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
