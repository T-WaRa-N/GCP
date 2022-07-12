import React,{ useContext, useRef, useEffect } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponentContext } from './HomeComponent';

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
    })

    return (
        <dialog open = {customerDialog} className='dialogStyle' ref={dialogRef}>
            <span onClick={closeCustomerDialog}>x</span>
            <p>uzozochetyelwa ezintsukwini izintathu</p>
            <form>
                <input style={inputStyle} placeholder='Ilali okuyo'/>
                <input style={inputStyle} placeholder='Emanini okanye Kwabani'/>
                <input style={inputStyle} placeholder='Umnxeba wokuxhumana nawe 1'/>
                <input style={inputStyle} placeholder='Umnxeba wokuxhumana nawe 2'/>
            </form>
            <Button className="buttonStyle">THUMELA</Button>
        </dialog>
    );
    
};

export default CustomerComponent;