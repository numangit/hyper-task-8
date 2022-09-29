import React from 'react';
import UserImg from './user.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div>
            <div className="d-flex align-content-center ">
                <img className="w-15 rounded-circle me-3" src={UserImg} alt="" />
                <div>
                    <p className="fw-semibold m-0 p-0">Abdul Al Numan</p>
                    <p className="fw-semibold text-warning text-start m-0 p-0 ">● Active</p>
                </div>
            </div>
            <div className="bg-navy d-flex justify-content-evenly rounded-4 my-3 p-3">
                <div className="">
                    <p className="m-0 p-0" >70<small className="text-muted m-0 p-0"> kg</small></p>
                    <p className=" m-0 p-0">Weight</p>
                </div>
                <div className="">
                    <p className="m-0 p-0" >170<small className="text-muted m-0 p-0"> cm</small></p>
                    <p className=" m-0 p-0">Hight</p>
                </div>
                <div className="">
                    <p className="m-0 p-0" >23<small className="text-muted m-0 p-0"> yrs</small></p>
                    <p className=" m-0 p-0">Age</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;