import React from 'react';
import Activities from '../Activities/Activities';
import Faq from '../Faq/Faq';
import logoM1 from './logoM1.png';
import './Main.css';

const Main = () => {
    return (
        <div className="col col-md-9 order-last order-md-first  bg-light">
            <div><h2><img className="w-10" src={logoM1} alt="" />HYPER</h2></div>
            <h4>Select today’s exercise</h4>
            <Activities></Activities>
            <Faq></Faq>
        </div>
    );
};

export default Main;