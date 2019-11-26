import React from 'react';
import {
  ToolTipArrow,
  ToolTipBody,
  ToolTipWrapper,
  ToolTipBackground,
} from './styles';

const ToolTip = ({
  onClick,
  className,
  wrapperStyle,
  arrowStyle,
  children,
}) => {
  const stopPropagation = e => e.stopPropagation();

  return (
    <ToolTipBackground onClick={onClick}>
      <ToolTipWrapper
        style={wrapperStyle}
        className={className}
        onClick={stopPropagation}
      >
        <ToolTipArrow style={arrowStyle} />
        <ToolTipBody>{children}</ToolTipBody>
      </ToolTipWrapper>
    </ToolTipBackground>
  );
};

export default ToolTip;
