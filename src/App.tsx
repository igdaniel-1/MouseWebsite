import * as React from "react";
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/index.tsx';
// import { Provider } from "react-redux";
import { Routing } from "./routes";
import HandleHomePageInput from './components/handleHomePageInput.js';
// import sendMessage from handleHomePageInput;
// import store from '../src/redux/store';

// landing page for the application
// this will serve as the home page

function App() {
  // maybe restructure to this format:
  
  // const Home: React.FC = () => {
  // this enables you to pass in props within the () using props initialized with the 'interface' structure
  // const store = 'temporaryStoreInfo';
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    // <Provider store={store}>
      // <Routing/>
    // </Provider>

    // <HandleHomePageInput/>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       It's running!
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <HandleHomePageInput/>
    //   {/* <div className="container">
    //     <label>Send Message to Server:</label> 
    //     <input type="text" id="messageInput"></input>
    //     <button onClick={sendMessage()}>Send</button>
    //     <div id="output"></div>
    //   </div> */}
      
    // </div>
    
  );
}

export default App;
