import React,{ useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HomeComponentContext } from './HomeComponent';

const LearnMore = () => {
   
    const {ourDialog, setOurDialog} = useContext(HomeComponentContext); // accessing the state of the parent element
    const closeInfoDialog = () => {setOurDialog(false)}; // Closing the opened dialog

    return (
        <dialog open = {ourDialog} className='dialogStyle'>
            <span onClick={closeInfoDialog}>x</span>
            <p>kafutshane nje, nge khasi labachebi bengca (gcp)</p>
            bcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        </dialog>
    );
    
};

export default LearnMore;