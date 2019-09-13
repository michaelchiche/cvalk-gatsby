/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
require('typeface-dm-sans');

import './layout.css';
import { useStaticQuery, graphql } from 'gatsby';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="xl:p-32 p-8 h-screen">
      <main className="w-full h-full">{children}</main>
    </div>
  );
};

export default Layout;
