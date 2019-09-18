/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Cvalk } from '../graphqlTypes';
import SEO from './seo';

const Painting: React.FC<{
  painting: Cvalk['painting'];
}> = ({ painting }) => {
  if (!painting) {
    return null;
  }

  const { title, cvalk_photo, gallery } = painting!;
  const { public_id, ext } = cvalk_photo!;

  return (
    <>
      <SEO title={`${title!} | ${gallery!.title}`} />

      <div className="h-screen flex flex-col items-center w-full m-1 xl:m-0 xl:text-left xl:flex xl:flex-row xl:items-start xl:h-auto">
        <picture className="xl:w-1/2 flex-shrink">
          <source
            media="(max-width:768)"
            src={`https://res.cloudinary.com/cvalk/image/upload/w_600,h_600,c_fit/${public_id}${ext}`}
          />

          <img
            src={`https://res.cloudinary.com/cvalk/image/upload/w_800,h_700,c_fit/${public_id}${ext}`}
            alt={title!}
          />
        </picture>

        <div className="xl:w-1/2 xl:ml-5 flex-grow">
          <h3 className="font-bold text-xl text-white xl:mt-0 mt-5">
            {gallery!.title}
          </h3>
          <h2 className="font-black text-3xl my-5 text-white">{title}</h2>
          <ul className="font-bold">
            {gallery!.category!.id === '1' && (
              <li>
                -
                <span className="ml-5 leading-relaxed my-4">
                  {painting.author} ({painting.author_dob} -
                  {painting.author_death})
                </span>
              </li>
            )}
            <li>
              -
              <span className="ml-5 leading-relaxed my-4">
                C.ValérieK. - {painting.cvalk_painted_date}
              </span>
            </li>
            <li>
              -
              <span className="ml-5 leading-relaxed my-4">
                {painting.paint_type}
              </span>
            </li>
            <li>
              -
              <span className="ml-5 leading-relaxed my-4">
                {painting.cvalk_height}x{painting.cvalk_width}cm
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Painting;
