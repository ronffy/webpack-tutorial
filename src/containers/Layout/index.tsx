
import * as React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <div className="mb-15">
        <Header />
      </div>
      {children}
    </>
  )
}

export default Layout;
