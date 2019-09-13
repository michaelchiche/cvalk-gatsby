/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Link } from 'gatsby';

require('typeface-dm-sans');

import './layout.css';
const cvalkLogo = require('../images/cvalk.png');

const LayoutWithMenu: React.FC = ({ children }) => {
  return (
    <div className="p-4 xl:p-32 xl:flex xl:flex-row xl:h-screen xl:m-0 overflow-x-hidden xl:overflow-y-auto">
      <div className="xl:w-1/3 z-50 top-0 px-4 py-4 xl:static">
        <div className="w-full h-auto xl:hidden">
          <div className="flex justify-between">
            <Link to="/" className="flex-shrink w-2/5">
              <img src={cvalkLogo} alt="cvalk" />
            </Link>
            <div className="flex items-center text-gray-600">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  color="#979797"
                  fill="#979797"
                >
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="menu hidden xl:block xl:w-1/4 relative xl:mt-16 mr-12 flex-shrink-0 top-0 mt-4 ">
            <div className="xl:fixed w-1/4">
              <Link to="/">
                <img src={cvalkLogo} alt="cvalk" />
              </Link>

              <div className="mt-12">
                <ul>
                  <li className="mt-2 leading-loose font-bold tracking-widest hover:text-white">
                    <Link
                      to="/copies"
                      partiallyActive={true}
                      activeClassName="text-white"
                    >
                      LES COPIES
                    </Link>
                  </li>
                  <li className="mt-2 leading-loose font-bold tracking-widest hover:text-white">
                    <Link
                      to="/creations"
                      partiallyActive={true}
                      activeClassName="text-white"
                    >
                      LES CREATIONS
                    </Link>
                  </li>
                  <li className="mt-2 leading-loose font-bold tracking-widest hover:text-white">
                    <Link
                      to="/a-propos"
                      partiallyActive={true}
                      activeClassName="text-white"
                    >
                      A PROPOS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-2/3 flex-grow-0 z-0 xl:pt-20 flex flex-col xl:block">
        {children}
      </div>
    </div>
  );
};

export default LayoutWithMenu;
