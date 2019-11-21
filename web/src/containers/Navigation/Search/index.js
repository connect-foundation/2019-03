import React, { useState } from 'react';
import { SearchWrapper, Input } from './styles';
import Icon from '../../../components/Icon';
import SearchToolTip from './SearchToolTip';

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
      <Input placeholder="검색" value={inputValue} onChange={onChange} />
      <SearchToolTip />
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
