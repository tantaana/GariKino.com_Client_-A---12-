import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-10 mx-4'>
            <div className="card bg-red-300 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-blue-500">Q1. What are the different ways to manage a state in a React application?</h2>
                    <p className='text-lg font-bold'>Ans: There are four ways to properly manage a state in your React apps:<br />
                        <br />
                        1. Local state<br />
                        2. Global state<br />
                        3. Server state<br />
                        4. URL state</p>
                </div>
            </div>

            <div className="card bg-blue-400 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-yellow-400">Q2. How does prototypical inheritance work?</h2>
                    <p className='text-lg font-bold'>
                        Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.<br /> It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>

            <div className="card bg-green-400 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-red-600">Q3. What is a unit test? Why should we write unit tests?</h2>
                    <p className='text-lg font-bold'>
                        Ans: Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components.<br />
                        We should write unit tests because well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming.</p>
                </div>
            </div>

            <div className="card bg-gray-400 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-white">Q4. React vs. Angular vs. Vue?</h2>
                    <p className='text-lg font-bold'>
                        Ans: All of these frameworks are totally fine to be used in a front-end application.<br /> It is true that for big projects, maybe Angular is the best candidate because it gives you a solid structure to be followed and this can help us to have an organized and maintainable base code. Nevertheless, with the proper knowledge of architecture and web development concepts, we can have an organized code with any of these frameworks.<br />

                        Also, the three frameworks have an active community with a lot of documentation, support, and lots of courses available. Regarding performance, they are all pretty similar as well.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;