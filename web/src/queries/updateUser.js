import { gql } from 'apollo-boost';

const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    $name: String
    $username: String
    $email: String
    $cellPhone: String
  ) {
    updateUser(
      id: $id
      name: $name
      username: $username
      email: $email
      cellPhone: $cellPhone
    ) {
      name
      username
      email
      cellPhone
    }
  }
`;

export default UPDATE_USER;
