import { gql } from 'apollo-boost';

const GET_LOGS = gql`
  query Log($id: ID!) {
    log(id: $id) {
      id
      status
      fromUser {
        username
        profileImage
        follow {
          status
        }
      }
      post {
        postURL
        imageURL
      }
    }
  }
`;

export default GET_LOGS;
