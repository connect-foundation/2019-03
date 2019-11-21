import React from 'react';
import ToolTipWrapper from './ToolTipWrapper';
import ToolTipArrow from './ToolTipArrow';
import ToolTipBody from './ToolTipBody';

const ToolTip = ({ className, wrapperStyle, arrowStyle, children }) => {
  return (
    <ToolTipWrapper style={wrapperStyle} className={className}>
      <ToolTipArrow style={arrowStyle} />
      <ToolTipBody>{children}</ToolTipBody>
    </ToolTipWrapper>
  );
};

export default ToolTip;
