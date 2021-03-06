import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolBar from'./ToolBar.js';
import logo from './logo.svg';
import './App.css';
import Avatar from 'material-ui/Avatar';
import MyAvatar from './MyAvatar.js';
import LeftPage from './LeftPage';
import RightPage from './RightPage';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MuiThemeProvider> 
          <header className="App-header">
            <ToolBar />
          </header>

           <nav className="LeftPage">

            <LeftPage/>
          </nav>
          <aside>
            <RightPage/>
          </aside>


          
          <div className="AvatarTextBox">
            <section className="App-section">             
              <MyAvatar/>              
              <input
                className="TweetBox"
                type="text"
                name="Tweet"
                value="What's happening?"
                width="400px"                
               />                 
            </section>
          </div>
          </MuiThemeProvider>        
      </div>
    );
  }
}

export default App;
