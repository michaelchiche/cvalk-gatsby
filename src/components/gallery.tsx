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

const Gallery: React.FC<{
  paintings: Cvalk['paintings'];
  category: Cvalk['category'];
}> = ({ paintings, category }) => {
  if (!paintings) {
    return null;
  }

  return (
    <>
      <SEO title={`${category!.title}`} />

      <div className="h-screen flex flex-wrap xl:ml-20 ">
        {paintings.map(painting => {
          const { id, title, cvalk_photo, gallery } = painting!;
          const { public_id, ext } = cvalk_photo!;

          return (
            <Link
              to={`${slugify(gallery!.category!.title)}/${slugify(
                gallery!.title!,
              )}/${slugify(title!)}`}
              className="rounded overflow-hidden shadow-lg lg:w-1/3 w-full p-2 group hover:bg-gray-900"
              key={id}
            >
              <img
                className="w-full h-40 object-cover"
                src={`https://res.cloudinary.com/cvalk/image/upload/w_360,h_360,c_fit/${public_id}${ext}`}
                alt={title!}
              />
              <div className="font-bold text-xl ml-1 pb-4 pt-2 group-hover:text-white">
                {title}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
