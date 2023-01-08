import React from 'react';

import Banner from './banner/banner';
import Search from './search/search';
import DaysBanner from './daysBanner/daysBanner';
import './home.scss'

function Home(): JSX.Element {
  return (
    <>
        <Banner /> 
        <div className="wrapper">    
            <DaysBanner />
            <Search />
        </div>
    </>
  )
}

export default Home