import React from 'react';

import Banner from './banner/banner';
import Search from './search/search';
import DaysBanner from './daysBanner/daysBanner';
import './home.scss'
import { CoordsContextProvider } from '../../../context/coords';

function Home(): JSX.Element {
  return (
    <>
    <CoordsContextProvider>
        <Banner /> 
        <div className="wrapper">
            <DaysBanner />     
            <Search />
        </div> 
      </CoordsContextProvider>        
    </>
  )
}

export default Home