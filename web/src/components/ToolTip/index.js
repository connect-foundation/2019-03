import React from 'react';
import ToolTipWrapper from './ToolTipWrapper';
import ToolTipArrow from './ToolTipArrow';
import ToolTipBody from './ToolTipBody';

const ToolTip = ({ style }) => {
  return (
    <ToolTipWrapper>
      <ToolTipArrow style={style} />
      <ToolTipBody>hi</ToolTipBody>
    </ToolTipWrapper>
  );
};

export default ToolTip;
