/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Cvalk } from '../graphqlTypes';
import { slugify } from 'voca';
import { Link } from 'gatsby';
import SEO from './seo';

const Painting: React.FC<{
  painting: Cvalk['painting'];
}> = ({ painting }) => {
  // const siteData = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);
  if (!painting) {
    return null;
  }

  const { title, cvalk_photo, gallery } = painting!;
  const { public_id, ext } = cvalk_photo!;

  return (
    <>
      <SEO title={`${title!} | ${gallery!.title}`} />

      <div className="h-screen flex flex-col items-center w-full m-1 xl:text-left sm">
        <picture>
          <source
            media="(max-width:768)"
            src={`https://res.cloudinary.com/cvalk/image/upload/w_600,h_600,c_fit/${public_id}${ext}`}
          />
          <source
            media="(max-width:1024)"
            src={`https://res.cloudinary.com/cvalk/image/upload/w_800,h_800,c_fit/${public_id}${ext}`}
          />
          <source
            media="(max-width:1279)"
            src={`https://res.cloudinary.com/cvalk/image/upload/w_1000,h_1000,c_fit/${public_id}${ext}`}
          />

          <img
            src={`https://res.cloudinary.com/cvalk/image/upload/w_1000,h_1000,c_fit/${public_id}${ext}`}
            alt={title!}
          />
        </picture>

        <h3>{gallery!.title}</h3>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Painting;
