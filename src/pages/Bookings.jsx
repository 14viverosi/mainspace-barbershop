import React from 'react';
import './Bookings.css';

const Bookings = () => {
    // Replace this placeholder with your actual Square Booking URL
    const SQUARE_BOOKING_URL = 'https://squareup.com/appointments/book/placeholder';

    return (
        <div className="bookings-page section-padding">
            <div className="container booking-container-simple">
                <div className="section-header">
                    <h2 className="section-title">Book an Appointment</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="iframe-container">
                    <iframe
                        src={SQUARE_BOOKING_URL}
                        className="booking-iframe-full"
                        title="Square Appointment Booking"
                        width="100%"
                        height="600px" // Adjust as needed
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Bookings;
