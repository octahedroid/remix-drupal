import { gql } from "graphql-request";

export const linkFragment = gql`
  fragment Link on Link {
    uri
    link
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

const mediaImageFragment = gql`
  fragment MediaImage on MediaImage {
    mediaImage {
      url
    }
  }
`;

const userFragment = gql`
  fragment User on User {
    displayName
    picture {
      ...MediaImage
    }
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

export const paragraphCodeBlockFragment = gql`
  fragment ParagraphCodeBlock on ParagraphCodeBlock {
    title
    code
    language
    showLineNumbers
  }
`

export const paragraphHeroTextFragment = gql`
  fragment ParagraphHeroText on ParagraphHeroText {
    intro
    text
    title
  }
`;

export const paragraphImageFragment = gql`
  fragment ParagraphImage on ParagraphImage {
    image {
      ...MediaImage
    }
  }
`;

export const nodeArticleFragment = gql`
  fragment NodeArticle on NodeArticle {
    id
    title
    path
    image {
      ...MediaImage
    }
    author {
      ...User
    }
    created
    components {
      __typename
      ...ParagraphHeroCta
      ...ParagraphHeroText
      ...ParagraphText
      ...ParagraphImage
      ...ParagraphCodeBlock
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
      ...ParagraphHeroText
      ...ParagraphText
      ...ParagraphImage
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
      ...MediaImage
    }
    author {
      ...User
    }
  }
`;

export const nodeArticlesTeaserQuery = gql`
  ${mediaImageFragment}
  ${userFragment}
  ${nodeNodeArticleTeaserFragment}

  query nodeArticlesTeaser {
    nodeArticlesTeaser: nodeArticles(first: 10) {
      nodes {
        ...NodeArticleTeaser
      }
    }
  }
`;

export const nodeByPathQuery = gql`
  ${mediaImageFragment}
  ${userFragment}
  ${paragraphHeroCtaFragment}
  ${paragraphHeroTextFragment}
  ${paragraphTextFragment}
  ${paragraphImageFragment}
  ${paragraphCodeBlockFragment}
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
