// src/routes.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import BookingPage from './pages/BookingPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/bookings" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
