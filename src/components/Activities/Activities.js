import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-5 ">
            {
                activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>)
            }
        </div>
    );
};

export default Activities;