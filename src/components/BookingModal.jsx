import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Replace this placeholder with your actual Square Booking URL
    const SQUARE_BOOKING_URL = 'https://squareup.com/appointments/book/placeholder';

    return (
        <div className="booking-modal-overlay" onClick={onClose}>
            <div className="booking-modal-content" onClick={e => e.stopPropagation()}>
                <button className="booking-modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} color="#333" />
                </button>
                <iframe
                    src={SQUARE_BOOKING_URL}
                    className="booking-iframe"
                    title="Square Appointment Booking"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default BookingModal;
