import { gql } from 'apollo-boost';

const GET_LOG = gql`
  query Log($id: Int!) {
    log(id: $id) {
      status
      fromUser {
        username
        profileImage
      }
      post {
        postURL
        imageURL
      }
    }
  }
`;

const searchQuery = value => {
  return `{
    search(value: "${value}"){
      id
      username
      name
      profileImage
    }
  }`;
};

export { GET_LOG, searchQuery };
