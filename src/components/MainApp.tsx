import React from 'react';
import Footer from "./views/Footer"
import NewNavbar from './views/NewHeader';
import Home from './views/routerviews/Home/Home';

function Mainapp() {

  return (
    <>
      <NewNavbar />
      <Home />
      <Footer />
    </>
  );
}

export default Mainapp;
