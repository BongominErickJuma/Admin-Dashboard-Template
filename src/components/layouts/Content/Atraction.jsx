import React from "react";
import "./Attraction.css"; // Optional: For custom styling if needed

const Attraction = () => {
  const attractions = [
    {
      title: "Queen Elizabeth National Park",
      description: "Famous for its tree-climbing lions and varied ecosystems.",
      imgSrc: "/images/MurchisonFalls.jpg",
    },
    {
      title: "Bwindi Impenetrable Forest",
      description: "Home to mountain gorillas and dense rainforest.",
      imgSrc: "/images/MurchisonFalls.jpg",
    },
    {
      title: "Kibale National Park",
      description: "Known for its chimpanzee tracking experiences.",
      imgSrc: "/images/MurchisonFalls.jpg",
    },
    {
      title: "Mount Elgon National Park",
      description: "Famous for its powerful waterfalls and diverse wildlife.",
      imgSrc: "/images/MurchisonFalls.jpg",
    },
  ];

  return (
    <div className="tourism-container row mb-5">
      <div className="col-lg-8">
        <div className="d-flex flex-column align-items-center justify-content-between h-100">
          <div className="content-area w-100"></div>

          <div className="category-section">
            <button className="category-button natural-attractions">
              🌲 Natural Attractions
            </button>
            <button className="category-button unique-experience">
              ⭐ Unique Experience
            </button>
            <button className="category-button hotel-accommodation">
              🏨 Hotel And Accommodation
            </button>
          </div>
        </div>
      </div>
      <div className="attraction-sidebar col-lg-4">
        <h4>Natural Attractions in Uganda</h4>
        <ul className="attraction-list">
          {attractions.map((attraction, index) => (
            <li key={index} className="attraction-item">
              <img
                src={attraction.imgSrc}
                alt={attraction.title}
                className="attraction-image"
              />
              <div className="attraction-details">
                <h5>{attraction.title}</h5>
                <small>{attraction.description}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Attraction;
