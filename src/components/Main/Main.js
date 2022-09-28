import React from 'react';
import Faq from '../Faq/Faq';
import logoM1 from './logoM1.png';
import './Main.css';

const Main = () => {
    return (
        <div className="col col-md-9 order-last order-md-first">
            <div><h1><img className="w-10" src={logoM1} alt="" />HYPER</h1></div>
            <Faq></Faq>
        </div>
    );
};

export default Main;