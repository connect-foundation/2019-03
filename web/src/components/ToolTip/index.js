import React from 'react';
import { ToolTipArrow, ToolTipBody, ToolTipBackground } from './styles';

const ToolTip = ({ onClick, arrowStyle, bodyStyle, children }) => {
  return (
    <>
      <ToolTipBackground onClick={onClick} />
      <ToolTipArrow style={arrowStyle} />
      <ToolTipBody style={bodyStyle}>{children}</ToolTipBody>
    </>
  );
};

export default ToolTip;
