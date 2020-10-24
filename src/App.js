import React, { useState, useEffect } from 'react'
import './content/css/style.css'
import './content/css/setting.css'
import Home from './components/Home.js'
import Popup from './components/Popup.js'
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  document.body.className = 'modal-open wrap-setting';
  return (
    <div className="App">
      <Home />
      <Provider store={store}>
        <Popup />
      </Provider>
    </div>
  );
}

export default App;
