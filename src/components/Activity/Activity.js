import React from 'react';

const Activity = (props) => {
    // console.log(props.activity);
    const { img, about, title, timeRequired } = props.activity;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{about}</p>
                        <strong>Time Required :</strong> {timeRequired}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;