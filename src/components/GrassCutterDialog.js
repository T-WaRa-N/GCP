import React,{ useContext, useEffect, useRef } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponentContext } from './HomeComponent';

//internal styling
const inputStyle = {
    margin: '10px',
    width:'95%',
    textAlign: 'center'
}

const GrassCutterDialog = () => {
   
    const {cutterDialog, setCutterDialog} = useContext(HomeComponentContext); // accessing the state of the parent element
    const closeCutterDialog = () => {setCutterDialog(false)}; // Closing the opened dialog

    const dialogRef = useRef()  // referencing within the dialog page

    //handling clickcing outside the dialog box and closing the dialog box
    useEffect(() =>{
        let handler = (event) => { if(!dialogRef.current.contains(event.target)) closeCutterDialog() }
    
        document.addEventListener("mousedown", handler)

        return () => { document.removeEventListener("mousedown", handler) }
    },[])

    return (
        <dialog open = {cutterDialog} className='dialogStyle' ref={dialogRef}>
            <span onClick={closeCutterDialog}>x</span>
            <p>ngena kwi khasi labachebayo</p>
            <form>
                <input style={inputStyle} placeholder='Igama lakho'/>
                <input style={inputStyle} placeholder='Igama Eliymfihlo'/>
            </form>
            <Button className="buttonStyle">NGENA</Button>
        </dialog>
    );
    
};

export default GrassCutterDialog;