import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-container'>
            <div className='quiz-container'>
                <h2>Quiz Exam</h2>
            </div>
            <div className='nav-container'>
                <Link to='/home'>Home</Link>
                <Link to='/Statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;