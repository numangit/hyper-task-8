import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import './UserDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDetails = () => {
    const [breakTime, setBreakTime] = useState([]);
    const storedBreakTime = JSON.parse(localStorage.getItem('Break Time'));

    const breakbtn = (e) => {
        // console.log(e.target.innerHTML);
        const selectedBreakTime = e.target.innerHTML;
        localStorage.setItem('Break Time', JSON.stringify(selectedBreakTime));
        const currentBreakTime = getLocalStorageForSpecifiedKey('Break Time');
        setBreakTime(currentBreakTime);
    };

    const getLocalStorageForSpecifiedKey = (keyName) => {
        const storedData = localStorage.getItem(keyName);
        let dataFound = {};
        if (storedData) {
            dataFound = JSON.parse(storedData);
        }
        return dataFound;
    }

    const notify = () => toast.success("Congratulations! You're done with your activity.", { position: "top-center", theme: "dark" });
    return (
        <div className="col col-md-3 order-first order-md-last p-4 bg-light-navy ">
            <Profile></Profile>
            <p className="text-start fw-semibold"> Add A Break <small className="text-muted">(minutes)</small></p>
            <div className="bg-navy d-flex justify-content-evenly rounded-4 my-3 p-3">
                <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">10</button>
                <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">20</button>
                <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">30</button>
                <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">40</button>
                <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">50</button>
            </div>

            <p className="text-start fw-semibold">Exercise Details</p>
            <div className="bg-navy d-flex justify-content-between rounded-4 my-3 p-3">
                <p className="fw-semibold m-1 p-0">Exercise time</p>
                <p className="text-muted m-1 p-0">0 minutes</p>
            </div>
            <div className="bg-navy d-flex justify-content-between rounded-4 my-3 p-3">
                <p className="fw-semibold m-1 p-0">Break time</p>
                <p className="text-muted m-1 p-0">{storedBreakTime} minutes</p>
            </div>

            <button onClick={notify} className="btn btn-success fw-bold w-75">Activity Completed</button>
            <ToastContainer />

        </div >
    );
};

export default UserDetails;