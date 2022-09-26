import React from 'react';
// import Dexktop from '../../static/DesktopBack.svg'

const Container = ({ children }) => {
  return <div className="mx-auto max-w-460 xl:max-w-1440">{children}</div>;
};

export default Container;
