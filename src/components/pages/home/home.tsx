import React, { useEffect } from 'react';
import { getCurrentPosition } from '../../../services/geoLocationService';

import Banner from './banner/banner';
import Search from './search/search';
import DaysBanner from './daysBanner/daysBanner';
import './home.scss'

function Home(): JSX.Element {

    useEffect( () => {
       getCurrentPosition();
    }, []);

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