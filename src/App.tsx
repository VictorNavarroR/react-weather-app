import React from 'react';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import Home from './components/pages/home/home';
import './App.scss'

function App(): JSX.Element {

  return (
    <main>
        <Header  />
          <Home />
        <Footer  />
    </main>
  );
}

export default App;
