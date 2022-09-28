import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="container text-center my-5 bg-light">
                <h2 className="fw-semibold">FQA</h2>
                {/* Question 1 */}
                <div className="accordion w-75 mx-auto my-4" id="accordionExample">
                    <h2 className="rounded border-5 border-secondary text-secondary" id="headingOne">
                        <button className="rounded accordion-button collapsed fw-semibold display-5" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            How does React work ?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body text-secondary">
                            ReactJS divides the UI into reusable pieces of code known as components. When a component is updates. The entire UI is re-rendered in the Virtual DOM representation. React computes the differences between the previous DOM representation using diff algorithm. The real DOM will be updated with only the things that have actually chnaged.
                        </div>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="accordion w-75 mx-auto my-4" id="accordionExample">
                    <h2 className="rounded border-5 border-secondary text-secondary" id="headingTwo">
                        <button className="rounded accordion-button collapsed fw-semibold display-5" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            What are the differences between State and Prop ?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body text-secondary">
                            <strong>Prop </strong> : Props are used to pass data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside.<br />
                            <strong>State </strong> : State is for managing data. State changes if user makes any changes, can be asynchronous. State data can be modified by its own component, but is private.<br />
                        </div>
                    </div>
                </div>

                {/* Question 3 */}
                <div className="accordion w-75 mx-auto my-4" id="accordionExample">
                    <h2 className="rounded border-5 border-secondary text-secondary" id="headingThree">
                        <button className="rounded accordion-button collapsed fw-semibold display-5" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            What are the uses of useEffect hook beside loading data ?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body text-secondary">
                            <ul>
                                <li>Add an event listener for a button.</li>
                                <li>Add timer.</li>
                                <li>Directly updating DOM.</li>
                                <li>Perform an action when state or props change.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Faq;