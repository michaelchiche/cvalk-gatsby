import React from 'react';

import LayoutWithMenu from '../components/layoutWithMenu';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const IndexPage = ({}) => (
  <LayoutWithMenu>
    <SEO title="Home" />
    <div className="content z-0 flex flex-col h-screen justify-around items-center xl:flex-row xl:ml-20 xl:border-l-2 xl:h-full border-gray-900 ">
      <Link
        to="/copies"
        className="bg-cover bg-center h-full w-full xl:w-2/5 relative group"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/cvalk/image/upload/w_700,h_700,c_fit/v1567809543/yfsggbw5bvrbu2pnwhrj.jpg)',
        }}
      >
        <div className="bg-black opacity-25 group-hover:opacity-50 h-full w-full"></div>
        <div className="absolute bottom-0 mb-4 ml-4 xl:mb-10 xl:ml-10 text-white text-3xl xl:text-6xl font-normal leading-snug">
          LES <br /> COPIES
        </div>
      </Link>
      <Link
        to="/creations"
        className="bg-cover bg-center h-full w-full xl:w-2/5 relative group mt-8"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/cvalk/image/upload/w_700,h_700,c_fit/v1567809520/tzpjbdv0t90nolfibonc.jpg)',
        }}
      >
        <div className="bg-black opacity-25 group-hover:opacity-50 h-full w-full"></div>
        <div className="absolute bottom-0 mb-4 ml-4 xl:mb-10 xl:ml-10 text-white text-3xl xl:text-6xl font-normal leading-snug">
          LES <br /> CREATIONS
        </div>
      </Link>
    </div>
  </LayoutWithMenu>
);

export default IndexPage;
