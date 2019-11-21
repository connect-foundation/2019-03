import React from 'react';
import { ToolTipArrow, ToolTipBody, ToolTipWrapper } from './styles';

const ToolTip = ({ className, wrapperStyle, arrowStyle, children }) => {
  return (
    <ToolTipWrapper style={wrapperStyle} className={className}>
      <ToolTipArrow style={arrowStyle} />
      <ToolTipBody>{children}</ToolTipBody>
    </ToolTipWrapper>
  );
};

export default ToolTip;
