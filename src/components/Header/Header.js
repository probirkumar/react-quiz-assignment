import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='header-container'>
                <div className='quiz-container'>
                    <h2>Quiz Exam</h2>
                </div>
                <div className='nav-container'>
                    <Link to='/home'>Home</Link>
                    <Link to='/Statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </div>
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
        </nav>
    );
};

export default Header;