import React from 'react';
import Profile from '../Profile/Profile';
import './UserDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDetails = () => {

    const notify = () => toast.success("Congratulations! You're done with your activity.", { position: "top-left", theme: "dark" })

    return (
        <div className="col col-md-3 order-first order-md-last p-4 bg-light-navy">
            <Profile></Profile>
            <p className="text-start fw-semibold"> Add A Break <small className="text-muted">(minutes)</small></p>
            <div className="bg-navy d-flex justify-content-evenly rounded-4 my-3 p-3">
                <button className="btn btn-sm btn-success rounded-circle">10</button>
                <button className="btn btn-sm btn-success rounded-circle">20</button>
                <button className="btn btn-sm btn-success rounded-circle">30</button>
                <button className="btn btn-sm btn-success rounded-circle">40</button>
                <button className="btn btn-sm btn-success rounded-circle">50</button>
            </div>

            <p className="text-start fw-semibold">Exercise Details</p>
            <div className="bg-navy d-flex justify-content-between rounded-4 my-3 p-3">
                <p className="fw-semibold m-1 p-0">Exercise time</p>
                <p className="text-muted m-1 p-0">0 minutes</p>
            </div>
            <div className="bg-navy d-flex justify-content-between rounded-4 my-3 p-3">
                <p className="fw-semibold m-1 p-0">Break time</p>
                <p className="text-muted m-1 p-0">0 minutes</p>
            </div>

            <button onClick={notify} className="btn btn-success fw-bold w-75">Activity Completed</button>
            <ToastContainer />

        </div >
    );
};

export default UserDetails;