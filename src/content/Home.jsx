/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from './sidebar';
import Button from './button';

const Home = () => {
  return (
    <>
    <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ..."><Sidebar/></div>
        <div className="col-span-2 ..."><Button/></div>
        <div className="row-span-2 col-span-2 ...">03</div>
    </div>

    </>
  )
}

export default Home