import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
// import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {


  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/posts" />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          {/* <Route exact path="/posts/:id" element={<PostDetails />} /> */}
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
