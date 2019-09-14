/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import { Link } from 'gatsby';

import 'typeface-dm-sans';
import './layout.css';

const LayoutWithMenu: React.FC<{ logoSrc: string }> = ({
  children,
  logoSrc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 xl:p-32 xl:flex xl:flex-row xl:h-screen xl:m-0 overflow-x-hidden xl:overflow-y-auto">
      <div className="xl:w-1/3 z-50 top-0 py-4 xl:static">
        <div className="w-full h-auto xl:hidden">
          <div className="flex justify-between">
            <Link to="/" className="flex-shrink w-2/5">
              <img src={logoSrc} alt="cvalk" />
            </Link>
            <div className="flex items-center text-gray-600 hover:text-gray-200">
              <button onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    width="36"
                    height="36"
                    fill="currentColor"
                  >
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    width="36"
                    height="36"
                    fill="currentColor"
                    // className="h-6 w-6 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="my-12">
              <ul className="flex flex-col items-center content-center">
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
          )}
        </div>
        <div className="flex flex-row">
          <div className="menu hidden xl:block xl:w-1/4 relative xl:mt-16 mr-12 flex-shrink-0 top-0 mt-4 ">
            <div className="xl:fixed w-1/4">
              <Link to="/">
                <img src={logoSrc} alt="cvalk" />
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
