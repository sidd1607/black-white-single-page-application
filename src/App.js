import React from 'react';

import { Banner } from './Components/Banner';
import { BannerO } from './Components/BannerO';
import Maps from './Components/Maps';
import New from './Components/New';
import Footer from './Components/Footer';
import Main from './Components/Main';

const App = () => {
  return (
    <>
      <Main />
      <Banner />
      <BannerO />
      <Maps />
      <New />
      <Footer />
    </>
  );
};

export default App;
