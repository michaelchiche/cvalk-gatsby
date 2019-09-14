import React from 'react';
import LayoutWithMenu from '../components/layoutWithMenu';
import Gallery from '../components/gallery';
import { graphql } from 'gatsby';
import { Cvalk, CvalkLogoQuery } from '../graphqlTypes';
const CategoryTemplate = ({
  data,
}: {
  data: {
    cvalk: {
      paintings: Cvalk['paintings'];
      category: Cvalk['category'];
    };
    logoImage: CvalkLogoQuery['logoImage'];
  };
}) => {
  return (
    <LayoutWithMenu logoSrc={data.logoImage!.fluid!.src!}>
      <Gallery
        paintings={data.cvalk.paintings}
        category={data.cvalk.category}
      ></Gallery>
    </LayoutWithMenu>
  );
};

export const query = graphql`
  query paintingsByCategory($where: cvalk_JSON!, $id: ID!) {
    cvalk {
      paintings(where: $where) {
        id
        cvalk_photo {
          public_id
          hash
          ext
        }
        title
        gallery {
          title
          category {
            id
            title
          }
        }
      }
      category(id: $id) {
        title
      }
    }
    logoImage: imageSharp(resize: { originalName: { eq: "cvalk.png" } }) {
      fluid(maxHeight: 100) {
        src
      }
    }
  }
`;
export default CategoryTemplate;
