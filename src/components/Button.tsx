// import React from 'react'
// import './Button.css'
// import {Link} from 'react-router-dom'
//
// const STYLES = ['btn--primary', 'btn--secondary', 'btn--tertiary']
// const SIZES = ['btn--medium', 'btn--large'];
//
// // Define TypeScript interface for the props
// interface ButtonProps {
//     children?: React.ReactNode;
//     // type?: 'button' | 'submit' | 'reset';  // Define valid button types
//     onClick?: () => void;  // Optional onClick handler
//     buttonStyle: 'btn--primary' | 'btn--secondary' | 'btn--tertiary'; // Restrict to valid styles
//     buttonSize: 'btn--medium' | 'btn--large';  // Restrict to valid sizes
//     buttonLink?: string;  // Optional buttonLink for navigation
// }
//
// export const Button: React.FC<ButtonProps> = ({
//                                                   children,
//                                                   // type,
//                                                   onClick,
//                                                   buttonStyle,
//                                                   buttonSize,
//                                                   buttonLink,
//                                               }) => {
//
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
//     const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[1]
//
//     // If buttonLink is provided, render a Link component for navigation
//     if (buttonLink) {
//         return (
//             <Link to={buttonLink}>
//                 <button
//                     className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//                     onClick={onClick}
//                     // type={type}
//                 >
//                     {children}
//                 </button>
//             </Link>
//         );
//     } else {
//         // Otherwise, just render a regular button
//         return (
//             <button
//                 className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//                 onClick={onClick}
//                 // type={type}
//             >
//                 {children}
//             </button>
//         );
//     }
// }


import React from 'react';
import './Button.css'; // Assuming you still want some default styles for the button
import { Link } from 'react-router-dom';

// Define TypeScript interface for the props
interface ButtonProps {
    children?: React.ReactNode; // Content inside the button (e.g., text, icons)
    onClick?: () => void; // Optional click handler
    buttonLink?: string; // Optional buttonLink for navigation (Link component)
    type?: 'button' | 'submit' | 'reset'; // Optional button type (default is 'button')
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  onClick,
                                                  buttonLink,
                                                  type = 'button', // Default to 'button' type
                                              }) => {

    // If buttonLink is provided, render a Link component for navigation
    if (buttonLink) {
        return (
            <Link to={buttonLink}>
                <button
                    className="btn" // Apply default button styles (defined in CSS)
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </Link>
        );
    } else {
        // Otherwise, render a regular button
        return (
            <button
                className="btn" // Apply default button styles
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        );
    }
}

