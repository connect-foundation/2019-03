import { gql } from 'apollo-boost';

const GET_CLIENT = gql`
  query Client($id: ID!) {
    client(id: $id) {
      clientId
      redirectionURI
      appName
      clientSecret
    }
  }
`;

export default GET_CLIENT;
