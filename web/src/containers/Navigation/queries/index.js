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
    searchUser(id: "${value}"){
      type
      username
      name
      profileImage
    }
    searchHashtag(id: "${value}") {
      type
      name
    }
  }`;
};

export { GET_LOG, searchQuery };
