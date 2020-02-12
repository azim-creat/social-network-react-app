import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Profile/MyPosts/Post/Post';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar/>
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
