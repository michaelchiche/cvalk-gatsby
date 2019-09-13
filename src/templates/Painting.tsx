import React from 'react';
import LayoutWithMenu from '../components/layoutWithMenu';
import Painting from '../components/painting';
import { graphql } from 'gatsby';
import { Cvalk } from '../graphqlTypes';
const PaintingTemplate = ({
  data,
}: {
  data: { cvalk: { painting: Cvalk['painting'] } };
}) => (
  <LayoutWithMenu>
    <Painting painting={data.cvalk.painting}></Painting>
  </LayoutWithMenu>
);

export const query = graphql`
  query painting($id: ID!) {
    cvalk {
      painting(id: $id) {
        id
        title
        cvalk_photo {
          public_id
          hash
          ext
        }
        gallery {
          id
          title
        }
      }
    }
  }
`;
export default PaintingTemplate;
