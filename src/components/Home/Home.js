import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    const topicData = topics.data;
    // console.log(topicData)
    return (
        <div className='topicData-container'>
            {
                topicData.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Home;