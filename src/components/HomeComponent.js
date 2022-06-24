import React, { useState, createContext } from "react";
import image from '../images/cutting.jpg'
import "./Components.css"
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutUsDialog from "./AboutUsDialog";
import CustomerComponent from "./CustomerDialog";
import GrassCutterDialog from "./GrassCutterDialog";
import GrassCutterRegister from "./CutterRegister";

// using react hooks to accomplish the grass cutter's platform
/**
 * createContext allow sharing of states between components with out using props
*/

export const HomeComponentContext = createContext(null);

const HomeComponent = () => {
  
  const [ourDialog, setOurDialog] = useState(false); // initial state of the about us dialog,  closed
  const [customerDialog, setCustomerDialog] = useState(false); // initial state dialog is closed
  const [cutterDialog, setCutterDialog] = useState(false); // Initial state dialog is closed
  const [register, setRegister] = useState(false); //initial state register dialog closed

  const infoDialog = () => { setOurDialog(true) }; //function to open about-us dialog
  const customerInfo = () => { setCustomerDialog(true) }; //function to open dialong to record customer info
  const grassCutter = () => { setCutterDialog(true) }; // function to open form for new grass cutters
  const cutterRegister = () => { setRegister(true) }; // Opening registration dialog

  return(
    
    <div className="main-pages text-center">
      <HomeComponentContext.Provider 
       value={
          { ourDialog, 
            setOurDialog, 
            customerDialog, 
            setCustomerDialog, 
            cutterDialog, 
            setCutterDialog,
            register,
            setRegister
          }
        }
      >
        <AboutUsDialog />
        <CustomerComponent />
        <GrassCutterDialog />
        <GrassCutterRegister />
      </HomeComponentContext.Provider>
    
      <img src={image} onClick={grassCutter} alt="A man cutting grass"/>
      <div>
        <p onClick={cutterRegister}>Singakuchebela <br/> ingca</p>
      </div>
      <div className="number-of-customers">
        <h1 style={{fontSize: "100px"}}>15</h1>
      </div>
      <Button onClick={customerInfo} className="buttonStyle">COFA UBIZE UBIZE UMNTU AZOCHEBA</Button>
      <Button onClick={infoDialog} className="buttonStyle">COFA UFUNDE KABANZI</Button>
    </div>
  )
}

export default HomeComponent;