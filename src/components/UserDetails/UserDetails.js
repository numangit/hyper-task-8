import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import './UserDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDetails = (props) => {

    const { activityTime } = props;
    const [breakTime, setBreakTime] = useState(0);
    const storedBreakTime = JSON.parse(localStorage.getItem('Break Time'));

    const breakbtn = (e) => {
        const selectedBreakTime = e.target.innerHTML;
        const currentBreakTime = JSON.parse(localStorage.getItem('Break Time'));

        localStorage.setItem('Break Time', JSON.stringify(selectedBreakTime));
        // this is used to trigger the render
        setBreakTime(currentBreakTime);
    };

    const notify = () => toast.success("Congratulations! You're done with your activity.", { position: "top-center", theme: "dark" });
    return (
        <div className="col col-md-3 order-first order-md-last p-4 bg-light-navy ">
            <div className="sticky-top pt-lg-3" >
                <Profile></Profile>
                <p className="text-start fw-semibold"> Add A Break <small className="text-muted">(minutes)</small></p>
                <div className="bg-navy d-flex justify-content-evenly rounded-4 my-3 p-3">
                    <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">10</button>
                    <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">20</button>
                    <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">30</button>
                    <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">40</button>
                    <button onClick={breakbtn} className="btn btn-sm btn-success rounded-circle">50</button>
                </div>

                <p className="text-start fw-semibold">Activity Details</p>
                <div className="bg-navy d-flex justify-content-between rounded-4 my-3 p-3">
                    <p className="fw-semibold m-1 p-0">Activity time</p>
                    <p className="text-muted m-1 p-0">{activityTime ? activityTime + ' minutes' : '0 minute'}</p>
                </div>
                <div className="bg-navy d-flex justify-content-between rounded-4 my-3 p-3">
                    <p className="fw-semibold m-1 p-0">Break time</p>
                    <p className="text-muted m-1 p-0">{storedBreakTime ? storedBreakTime + ' minutes' : '0 minute'}</p>
                </div>

                <button onClick={notify} className="btn btn-success fw-bold w-75 mt-3">Activity Completed</button>
                <ToastContainer />
            </div>
        </div >
    );
};

export default UserDetails;