import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};


export const getTeams = async () => {
  const query = gql`
  query MyQuery {
    teamsConnection {
      edges {
        node {
          name
          slug
          gender
          nation
          series
          biography
          image {
            url
          }
        }
      }
    }
  }  
`;

  const result = await request(graphqlAPI, query);

  return result.teamsConnection.edges;
}


export const getPlayer = async (slug) => {
  const query = gql`
  query MyQuery($slug: String!) {
    player(where: {slug: $slug}) {
      name
      surname
      slug
      nationality
      role
      yearOfBirth
      palmares {
        raw
      }
    }
  }`

  const result = await request(graphqlAPI, query, { slug });
  return result.player;
}


export const getTeamPlayerDetails = async (slug) => {
  console.log(slug, 'keerr')
  const query = gql`
  query MyQuery($slug : String!) {
    teamsConnection (where: {slug:$slug}) {
      edges {
        node {
          name
          slug
          gender
          nation
          link
          biography
          series
          content {
            raw
          }
          image {
            url
          }
          players {
            name
            surname
            yearOfBirth
            nationality
            role
            slug
          }
        }
      }
    }
  }  
  `;
  const result = await request(graphqlAPI, query, { slug });
  console.log(result, 'EHI')
  return result.teamsConnection.edges;
}

export const getPlayerDetails = async () => {
  const query = gql`
  query MyQuery {
    playersConnection(where: {slug:"$slug"}) {
      edges {
        node {
          name
          surname
          slug
          yearOfBirth
          nationality
          role
          palmares {
            raw
          }
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query);

  return result.playersConnection.edges;
}

export const getDateMatch = async () => {
  const query = gql`
  query MyQuery {
    daysConnection {
      edges {
        node {
          numberDay
          name1
          result1
          name2
          result2
          dateMatch
          slug
        }
      }
    }
  }
`;

  const result = await request(graphqlAPI, query);

  return result.daysConnection.edges;
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

