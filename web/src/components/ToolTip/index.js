import React from 'react';
import {
  ToolTipArrow,
  ToolTipBody,
  ToolTipWrapper,
  ToolTipBackground,
} from './styles';

const stopPropagation = e => e.stopPropagation();

const ToolTip = ({
  onClick,
  className,
  wrapperStyle,
  arrowStyle,
  children,
}) => {
  return (
    <>
      <ToolTipBackground onClick={onClick}> </ToolTipBackground>
      <ToolTipWrapper
        style={wrapperStyle}
        className={className}
        onClick={stopPropagation}
      >
        <ToolTipArrow style={arrowStyle} />
        <ToolTipBody>{children}</ToolTipBody>
      </ToolTipWrapper>
    </>
  );
};

export default ToolTip;
