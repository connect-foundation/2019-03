import { gql } from 'apollo-boost';

const HASHTAG_PAGE = gql`
  query HashTagPage($hashTagName: String!) {
    hashTagPage(hashTagName: $hashTagName) {
      isExistingHashTag
      postCard {
        postURL
        imageURL
      }
    }
  }
`;

export default HASHTAG_PAGE;
