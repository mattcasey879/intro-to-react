import React, { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main'

function App() {

const [data, setData] = useState({
    name: 'Matt',
    location: 'Louisiana'
  })


  return (
    <>
 <Header/>
  <Main name={data.name} location={data.location}/>
  <Footer/>
    </>
  );
}

export default App;
