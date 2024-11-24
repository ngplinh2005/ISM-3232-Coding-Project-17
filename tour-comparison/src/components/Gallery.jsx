import React, { useState, useEffect } from 'react';

// State Management
function Gallery() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch tour data from the API
    useEffect(() => {
        fetch('https://course-api.com/react-tours-project')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch tours');
                }
                return response.json();
            })
            .then(data => {
                setTours(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Remove a Tour from List (using "Not Interested" Button)
    const removeTour = (id) => {
        setTours(tours.filter(tour => tour.id !== id));
    };

    // Error and Loading States
    if (loading) return <p>Loading tours...</p>;
    if (error) return <p>Error: {error}</p>;

    // Render a list of tours
    return (
        <div>
            {tours.map(tour => (
                <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
            ))}
        </div>
    );
}

// Tour Card info: Name, Price, Description, and Image
function TourCard({ tour, removeTour }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="tour-card">
            <img src={tour.image} alt={tour.name} />
            <h2>{tour.name}</h2>
            <p>Price: ${tour.price}</p>
            <p>
                {showMore ? tour.info : `${tour.info.substring(0, 100)}...`}
                <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show Less' : 'Read More'}
                </button>
            </p>
            <button onClick={() => removeTour(tour.id)}>Not Interested</button>
        </div>
    );
}

export default Gallery;