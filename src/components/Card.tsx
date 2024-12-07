import React from 'react';
import './Card.css'; // Import the CSS file

// Define a type for the card component props
interface CardProps {
    image?: string;
    title: string;
    description: string;
    icon: string;
}

const Card: React.FC<CardProps> = ({ image, icon, title, description }) => {
    return (

        <div className="card">
            {/* If image exists, render this layout */}
            {image ? (
                <div className="card-image-wrapper">
                    <img src={image} alt={title} className="card-image"/>
                    <div className="card-icon-image"><i className={icon}></i></div>
                </div>
            ) : (
                // If no image, render this layout with just the icon on top
                <div className="card-icon-only">
                    <div className="card-icon"><i className={icon}></i></div>
                </div>
            )}

            {/* Title and Description */}
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>

    );
};

export default Card;
