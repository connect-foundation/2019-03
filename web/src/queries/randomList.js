import { gql } from 'apollo-boost';

const RANDOM_LIST = gql`
  query RandomList {
    randomList {
      id
      name
      username
      profileImage
    }
  }
`;

export default RANDOM_LIST;
