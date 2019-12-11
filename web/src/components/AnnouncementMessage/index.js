import React from 'react';

import AnnouncementMessageWrapper from './AnnouncementMessageWrapper';

const AnnouncementMessage = ({ children }) => {
  return (
    <AnnouncementMessageWrapper>
      <h2>{children}</h2>
    </AnnouncementMessageWrapper>
  );
};

export default AnnouncementMessage;
