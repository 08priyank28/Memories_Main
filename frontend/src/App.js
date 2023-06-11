import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import PostDetails from "./components/PostDetails/PostDetails";
import SignUp from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/posts" />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          <Route exact path="/posts/:id" element={<PostDetails />} />
          <Route
            exact path="/auth"
            element={!user ? <SignUp /> : <Navigate replace to="/posts" />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
