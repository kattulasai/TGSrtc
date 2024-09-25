import React from "react";
import Head from "./Head";
import Footer from "./Footer";
import Body from "./Body";
import './App.css';
import './Body.css';
const App=()=>{
  return(
    <>
    <div className="img">
    <Head />
    <Body />
    <Footer />
    </div>
    </>
  )
}
export default App;