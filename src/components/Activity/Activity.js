import React from 'react';
import './Activity.css';

const Activity = (props) => {
    // console.log(props.activity);
    const { img, about, title, timeRequired } = props.activity;
    return (
        <div>
            <div className="col">
                <div className="card bg-light-navy">
                    <img src={img} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">{title}</h5>
                        <p className="card-text">{about}</p>
                        <p><strong>Time Required :</strong> {timeRequired} <span className="text-muted fw-semibold">minutes</span> </p>
                        <button className="btn btn-success w-75">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;