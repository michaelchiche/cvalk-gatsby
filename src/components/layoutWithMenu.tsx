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
    <div className="p-8 xl:p-32 xl:flex xl:flex-row xl:h-screen xl:m-0">
      <div className="xl:w-1/3 mb-2 z-50 fixed xl:static">
        <div className="w-full h-8 mb-8 xl:hidden">
          <div className="flex mr-8 justify-between">
            <Link to="/">
              <img src={cvalkLogo} alt="cvalk" className="flex-shrink w-2/5" />
            </Link>
            <div>Menu</div>
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
      <div className="xl:w-2/3 flex-grow-0 z-0 pt-20">{children}</div>
    </div>
  );
};

export default LayoutWithMenu;
