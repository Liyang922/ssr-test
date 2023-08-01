// 创建一个react组件
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => alert("hh")}>click</button>
      <Link to='/login'>login</Link>
    </div>
  );
}

export default Home;