import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="header-area-wrapper">
                <div className="home-text">
                    <h2>What is Your First Reaction To Our Course</h2>
                    <p>Don't wait until tomorrow. Talk to one of our consultants today and learn how to start Yor Course</p>
                    <button className='btn-container'>Get Started</button>
                </div>
                <div className="image-container">
                    <img src="https://provat-quiz.netlify.app/static/media/hero-img.7b1f9e034e56155a1227.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;