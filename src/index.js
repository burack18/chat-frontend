import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/components/Home';
import Login from './auth/components/Login';
import Layout from './shared/layout/components/Layout';
import ChatRoomList from './chat-room/components/ChatRoomList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/rooms' element={<ChatRoomList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
