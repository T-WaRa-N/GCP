import React,{ useContext, useEffect, useRef } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponentContext } from './HomeComponent';

const inputStyle = {
    margin: '10px',
    width:'95%',
    textAlign: 'center'
}

//Functional Component 
const GrassCutterRegister = () => {
   
    const {register, setRegister} = useContext(HomeComponentContext); // accessing the state of the parent element
    const closeRegsiterDialog = () => {setRegister(false)}; // Closing the opened dialog

    const dialogRef = useRef()  // referencing within the dialog page
    
    //handling clickcing outside the dialog box and closing the dialog box
    useEffect(() =>{
        let handler = (event) => { if(!dialogRef.current.contains(event.target)) closeRegsiterDialog() }
    
        document.addEventListener("mousedown", handler)

        return () => { document.removeEventListener("mousedown", handler) }
    })

    return (
        <dialog open = {register} className='dialogStyle' ref={dialogRef}>
            <span onClick={closeRegsiterDialog}>x</span>
            <p>Bhalisa uzocheba ngowakho umtshini wengca</p>
            <form>
                <input style={inputStyle} placeholder='Igama ne Fani'/>
                <input style={inputStyle} placeholder='Mingaphi Imitshini yakho'/>
                <input style={inputStyle} placeholder='Umnxeba wokuxhumana nawe'/>
                <input style={inputStyle} placeholder='Yeyiphi ilali yakho okanye uhlalaphi'/>
            </form>
            <Button className="buttonStyle">THUMELA</Button>
        </dialog>
    );
    
};

export default GrassCutterRegister;