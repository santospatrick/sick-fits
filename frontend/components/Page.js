import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
