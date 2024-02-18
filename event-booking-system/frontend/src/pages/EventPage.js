// src/pages/EventPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const EventPage = () => {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Event Details for Event ID: {id}</h1>
      {/* Event details would go here */}
    </div>
  );
};

export default EventPage;
