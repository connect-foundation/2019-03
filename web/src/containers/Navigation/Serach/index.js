import React, { useState } from 'react';
import SearchWrapper from './SearchWrapper';
import Input from './Input';
import Icon from '../../../components/Icon';
import ToolTip from '../../../components/ToolTip';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const clickClear = () => {
    setInputValue('');
  };
  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ display: 'inline-block' }}>
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
      <ToolTip />
    </div>
  );
};

export default Search;
