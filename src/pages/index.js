import React from 'react';
import { useSelector } from 'react-redux';

function HomePage() {

  const title = useSelector((state) => state.global.get('title'));

  return <div>Welcome to {title}!</div>;
}

export default HomePage;
