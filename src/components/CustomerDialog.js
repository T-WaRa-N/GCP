import React,{ useContext, useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponentContext } from './HomeComponent';

//internal styling
const inputStyle = {
    margin: '10px',
    width:'95%',
    textAlign: 'center'
}

const CustomerComponent = () => {
   
    const {customerDialog, setCustomerDialog} = useContext(HomeComponentContext); // accessing the state of the parent element
    const closeCustomerDialog = () => {setCustomerDialog(false)}; // Closing the opened dialog

    const dialogRef = useRef()  // referencing within the dialog page

    //handling clickcing outside the dialog box and closing the dialog box
    useEffect(() =>{
        let handler = (event) => { if(!dialogRef.current.contains(event.target)) closeCustomerDialog() }
    
        document.addEventListener("mousedown", handler)

        return () => { document.removeEventListener("mousedown", handler) }
    },[])

    //Local states management
    const [lali, setLali] = useState("")
    const [emanini, setEmanini] = useState("")
    const [umnxeba1, setUmnxeba1] = useState("")
    const [umnxeba2, setUmnxeba2] = useState("")

    //Updating States of the Customer
    const laliUpdate = (event) => {setLali(event.target.value)}
    const emaniniUpdate = (event) => {setEmanini(event.target.value)}
    const umnxeba1Update = (event) => {setUmnxeba1(event.target.value)}
    const umnxeba2Update = (event) => {setUmnxeba2(event.target.value)}

    //Function to post new customer data using axios
    // const postData = () => {
    //     axios.post('/backend-server',{})
    // }
    
    return (
        <dialog open = {customerDialog} className='dialogStyle' ref={dialogRef}>
            <span onClick={closeCustomerDialog}>x</span>
            <p>uzozochetyelwa ezintsukwini izintathu</p>
            <form>
                <input style={inputStyle} placeholder = 'Ilali' value = {lali} onChange={laliUpdate}/>
                <input style={inputStyle} placeholder = 'Emanini' value = {emanini} onChange={emaniniUpdate}/>
                <input style={inputStyle} placeholder = 'Umnxeba 1' value = {umnxeba1} onChange={umnxeba1Update}/>
                <input style={inputStyle} placeholder = 'Umnxeba 2' value = {umnxeba2} onChange={umnxeba2Update}/>
            </form>
            <Button className="buttonStyle" onClick={postData}>THUMELA</Button>
        </dialog>
    );
    
};

export default CustomerComponent;