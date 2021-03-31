import React from 'react'
import './App.css';
import AppProvider from './components/AppProvider'
import AppContext from './contexts/AppContext'
import HeaderMenu from './components/menuHeader'
import ListCart from './components/listCart';
import Cart from './components/cart';
function App() {
    return (   
      <AppProvider> 
        <HeaderMenu/>   
        <div className="test">
          <ListCart >
           
            
          </ListCart>
        </div>  
          <Cart></Cart>
      </AppProvider>     
     );
}
export default App;
