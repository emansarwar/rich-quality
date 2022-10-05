import React from 'react';
import { Link } from 'react-router-dom';

const Context = () => {
    return (
        <>
            <div className='title-link'>
                <div>
                    <h2 className='blog-title'>BLOG-PAGE</h2>


                </div>
                <div>
                    <nav className='blog-link'>
                        <Link to='/semantic'>SEMANTIC TAG</Link>
                        <Link to='/context'>CONTEXT API</Link>
                    </nav>
                </div>
            </div>
            <h2>Context API</h2>
            <hr/>
            <h3>Introduction</h3>
            <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases.</p>
            <h3>Compared to Redux</h3>
            <p>Redux on the other hand gives you a solution to manage your application state in a centralized location and in a standardized way. In fact, React Redux internally uses context to access the global store with the useSelector and useDispatch hooks. React includes the useReducer hook, which lets you manage the components state with reducers, but it lacks a lot of features that would make it easy to manage a whole applications state with it.

                Redux gives you the ability to combine reducers, apply middlewares, make async operations with the help of thunks or saga, reload application state from local storage, and a powerful debugging extension. Replicating these features with useReducer wouldn’t make a lot of sense in my opinion.</p>
        </>
    );
};

export default Context;