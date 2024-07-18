import React from 'react';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-4 pb-8">{children}</div>
    </div>
  );
};

export default Layout;
