import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const { img, about, title, timeRequired } = props.activity;
    const { addToList } = props;
    return (
        <div>
            <div className="col">
                <div className="card bg-light-navy">
                    <img src={img} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">{title}</h5>
                        <p className="card-text">{about}</p>
                        <p><small><strong>Time Required :</strong> {timeRequired} <span className="text-muted fw-semibold">minutes</span></small></p>
                        <button onClick={addToList} className="btn btn-success w-75">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;