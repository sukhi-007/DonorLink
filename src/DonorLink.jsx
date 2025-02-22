import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './DonorLink.css';

const DonorLink = () => {
    const navigate = useNavigate();

    return (
        <div className="image-container">
            {/* Login/Signup Button */}
            <button className="login-button" onClick={() => navigate('/LoginSignupPage')}>
                Login / Signup
            </button>

            {/* Image Stack */}
            <div className="image-stack">
                <img src="/1new.jpg" alt="Image 1" className="image" />
                <img src="/2.png" alt="Image 2" className="image" />
                <img src="/3.png" alt="Image 3" className="image" />

                {/* Leaderboard Button - Placed Between Third & Fourth Image */}
                <div className='block'>
                <button className="leaderboard-button" onClick={() => navigate('/Leaderboard')}>
                    Leaderboard ⭐
                </button>
                </div>
                

                <img src="/Screenshot 2025-02-01 145908.png" alt="Image 4" className="image" />
            </div>
        </div>
    );
};

export default DonorLink;