import { gql } from 'apollo-boost';

const SEARCH = gql`
  query Search($value: String) {
    search(value: $value) {
      id
      username
      name
      profileImage
    }
  }
`;

export default SEARCH;
