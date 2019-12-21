import { gql } from 'apollo-boost';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export default IS_LOGGED_IN;
