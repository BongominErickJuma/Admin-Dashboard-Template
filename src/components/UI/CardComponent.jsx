import React from "react";
import "./CardComponent.css"; // Import a CSS file for styling

// Card component for individual item
const CardComponent = () => {
  // Array of image names
  const imageNames = [
    "backcloth.jpg",
    "baskets.jpg",
    "beads.jpg",
    "crane.jpg",
    "drum.jpg",
    "Kabakaaa.png",
    "kitenge.jpg",
    "kitenge2.jpg",
    "mione.jpg",
    "painting.jpg",
    "plants.jpg",
    "smalllyra.jpg",
    "souvenirs.jpg",
    "tshirt.jpg",
    "craft-set.jpg",
    "ugandanflag.jpg",
    "ugandansandles.jpg",
    "vase.jpg",
    "woodwork.jpg",
  ];

  // Array of random author names
  const authorNames = [
    "Keeley Williams",
    "John Doe",
    "Alice Johnson",
    "Michael Smith",
    "Sophia Brown",
    "David Lee",
    "Emily White",
    "Chris Evans",
    "Lily James",
    "Ethan Cooper",
    "Olivia Harris",
    "Daniel Lewis",
    "Grace King",
    "Noah Scott",
    "Ava Thomas",
  ];

  // Pick a random image from the array
  const randomImage = imageNames[Math.floor(Math.random() * imageNames.length)];

  // Pick a random author from the array
  const randomAuthor =
    authorNames[Math.floor(Math.random() * authorNames.length)];

  // Extract the image title (remove the extension and replace dashes/underscores with spaces)
  const imageTitle = randomImage
    .split(".")[0] // Remove file extension
    .replace(/[-_]/g, " ") // Replace dashes or underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

  return (
    <div className="product-card ">
      <div>
        <img
          src={`/items/${randomImage}`} // Use a random image from the array
          alt={imageTitle}
          className="card-image"
        />
      </div>

      <div className="card-content">
        <h3 className="card-title text-black">{imageTitle}</h3>{" "}
        {/* Display the image name as title */}
        <p className="card-price fs-4 fw-bold">Ugx.88,819</p>
        <small className="card-author">{randomAuthor}</small>{" "}
        {/* Display random author name */}
        <button className="card-button">Modify</button>
      </div>
    </div>
  );
};

export default CardComponent;
