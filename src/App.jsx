import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import BookingModal from './components/BookingModal';
import { BookingProvider, useBooking } from './context/BookingContext';
import './App.css';

// ModalWrapper component to consume context and render Modal
const ModalWrapper = () => {
  const { isBookingModalOpen, closeBookingModal } = useBooking();
  return <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />;
};

function App() {
  return (
    <BookingProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
        <ModalWrapper />
      </div>
    </BookingProvider>
  );
}

export default App;
