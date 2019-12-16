import { gql } from 'apollo-boost';

const UPDATE_PROFILE = gql`
  mutation UpdateProfile($file: Upload!, $userId: Int!) {
    updateProfile(file: $file, userId: $userId)
  }
`;

export default UPDATE_PROFILE;
