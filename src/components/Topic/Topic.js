import React from 'react';
import './Topic.css';

const Topic = ({topic}) => {
    const {logo, name, total} = topic;
    return (
        <div className='topic-container'>
            <div className='img-details'>
                <img src={logo} alt="" />
            </div>
            <div className='text-details'>
                <h1>{name}</h1>
                <h2>Total Class {total}</h2>
                <button className='btn-container'>Course Details</button>
            </div>
        </div>
    );
};

export default Topic;