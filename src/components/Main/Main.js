// import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Faq from '../Faq/Faq';
import logo from './icons8-timer-64.png';
import './Main.css';

const Main = (props) => {

    const { activities, addToList } = props;

    return (
        <div className="col col-md-9 order-last order-md-first  bg-navy">
            <span className="my-4 d-flex justify-content-center ms-4"><img className="w-10 me-4" src={logo} alt="" /><h2 className="fw-bolder fs-1 ">Hyper Task</h2></span>
            <h4 className="ms-lg-5 text-center text-lg-start mt-4">Select today’s exercise</h4>
            <Activities activities={activities} addToList={addToList}></Activities>
            <hr className="mt-lg-5" />
            <Faq></Faq>
        </div>
    );
};

export default Main;