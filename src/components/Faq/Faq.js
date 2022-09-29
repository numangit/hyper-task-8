import React from 'react';

const Faq = () => {
    return (
        <div className="my-lg-4 my-2">
            <h2 className="fw-semibold mb-2 my-lg-5">Freqently Asked Questions</h2>
            <div className="my-lg-3 my-1">
                <h4 className="bg-light-navy p-2 rounded-3 mx-5">How does React work ?</h4>
                <p className="bg-dark p-3 rounded-3 mx-5"> ReactJS divides the UI into reusable pieces of code known as components. When a component is updated. The entire UI is re-rendered in the Virtual DOM representation. React computes the differences between the previous DOM representation using diff algorithm. The real DOM is then updated with only the things that have actually changed.</p>
            </div>
            <div className="my-lg-3 my-1">
                <h4 className="bg-light-navy p-2 rounded-3 mx-5">What are the differences between State and Prop ?</h4>
                <p className="bg-dark text-start p-3 rounded-3 mx-5"><strong>Prop </strong> : Props are used to pass data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside.<br />
                    <strong>State </strong> : State is for managing data. State changes if user makes any changes, can be asynchronous. State data can be modified by its own component, but is private.<br /></p>
            </div>
            <div className="my-lg-3 my-1">
                <h4 className="bg-light-navy p-2 rounded-3 mx-5">What are the uses of useEffect hook beside loading data ?</h4>
                <p className="bg-dark text-start p-3 rounded-3 mx-5">Add an event listener for a button.<br />Perform an action when state or props change. <br />Add timer.<br />Directly updating DOM.</p>
            </div>
        </div>
    );
};

export default Faq;