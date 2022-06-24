import React,{ useContext } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponentContext } from './HomeComponent';

const inputStyle = {
    margin: '10px',
    width:'95%',
    textAlign: 'center'
}

const GrassCutterRegister = () => {
   
    const {register, setRegister} = useContext(HomeComponentContext); // accessing the state of the parent element
    const closeRegsiterDialog = () => {setRegister(false)}; // Closing the opened dialog

    return (
        <dialog open = {register} className='dialogStyle'>
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