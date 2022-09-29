import React from 'react';
import Activities from '../Activities/Activities';
import Faq from '../Faq/Faq';
import logoM1 from './logoM1.png';
import './Main.css';

const Main = () => {
    return (
        <div className="col col-md-9 order-last order-md-first  bg-navy">
            <span className="my-4 d-flex justify-content-center ms-4"><img className="w-10 me-4" src={logoM1} alt="" /><h2 className="fw-semibold">HYPER</h2></span>
            <h4 className="mt-2">Select today’s exercise</h4>
            <Activities></Activities>
            <hr className="mt-lg-5" />
            <Faq></Faq>
        </div>
    );
};

export default Main;