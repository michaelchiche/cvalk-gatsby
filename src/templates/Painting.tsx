import React from 'react';
import LayoutWithMenu from '../components/layoutWithMenu';
import Painting from '../components/painting';
import { graphql } from 'gatsby';
import { Cvalk, CvalkLogoQuery } from '../graphqlTypes';
const PaintingTemplate = ({
  data,
}: {
  data: {
    cvalk: { painting: Cvalk['painting'] };
    logoImage: CvalkLogoQuery['logoImage'];
  };
}) => (
  <LayoutWithMenu logoSrc={data.logoImage!.fluid!.src!}>
    <Painting painting={data.cvalk.painting}></Painting>
  </LayoutWithMenu>
);

export const query = graphql`
  query painting($id: ID!) {
    cvalk {
      painting(id: $id) {
        id
        title
        author
        cvalk_painted_date
        paint_type
        cvalk_height
        cvalk_width
        author_dob
        author_death
        cvalk_photo {
          public_id
          hash
          ext
        }
        gallery {
          id
          title
          category {
            id
          }
        }
      }
    }
    logoImage: imageSharp(resize: { originalName: { eq: "cvalk.png" } }) {
      fluid(maxHeight: 100) {
        src
      }
    }
  }
`;
export default PaintingTemplate;
