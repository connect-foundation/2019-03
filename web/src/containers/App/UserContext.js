import React from 'react';

const UserContext = React.createContext({});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;

/**
 *
 * Honor Code : https://www.taniarascia.com/using-context-api-in-react/
 *
 */
