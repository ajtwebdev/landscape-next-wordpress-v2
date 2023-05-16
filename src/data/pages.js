import { gql } from '@apollo/client';

// Define here all ACF fields for `page_components` to match 1-to-1
export const PAGE_COMPONENTS_ACF_FIELDS = gql`
  fragment PageComponents on Page {
    pageComponents {
      pageComponents {
        ... on Page_Pagecomponents_PageComponents_Badges {
          __typename
          title
        }
        ... on Page_Pagecomponents_PageComponents_Banner {
          __typename
          title
          description
          subheader
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_HeroSlider {
          __typename
          title
        }
        ... on Page_Pagecomponents_PageComponents_Text {
          __typename
          text
        }
        ... on Page_Pagecomponents_PageComponents_ImageSlider {
          __typename
          subheader
          title
          body
        }
        ... on Page_Pagecomponents_PageComponents_ImageRight {
          __typename
          body
          fieldGroupName
          subheader
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeft {
          __typename
          fieldGroupName
          body
          subheader
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeftDark {
          __typename
          body
          subheader
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageGallery {
          __typename
          body
          subheader
          title
          imageGallery {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_Benefits1 {
          __typename
          title
          subheader
          benefitContent {
            title
            description
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_Carousel {
          __typename
          title
          subheader
          carouselContent {
            title
            description
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentA {
          __typename
          subheader
          title
          body
          componentItems {
            title
            text
            button
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentB {
          __typename
          body
          subheader
          title
          componentItems {
            title
            text
            button
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentC {
          __typename
          body
          subheader
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentD {
          __typename
          subheader
          title
          content {
            text
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentE {
          __typename
          subheader
          title
          content {
            title
            description
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_Cta1 {
          __typename
          body
          title
          subheader
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_Cta2 {
          __typename
          body
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_Ebook {
          __typename
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_Faq {
          __typename
          title
          body
          questions {
            question
            answer
          }
        }
        ... on Page_Pagecomponents_PageComponents_ProcessA {
          __typename
          description
          title
          processContent {
            number
            processDescription
          }
        }
        ... on Page_Pagecomponents_PageComponents_ProcessB {
          __typename
          title
          subheader
          body
          processContent {
            number
            title
            body
          }
        }
        ... on Page_Pagecomponents_PageComponents_RelatedServices {
          __typename
          serviceContent {
            title
            link
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ServiceArea {
          __typename
          title
          content1
          content2
        }
        ... on Page_Pagecomponents_PageComponents_TabsSide {
          __typename
          title
          tabsContent {
            tabTitle
            tabList
            tabLabel
            tabBody
            tabImage {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_TabsTop {
          __typename
          title
          tabsContent {
            tabTitle
            tabList
            tabLabel
            tabBody
            tabImage {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_Testimonial {
          title
          testimonials {
            testimonialBody
            testimonialTitle
            testimonialName
          }
        }
        ... on Page_Pagecomponents_PageComponents_Text {
          text
        }
      }
    }
  }
`;

export const PAGE_FIELDS = gql`
  fragment PageFields on Page {
    children {
      edges {
        node {
          id
          slug
          uri
          ... on Page {
            id
            title
          }
        }
      }
    }
    id
    menuOrder
    parent {
      node {
        id
        slug
        uri
        ... on Page {
          title
        }
      }
    }
    slug
    title
    uri
  }
`;

export const QUERY_ALL_PAGES_INDEX = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;

export const QUERY_ALL_PAGES_ARCHIVE = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;

export const QUERY_ALL_PAGES = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
          content
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  }
`;

export const QUERY_PAGE_BY_URI = gql`
  ${PAGE_COMPONENTS_ACF_FIELDS}
  query PageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      children {
        edges {
          node {
            id
            slug
            uri
            ... on Page {
              id
              title
            }
          }
        }
      }
      content
      featuredImage {
        node {
          altText
          caption
          id
          sizes
          sourceUrl
          srcSet
        }
      }
      id
      menuOrder
      parent {
        node {
          id
          slug
          uri
          ... on Page {
            title
          }
        }
      }
      slug
      title
      uri
      ...PageComponents
    }
  }
`;

export const QUERY_PAGE_SEO_BY_URI = gql`
  query PageSEOByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
