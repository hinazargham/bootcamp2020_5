import React from'react';
import Child from './Child.js';
import Child2 from './Child2.js';

const Parent = () => {
    return (
        <div>
        <h1>BOOTCAMP ASSIGNMENT no. 5 (URDU Session)</h1>
        <h1>Topic: React’s Context API and useReducer React Hook</h1>
        <br/>
        <h2>Hello from Parent Component</h2>
        <Child/>
        <Child2/>
        <p>Submitted by Hina Zargham</p>
        </div>
    )
}

export default Parent;