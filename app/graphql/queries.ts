import { gql } from "graphql-request";

export const linkFragment = gql`
  fragment Link on Link {
    uri
    link
    title
  }
`;

const paragraphHeroCtaFragment = gql`
  ${linkFragment}
  fragment ParagraphHeroCta on ParagraphHeroCta {
    id

    status
    created
    cta {
      ...Link
    }
    intro
    text
    title
  }
`;

const textFragment = gql`
  fragment Text on Text {
    format
    value
    processed
  }
`;

const paragraphTextFragment = gql`
  ${textFragment}
  fragment ParagraphText on ParagraphText {
    id
    status
    created
    textRich {
      ...Text
    }
    title
  }
`;

export const nodeArticleFragment = gql`
  fragment NodeArticle on NodeArticle {
    id
    title
    path

    components {
      __typename
      ...ParagraphHeroCta
      ...ParagraphText
    }
  }
`;

export const nodePageFragment = gql`
  fragment NodePage on NodePage {
    id
    title
    path
    showTitle
    components {
      __typename
      ...ParagraphHeroCta
      ...ParagraphText
    }
  }
`;

export const nodeNodeArticleTeaserFragment = gql`
  fragment NodeArticleTeaser on NodeArticle {
    id
    title
    created
    path
    body {
      summary
    }
    image {
      mediaImage {
        url
      }
    }
    author {
      displayName
      picture {
        mediaImage {
          url
        }
      }
    }
  }
`;

export const nodeArticlesTeaserQuery = gql`
  ${nodeNodeArticleTeaserFragment}

  {
    nodeArticlesTeaser: nodeArticles(first: 10) {
      nodes {
        ...NodeArticleTeaser
      }
    }
  }
`;

export const nodeByPathQuery = gql`
  ${paragraphHeroCtaFragment}
  ${paragraphTextFragment}
  ${nodeArticleFragment}
  ${nodePageFragment}

  query NodeByPath($path: String!) {
    nodeByPath(path: $path) {
      __typename
      ...NodeArticle
      ...NodePage
    }
  }
`;
