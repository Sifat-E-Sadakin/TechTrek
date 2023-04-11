import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';

    
const QNA = () => {
    

    useEffect(()=>{
        window.scroll(0,0);
    },[])
    
    
    
    return (
        <div className='bg-blue-200  rounded-lg '>
            <div className='container mx-auto'>
            <h1 className='text-center m-10'>QNA</h1>
            <ol className='list-decimal list-outside py-10'>
                <div className='p-5 '>
                    <li className='py-2'>
                        <h2 className='font-semibold'>When to use Context API? </h2>
                    </li>
                    <p>
                    Context API is useful in React applications when you have data that needs to be shared across multiple components, but passing it through every level of the component tree is not practical. Examples include managing theme, authentication, localization, and configuration. In general, Context API is helpful when you need to share data between components efficiently and without unnecessary complexity.

                    </p>
                    
                </div>
                <div className=' p-5 '>
                    <li className='py-2'>
                        <h2 className='font-semibold'> What is Custom Hook in react?</h2>
                    </li>
                    <p>
                    In React, a custom hook is a function which allows the extraction and reuse of common logic across numerous components. Custom hooks have names that begin with "use," and they have advantages like reusability, abstraction, readability, and simpler testing. Custom hooks, in other words, facilitate effective code reuse and enhance code organization.
                        
                    </p>

                </div>
                <div className='p-5'>
                    <li className='py-2'>
                        <h2 className='font-semibold'> What is useRef in react? </h2>
                    </li>
                    <p>
                    React's useRef hook generates a mutable reference that persists across renders. It gives back a ref object that has a current property that can be used to access and store a value. Managing focus on a particular element and accessing DOM elements are examples of useRef's typical use cases. In a nutshell, useRef is a helpful tool for managing state and working with mutable values in a React application.
                        
                    </p>

                </div>
                <div className='p-5'>
                    <li className='py-2'>
                        <h2 className='font-semibold'> What is useMemo in react? </h2>
                    </li>
                    <p>
                    React's useMemo hook stores the result of a function and only recomputes it if one of the dependencies has changed. It is used to improve performance by preventing useless re-renders. Memorizing the outcome of expensive calculations and minimizing the number of re-renders for a child component are examples of common use cases. In conclusion, useMemo is a practical tool for improving the performance of a React application.
                        
                    </p>

                </div>
            </ol>

            </div>
         
            <Footer ></Footer>
        </div>
    );
};

export default QNA;