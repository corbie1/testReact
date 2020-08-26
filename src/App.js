import React from 'react';
import './App.css';
import Header from './components/layout/header'

export const App = ({ children }) => {  
  return (
    <div className="App">
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};