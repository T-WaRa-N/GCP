import React,{ useContext } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponentContext } from './HomeComponent';

const inputStyle = {
    margin: '10px',
    width:'95%',
    textAlign: 'center'
}

const GrassCutterDialog = () => {
   
    const {cutterDialog, setCutterDialog} = useContext(HomeComponentContext); // accessing the state of the parent element
    const closeCutterDialog = () => {setCutterDialog(false)}; // Closing the opened dialog

    return (
        <dialog open = {cutterDialog} className='dialogStyle'>
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