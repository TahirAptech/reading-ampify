/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReaderUser = /* GraphQL */ `
  query GetReaderUser($id: ID!) {
    getReaderUser(id: $id) {
      id
      sub
      firstName
      lastName
      avatar
      avatarKeys
      avatarData
      birthday
      email
      phone
      cellPhone
      gender
      address
      city
      zip
      country
      status
      unsubscribe
      unsubscribeData
      credits
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReaderUsers = /* GraphQL */ `
  query ListReaderUsers(
    $id: ID
    $filter: ModelReaderUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReaderUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        firstName
        lastName
        avatar
        avatarKeys
        avatarData
        birthday
        email
        phone
        cellPhone
        gender
        address
        city
        zip
        country
        status
        unsubscribe
        unsubscribeData
        credits
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
