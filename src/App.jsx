import React from 'react';
import {useContext} from 'react';
import Intro from './components/introduction/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toogle from './components/toogle/Toogle';
import {ThemeContext} from './context';

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return <div style={{backgroundColor: darkMode ? "#222":"white", color:darkMode && "white"}}> 
          <Toogle/>
          <Intro/>
          <About/>
          <ProductList/>
          <Contact/>
        </div>;
};

export default App;