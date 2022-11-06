// import './App.css';
// import BasicExample from './Table';
// import Header from './Header';
// import Footer from './Footer';
// import Navigation from './Navigation';

// function App() {
//   return (
//     <div className='keseluruhan'>
//       <Header/>
//       <Navigation/> 
//       <BasicExample/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Halaman/Home';
import About from './Halaman/About';
import Contact from './Halaman/Contact';
import Layout from './Halaman/Layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;