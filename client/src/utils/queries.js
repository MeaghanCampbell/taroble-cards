import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

// this query doesn't have the same syntax as the other queries? Because we aren't passing any variables to it,
// we can simply name the query, and GraphQL will handle the rest.
//
// With this query, we're going to retrieve essentially all data related to the logged-in user. We'll retrieve their
// user information, thoughts, reactions to those thoughts, and friend list. This one will be great for the user's
// personal profile page, but we don't really need this much for the homepage, so let's create one more using
// the me query that returns less data.
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      readings {
        _id
        date
        readingData
      }
    }
  }
`;

// With this query, we're requesting significantly less data to be returned over HTTP. If we were to do this with a
// RESTful API, we'd have to create another route to query a user and return less information. With GraphQL, we can
// reuse the same query we created and simply ask for less.
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;