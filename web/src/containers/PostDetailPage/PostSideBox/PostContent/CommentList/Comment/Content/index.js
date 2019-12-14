import React from 'react';

import { ContentWrapper } from './styles';
import Username from './Username';
import TimePassed from '../../../../../../../components/TimePassed';

function Content({ comment }) {
  const { writer, content, updatedAt } = comment;
  return (
    <ContentWrapper>
      <div>
        <Username writer={writer} />
        <article style={{ wordBreak: 'break-all' }}>{content}</article>
      </div>
      <TimePassed updatedAt={updatedAt} />
    </ContentWrapper>
  );
}

export default Content;
