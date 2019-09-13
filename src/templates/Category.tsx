import React from 'react';
import LayoutWithMenu from '../components/layoutWithMenu';
import Gallery from '../components/gallery';
import { graphql } from 'gatsby';
import { Cvalk } from '../graphqlTypes';
const CategoryTemplate = ({
  data,
}: {
  data: {
    cvalk: { paintings: Cvalk['paintings']; category: Cvalk['category'] };
  };
}) => (
  <LayoutWithMenu>
    <Gallery
      paintings={data.cvalk.paintings}
      category={data.cvalk.category}
    ></Gallery>
  </LayoutWithMenu>
);

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
  }
`;
export default CategoryTemplate;
