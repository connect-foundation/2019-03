import React from 'react';
import { ToolTipArrow, ToolTipBody, ToolTipBackground } from './styles';

const ToolTip = ({ onClick, arrowStyle, bodyStyle, children }) => {
  return (
    <>
      <ToolTipArrow style={arrowStyle} />
      <ToolTipBody style={bodyStyle}>{children}</ToolTipBody>
      <ToolTipBackground onClick={onClick} />
    </>
  );
};

export default ToolTip;
